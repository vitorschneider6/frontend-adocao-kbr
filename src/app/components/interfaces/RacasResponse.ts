export interface RacasResponse {
    data: [{
        id: number,
        nome: string,
        descricao: string,
        especieId: number,
        especie?: string
      }];
      erros: any[];
}