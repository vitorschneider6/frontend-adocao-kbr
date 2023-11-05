import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { SolicitacaoResponse } from '../interfaces/solicitacoes-response';

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoAdminService {
  private readonly token = this.cookies.get('token')
  private readonly endpointGetSolicitacoes = "https://vitor-adocao-kbr.azurewebsites.net/v1/solicitacoes?"

  constructor(private http : HttpClient, private cookies : CookieService) { }

  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    })
  };

  getAllSolicitacoes(query : string){
    let endpoint = `${this.endpointGetSolicitacoes}${query}`
    return this.http.get<SolicitacaoResponse>(endpoint, this.httpOptions)
  }
}
