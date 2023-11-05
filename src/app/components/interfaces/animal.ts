export interface Animal {
    codigo: number,
    nome: string,
    sexo: string,
    especie: string,
    porte: string,
    idade: number,
    raca: string,
    peso: number | null,
    local: string,
    sobre: string,
    fotoUm: string
    listaFotos: [
        {
            fotoId: number,
            animalId: number,
            base64Image: string
        }
    ]
}