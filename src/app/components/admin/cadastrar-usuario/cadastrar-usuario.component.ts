import { Component } from '@angular/core';
import { AdministradorService } from '../services/administrador.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['../../../../styles-admin.css']
})
export class CadastrarUsuarioComponent {

  public novoUsuario = {
    nome: "",
    email: "",
    senha: "",
  }

  public confSenha = ""
  constructor(private service: AdministradorService, private router : Router, private cookies : CookieService) {
    
  }


  cadastrarUsuario(){
    if(this.novoUsuario.senha !== this.confSenha){
      alert("As duas senhas não são iguais!")
    }
    else{
      this.service.cadastrarUsuario(this.novoUsuario).subscribe(result => {
        alert("Usuário cadastrado com sucesso!")
        this.router.navigate(["/admin/home"])

      }, error => {
        alert("Algo deu errado!")
      })
    }
  }

  ngOnInit(){
    this.service.logado().subscribe(result => {
      
    }, error => {
      if(error.status !== 200){
      this.cookies.deleteAll();
      this.router.navigate(["/admin/login"])
      }
    })
  }

}
