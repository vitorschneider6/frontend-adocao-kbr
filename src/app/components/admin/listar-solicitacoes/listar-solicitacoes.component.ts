import { Component } from '@angular/core';
import { SolicitacaoModal } from '../interfaces/solicitacao-modal';
import { Router } from '@angular/router';
import { SolicitacaoAdminService } from '../services/solicitacao.service';
import { Papa } from 'ngx-papaparse';
import { Solicitacao } from '../../interfaces/solicitacao';
import { AdministradorService } from '../services/administrador.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-listar-solicitacoes',
  templateUrl: './listar-solicitacoes.component.html',
  styleUrls: ['../../../../styles-admin.css']
})
export class ListarSolicitacoesComponent {

  public solicitacoes : SolicitacaoModal[] = []
  public solicitacaoModal? : SolicitacaoModal
  public nomeSolicitante : string = ""
  public nomeAnimal : string = ""
  public dataInicial : string = ""
  public dataFinal : string = ""
  public page = 0
  public query = `dataFinal=${this.dataFinal}&dataInicial=${this.dataInicial}&nomeSolicitante=${this.nomeSolicitante}&nomeAnimal=${this.nomeAnimal}`
  public precisaPaginacao? : boolean
  public totalPaginas : number = 0

  constructor(private service: SolicitacaoAdminService, private router : Router, private papa: Papa, private adminService : AdministradorService, private cookies : CookieService){

    this.getAllSolicitacoes();
  }



  infoModal(solicitacao : SolicitacaoModal){
    this.solicitacaoModal = solicitacao
  }

  getAllSolicitacoes(){
    let dataFinalSplit = this.dataFinal.split("/")
    let dataInicialSplit = this.dataInicial.split("/")
    let dataFinal = `${dataFinalSplit[2]}-${dataFinalSplit[1]}-${dataFinalSplit[0]}`
    let dataInicial = `${dataInicialSplit[2]}-${dataInicialSplit[1]}-${dataInicialSplit[0]}`

    this.query = `dataFinal=${dataFinal}&dataInicial=${dataInicial}&nomeSolicitante=${this.nomeSolicitante}&nomeAnimal=${this.nomeAnimal}`
    this.solicitacoes = []
    this.service.getAllSolicitacoes(this.query).subscribe(result => {
      this.solicitacoes = result.data.solicitacoes

      this.precisaPaginacao = Math.ceil(result.data.total / result.data.pageSize) > 1
      this.totalPaginas = Math.ceil(result.data.total / result.data.pageSize)
    }, error => {
      this.router.navigate(["/admin/solicitacoes"])
    })
  }

  handlePaginacao(page : number){
    if(page >= 0 && page < this.totalPaginas){
      this.page = page
      this.getAllSolicitacoes();
    }
  }

  exportCSV() {
    let data : any[] = []

    this.solicitacoes.forEach(x => {
      data.push({
        Solicitante: x.nomeSolicitante,
        Email: x.email,
        Numero: x.celular,
        CPF: x.cpf,
        AnimalId: x.animalId,
        Animal: x.animal.nome
      })
    })

    const csv = this.papa.unparse(data);;

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'dados.csv';
    a.click();

    window.URL.revokeObjectURL(url);
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
