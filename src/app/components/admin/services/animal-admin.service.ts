import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AnimalAdminResponse } from '../interfaces/animal-admin-response';
import { AnimalCriacao } from '../../interfaces/animal-criacao';
import { AnimalCriacaoResponse } from '../../interfaces/animal-criacao-response';

@Injectable({
  providedIn: 'root'
})
export class AnimalAdminService {

  private readonly endpointGetAllAnimals = "http://vitor-adocao-kbr.azurewebsites.net/admin/animais"
  private readonly endpointDeleteAnimal = "http://vitor-adocao-kbr.azurewebsites.net/v1/animais"
  private readonly endpointAddAnimal = "http://vitor-adocao-kbr.azurewebsites.net/v1/animais"
  private readonly endpointEditarAnimal = "http://vitor-adocao-kbr.azurewebsites.net/v1/animais/"
  private readonly endpointAddFoto = "http://vitor-adocao-kbr.azurewebsites.net/v1/animais/upload-image/"
  private readonly token = this.cookies.get('token')
  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    })
  };

  constructor(private http : HttpClient, private cookies : CookieService) { }

  getAnimais(query: string){
    let endpoint = `${this.endpointGetAllAnimals}?${query}`
    return this.http.get<AnimalAdminResponse>(endpoint, this.httpOptions)
  }

  apagarAnimal(id: number){
    let endpoint = `${this.endpointDeleteAnimal}/${id}`
    return this.http.delete(endpoint, this.httpOptions)
  }

  addAnimal(animal : AnimalCriacao){
    return this.http.post<AnimalCriacaoResponse>(this.endpointAddAnimal, animal, this.httpOptions)
  }

  editarAnimal(animal : AnimalCriacao, id: number){
    let endpoint = `${this.endpointEditarAnimal}${id}`
    return this.http.put<AnimalCriacaoResponse>(endpoint, animal, this.httpOptions)
  }

  addFoto(id: number, listaFotos: string[]){
    let endpoint = `${this.endpointAddFoto}${id}`
    let body = {
      "Base64Images": listaFotos
    }
    return this.http.post(endpoint, body, this.httpOptions)
  }
}
