import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdministradorService } from '../services/administrador.service';

@Component({
  selector: 'app-trocar-senha',
  templateUrl: './trocar-senha.component.html',
  styleUrls: ['../../../../styles-admin.css']
})
export class TrocarSenhaComponent {
private id: string;
novaSenha : string = ""

constructor(private route : ActivatedRoute, private service : AdministradorService, private router: Router){
  this.id = String(this.route.snapshot.paramMap.get('id'))
}

atualizarSenha(){
  this.service.recuperarSenha(this.id, this.novaSenha).subscribe(result => {

  }, error => {
    if(error.status === 200){
    }else{
      alert("Senha alterada com sucesso.")
      this.router.navigate(["/admin/login"])
    }
  })
}
}
