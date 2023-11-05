import { CookieService } from 'ngx-cookie-service';
import { AdministradorService } from './../services/administrador.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../../styles-admin.css']
})
export class LoginComponent {

  public dados = {
    email: "",
    senha: ""
  }

  carregando : boolean = false;

  private logado = false;
 
  constructor(private service: AdministradorService, private cookies: CookieService, private router: Router) {;
    
  }

  ngOnInit(){
  }

  login(){
    this.service.auth(this.dados.email, this.dados.senha).subscribe(result => {
        setTimeout(() => {
          this.router.navigate(["/admin/home"])
          window.location.reload();
        }, 5000)

        console.log(result.data)
        this.cookies.set('token', result.data.token)
        this.cookies.set('nome', result.data.nome)
        this.cookies.set('id', result.data.id)
        this.carregando = true;
  
   
    }, error => {
      alert("Usuario ou senha invalidos")
    })
}
  
  isLogado(){
    this.service.logado().subscribe(result => {}, error => {
      if(error.status == 200){
        this.logado = true
        window.location.reload()
        this.router.navigate(["/admin/home"])
      }else{
        this.logado = false
        console.log(error.status)
      }
    })
  } 
}
