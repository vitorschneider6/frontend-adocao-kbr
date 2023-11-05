import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalServiceService } from '../animal-service.service';
import { Solicitacao } from '../interfaces/solicitacao';
import { SolicitacaoService } from '../solicitacao.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['../../../styles-user.css']
})
export class FormularioComponent {

  captcha : string;

  public id = Number(this.route.snapshot.paramMap.get("id"))

  public animal = {
    codigo: this.id,
    nome: ""
  }

  public solicitacao : Solicitacao = {
    nomeSolicitante: "",
    cpf: "",
    email: "",
    celular: "",
    dataNascimento: "",
    animalId: this.animal.codigo
  }

  constructor(private route: ActivatedRoute, private service : AnimalServiceService, private solicitacaoService : SolicitacaoService, private router : Router) {
    this.captcha = ""
  }

  resolved(captchaResponse : string){
    this.captcha = captchaResponse
  }

  ngOnInit(){
    this.getAnimal()
  }

  getAnimal(){

    this.service.getAnimal(this.id).subscribe(result => {
      this.animal.nome = result.data.nome
    })
  }

  solicitarAdocao(){
    let data = this.solicitacao.dataNascimento.split("/")
    this.solicitacao.dataNascimento = `${data[2]}-${data[1]}-${data[0]}`
    this.solicitacaoService.postSolicitacao(this.solicitacao).subscribe(result => {
      alert("Sua solicitação foi cadastrada com sucesso!")
      this.router.navigate([`/animal/${this.animal.codigo}`])
    }, error => {
      alert("Ops... Algo deu errado.")
    })
  }

}
