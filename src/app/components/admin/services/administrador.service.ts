import { CadastrarAdministrador } from '../interfaces/cadastrar-administrador';
import { Administrador } from './../interfaces/administrador';
import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AdministradorResponse } from '../interfaces/administrador-response';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AdministradorUnique } from '../interfaces/administradoruniqueresponse';
import { AuthResponse } from '../interfaces/auth';

@Injectable({
  providedIn: 'root',
})
export class AdministradorService {
  private readonly endpointGetAdministradores =
    'https://vitor-adocao-kbr.azurewebsites.net/v1/administradores';
    private readonly endpointGetAdministrador = 'https://vitor-adocao-kbr.azurewebsites.net/v1/administradores/'
    private readonly endpointRegisterAdministrador = "https://vitor-adocao-kbr.azurewebsites.net/v1/register"
    private readonly endpointAuthAdmin = 'https://vitor-adocao-kbr.azurewebsites.net/v1/login'
    private readonly endpointAuth = 'https://vitor-adocao-kbr.azurewebsites.net/v1/auth'
    private readonly endpointUpdateAdministrador = "https://vitor-adocao-kbr.azurewebsites.net/v1/administradores/"
    private readonly endpointDeleteAdministrador = "https://vitor-adocao-kbr.azurewebsites.net/v1/administradores/"
    private readonly endpointRecuperarSenha = "https://vitor-adocao-kbr.azurewebsites.net/v1/recuperar-senha/"
    private readonly endpointGerarRecuperacao = "https://vitor-adocao-kbr.azurewebsites.net/v1/gerar-recuperacao/"
    private readonly token = this.cookies.get('token')
    private httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    };


  constructor(private http: HttpClient, private cookies : CookieService) {}

  listarAdministradores(query: string) {
      let endpoint = `${this.endpointGetAdministradores}?${query}`
    return this.http.get<AdministradorResponse>(endpoint, this.httpOptions)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error)
      })
    );
}

getUsuarioId(id: string){
  let endpoint = `${this.endpointGetAdministrador}${id}`
  return this.http.get<AdministradorUnique>(endpoint)
}

auth(inEmail: string, inSenha: string){
  let conta = {
    email: inEmail,
    senha: inSenha
  }
  return this.http.post<AuthResponse>(this.endpointAuthAdmin, conta)
}

cadastrarUsuario(novaConta: CadastrarAdministrador){


  return this.http.post(this.endpointRegisterAdministrador, novaConta, this.httpOptions)
}

editarUsuario(novoAdministrador: Administrador){
  let endpoint = `${this.endpointUpdateAdministrador}${novoAdministrador.id}`
  let body = {
    nome: novoAdministrador.nome,
    email: novoAdministrador.email,
    senha: novoAdministrador.senha
  }
  return this.http.put(endpoint, body, this.httpOptions)
}

apagarUsuario(id: string){
  let endpoint = `${this.endpointDeleteAdministrador}${id}`
  return this.http.delete(endpoint, this.httpOptions)
}

recuperarSenha(id: string, novaSenha : string){
  let endpoint = `${this.endpointRecuperarSenha}${id}`
  let body = {
    senha: novaSenha
  }
  return this.http.put(endpoint, body)
}

enviarLinkRecuperacao(email: string){
  let endpoint = `${this.endpointGerarRecuperacao}${email}`
  return this.http.post(endpoint, {})
}


logado(){
  this.httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.cookies.get("token")}`
    })
  };
  return this.http.post(this.endpointAuth, {}, this.httpOptions);
}

}
