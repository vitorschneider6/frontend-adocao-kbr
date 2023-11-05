import { Administrador } from './../interfaces/administrador';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { AdministradorService } from '../services/administrador.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['../../../../styles-admin.css']
})
export class EditarUsuarioComponent {


  public admin? : Administrador;


getUsuario(){
  const id = String(this.route.snapshot.paramMap.get("id"))
  this.service.getUsuarioId(id).subscribe(result => {
    let admin = {
      id: result.data.id,
      nome: result.data.nome,
      email: result.data.email,
      senha: ""
    }
    this.admin = admin;
  })
}

constructor(private route: ActivatedRoute, private service : AdministradorService, private router: Router, private cookies : CookieService){

}

editarUsuario(){
  if(this.admin){
    this.service.editarUsuario(this.admin).subscribe(result => {
      alert("Administrador alterado com sucesso!")
      this.router.navigate(["/admin/home"])
    }, error => {
      alert("Aconteceu algo de errado!")
    })
  }
  else{
    alert("Algo errado aconteceu!")
  }

}

ngOnInit(){
  this.getUsuario()

  this.service.logado().subscribe(result => {
      
  }, error => {
    if(error.status !== 200){
    this.cookies.deleteAll();
    this.router.navigate(["/admin/login"])
    }
  })
}

}
