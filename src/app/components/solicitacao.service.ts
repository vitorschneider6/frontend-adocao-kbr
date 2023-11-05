import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Solicitacao } from './interfaces/solicitacao';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoService {

  private endpointCadastrarSolicitacao = "http://vitor-adocao-kbr.azurewebsites.net/v1/solicitacoes"
  private readonly token = this.cookies.get('token')
  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    })
  };
  
  constructor(private http: HttpClient, private cookies : CookieService) { }

  postSolicitacao(solicitacao: Solicitacao){
    return this.http.post(this.endpointCadastrarSolicitacao, solicitacao)
  }

}
