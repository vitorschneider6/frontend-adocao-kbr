import { Component } from '@angular/core';
import { AdministradorService } from '../services/administrador.service';
import { Administrador } from '../interfaces/administrador';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['../../../../styles-admin.css']
})
export class HomeAdminComponent {
  public administradores : Administrador[] = []
  public administradorModal? : Administrador
  public nomeFiltro : string = ""
  public page = 0
  public query = `page=${this.page}&nome=${this.nomeFiltro}`
  public precisaPaginacao? : boolean
  public totalPaginas : number = 0

  constructor(private service: AdministradorService, private router : Router, private cookies : CookieService){

    this.getAllUsuarios();
  }



  infoModal(admin : Administrador){
    this.administradorModal = admin
  }

  apagarUsuario(id: string, nome: string){
    this.service.apagarUsuario(id).subscribe(result => {
      alert(`Usuário ${nome} apagado com sucesso!`)
      this.router.navigate(["/admin/login"])
    }, error => {
      alert("Ops... Algo deu errado")
    })
  }

  getAllUsuarios(){
    this.query = `page=${this.page}&nome=${this.nomeFiltro}`
    this.administradores = []
    this.service.listarAdministradores(this.query).subscribe(result => {
      result.data.administradores.forEach(x => {
        let administrador = {
          id: x.id,
          nome: x.nome,
          email: x.email,
          senha: x.senha
        }

        this.administradores.push(administrador)
      })
      this.precisaPaginacao = Math.ceil(result.data.total / result.data.pageSize) > 1
      this.totalPaginas = Math.ceil(result.data.total / result.data.pageSize)
    }, error => {
    })
  }

  handlePaginacao(page : number){
    if(page >= 0 && page < this.totalPaginas){
      this.page = page
      this.getAllUsuarios();
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
