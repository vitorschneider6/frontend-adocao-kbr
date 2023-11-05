import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdministradorService } from '../services/administrador.service';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['../../../../styles-admin.css']
})
export class RecuperarSenhaComponent {

email : string = ""

constructor(private service: AdministradorService, private router : Router){}

gerarLinkRecuperacao(){
  this.service.enviarLinkRecuperacao(this.email).subscribe(result => {

  }, error => {
    if(error.status === 200){
      alert("O link para recuperação foi enviado para o seu e-mail.")
      this.router.navigate(["/admin/login"])
    }
    else{
      alert("Conta não encontrada.")
    }
  })
}

ngOnInit(){

}
}
