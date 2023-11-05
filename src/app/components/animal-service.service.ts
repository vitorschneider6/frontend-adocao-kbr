import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { FiltrarAnimalResponse } from './interfaces/filtrar-animal-response';
import { EspeciesResponse } from './interfaces/especies-response';
import { RacasResponse } from './interfaces/RacasResponse';
import { AnimalResponse } from './interfaces/animal-response';

@Injectable({
  providedIn: 'root'
})
export class AnimalServiceService {

  private readonly endpointFiltrarAnimais = 'https://vitor-adocao-kbr.azurewebsites.net/v1/filtrar/animais/';
  private readonly endpointListarEspecies = 'https://vitor-adocao-kbr.azurewebsites.net/v1/especies';
  private readonly endpointListarRacas = 'https://vitor-adocao-kbr.azurewebsites.net/v1/all/racas/'
  private readonly endpointGetAnimal = 'https://vitor-adocao-kbr.azurewebsites.net/v1/animais'

  constructor(private http : HttpClient) { }

  listar(query: string){
    let endpoint = `${this.endpointFiltrarAnimais}${query}`
    return this.http.get<FiltrarAnimalResponse>(endpoint);
  }

  listarEspecies(){
    return this.http.get<EspeciesResponse>(this.endpointListarEspecies)
  }

  listarRacas(especieId : number){
    let endpoint = this.endpointListarRacas + especieId
      return this.http.get<RacasResponse>(endpoint)
  }

  getAnimal(animalId: number){
    let endpoint = `${this.endpointGetAnimal}/${animalId}`
    return this.http.get<AnimalResponse>(endpoint)
  }

}
