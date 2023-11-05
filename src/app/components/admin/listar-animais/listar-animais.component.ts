import { CookieService } from 'ngx-cookie-service';
import { Component } from '@angular/core';
import { AnimalAdminService } from '../services/animal-admin.service';
import { Router } from '@angular/router';
import { AnimalAdminResponse } from '../interfaces/animal-admin-response';
import { AnimalAdmin } from '../interfaces/animal-admin';
import { AdministradorService } from '../services/administrador.service';

@Component({
  selector: 'app-listar-animais',
  templateUrl: './listar-animais.component.html',
  styleUrls: ['../../../../styles-admin.css']
})
export class ListarAnimaisComponent {
  public animais? : AnimalAdminResponse
  public animaisModal? : AnimalAdmin
  public nomeFiltro : string = ""
  public page = 0
  public query = `page=${this.page}&nome=${this.nomeFiltro}`
  public precisaPaginacao? : boolean
  public totalPaginas : number = 0

  constructor(private service: AnimalAdminService, private router : Router, private cookies : CookieService, private adminService : AdministradorService){

    this.getAllAnimais();
  }



  infoModal(animal : AnimalAdmin){
    this.animaisModal = animal
  }

  apagarAnimal(id: number, nome: string){
    this.service.apagarAnimal(id).subscribe(result => {
      alert(`Animal ${nome} apagado com sucesso!`)
      this.router.navigate(["/admin/animais"])
      window.location.reload()
    }, error => {
      alert("Ops... Algo deu errado")
    })
  }

  getAllAnimais(){
    this.query = `page=${this.page}&nome=${this.nomeFiltro}`
    this.service.getAnimais(this.query).subscribe(result => {
        this.animais = result
        this.precisaPaginacao = Math.ceil(result.data.total / result.data.pageSize) > 1
        this.totalPaginas = Math.ceil(result.data.total / result.data.pageSize)
      }, error => {
      })

    }

    handlePaginacao(page : number){
      if(page >= 0 && page < this.totalPaginas){
        this.page = page
        this.getAllAnimais();
      }
    }
  
  
  
    ngOnInit(){
      this.adminService.logado().subscribe(result => {
      
      }, error => {
        if(error.status !== 200){
        this.cookies.deleteAll();
        this.router.navigate(["/admin/login"])
        }
      })
    }
  }



