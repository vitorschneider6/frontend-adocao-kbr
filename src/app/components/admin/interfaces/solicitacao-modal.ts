export interface SolicitacaoModal {
  id: number;
  nomeSolicitante: string;
  cpf: string;
  email: string;
  celular: string;
  dataNascimento: string;
  dataSolicitacao: string;
  animalId: number;
  animal: {
    id: number;
    nome: string;
    idade: number;
    peso: number;
    sobre: string;
    ativo: boolean;
    local: string;
    porte: string;
    sexo: string;
    fotoId: number;
    fotos: null;
    especieId: number;
    especie: null;
    racaId: number;
    raca: null;
  };
}
