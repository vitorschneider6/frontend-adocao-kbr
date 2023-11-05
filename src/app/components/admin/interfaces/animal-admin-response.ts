export interface AnimalAdminResponse{
    data: {
        total: number,
        page: number,
        pageSize: number,
        animais: [
            {
                id: number,
                nome: string,
                idade: number,
                peso: number | null,
                sobre: string,
                ativo: boolean,
                local: string,
                porte: string,
                sexo: string,
                fotoId: number,
                fotos: [
                    {
                        fotoId: number,
                        animalId: number,
                        base64Image: string
                    }
                ],
                especieId: number,
                especie: {
                    id: number,
                    nome: string
                },
                racaId: number,
                raca: {
                    id: number,
                    nome: string,
                    descricao: string,
                    especieId: number,
                    especie: string | null
                }
            }
        ]
    }
}