export interface FiltrarAnimalResponse {
  data: {
    total: number,
    page: number,
    pageSize: number,
    animaisFiltro: [
        {
            id: number,
            nome: string,
            sexo: string,
            local: string,
            imagens: [
              {
              fotoId: number,
              animalId: number,
              base64Image: string
            }
          ] | null
        }
    ]
},
"erros": []
} 