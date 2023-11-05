import { AnimalServiceService } from './../animal-service.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from '../interfaces/animal';
@Component({
  selector: 'app-integra',
  templateUrl: './integra.component.html',
  styleUrls: ['../../../styles-user.css']
})


export class IntegraComponent {
  animal? : Animal

  constructor(private route : ActivatedRoute,
    private service: AnimalServiceService) {
      this.getAnimal()
  }

  getAnimal(){
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.service.getAnimal(id).subscribe(result => {
      let animal = {
        codigo: result.data.id,
        nome: result.data.nome,
        sexo: result.data.sexo,
        especie: result.data.especie.nome,
        porte: result.data.porte,
        raca: result.data.raca.nome,
        idade: result.data.idade,
        peso : result.data.peso,
        local: result.data.local,
        sobre: result.data.sobre,
        fotoUm: result.data.fotos[0].base64Image,
        listaFotos: result.data.fotos
      }
      animal.listaFotos.shift()
      this.animal = animal
    })
  }



  ngOnInit(): void{

  }
}
