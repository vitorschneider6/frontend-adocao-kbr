import { filtrarAnimal } from '../interfaces/filtrarAnimal';
import { Component } from '@angular/core';
import { AnimalListagem } from '../interfaces/animal-listagem';
import { AnimalServiceService } from '../animal-service.service';
import { Especie } from '../interfaces/especie';
import { Raca } from '../interfaces/racas';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quero-adotar',
  templateUrl: './quero-adotar.component.html',
  styleUrls: ['../../../styles-user.css']
})
export class QueroAdotarComponent {

  constructor(private animalService : AnimalServiceService, private route : ActivatedRoute, private router: Router){}

  public filtro : filtrarAnimal = {
    EspecieId: 0,
    RacaId: 0,
    Local: "",
    Porte: "",
    Sexo: "" 
  }

  total? : number
  page: number = 0
  pageSize?: number
  precisaPaginacao? : boolean
  totalPaginas = 0


  public especies : Especie[] = []

  public animais : AnimalListagem[] = []

  public racas : Raca[] = []

  filtrarBusca(){
    this.animais = [];
    let query = `?especie=${this.filtro.EspecieId}&raca=${this.filtro.RacaId}&local=${this.filtro.Local}
    &porte=${this.filtro.Porte}&sexo=${this.filtro.Sexo}&page=${this.page}`
    this.animalService.listar(query
      ).subscribe((result) => {
        result.data.animaisFiltro.forEach(x => {
          let animal = {
            codigo: x.id,
            nome: x.nome,
            local: x.local,
            sexo: x.sexo,
            imagem: x.imagens?.at(0)?.base64Image
          }
          
          this.animais.push(animal)
        })
        this.precisaPaginacao = Math.ceil(result.data.total / result.data.pageSize) > 1
        this.totalPaginas = Math.ceil(result.data.total / result.data.pageSize)
        this.handleAnterior()
      })
  }

  listarRacas(){
    this.racas = []
    if(this.filtro.EspecieId !== null){
    this.animalService.listarRacas(this.filtro.EspecieId).subscribe(resultado => {
      resultado.data.forEach(x => {
        let raca = {
          id: x.id,
          nome: x.nome
        }
        this.racas.push(raca)
      })
    })}
  }

  handlePaginacao(route: number){
    this.router.navigate([`/filtrarAnimais/${route}`])
    this.page = route
    this.filtrarBusca()
  }

  handleAnterior(){
    if(this.page !== 0){
      this.handlePaginacao(this.page - 1)
    }
  }

  handleProximo(){
    if(this.page < this.totalPaginas - 1){
      this.handlePaginacao(this.page + 1)
    }
  }

  ngOnInit() : void{
    let routePage = Number(this.route.snapshot.paramMap.get('page'))
    if(routePage){
      this.page = routePage
    }
    this.filtrarBusca()
    this.animalService.listarEspecies().subscribe(resultado => {
      resultado.data.forEach(x => {
        let especie = {
          id: x.id,
          nome: x.nome
        }
        this.especies.push(especie)
      })
    })
  }

}
