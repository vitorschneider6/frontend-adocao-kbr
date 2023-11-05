export interface AdministradorUnique{
    data: {
        id: string,
        nome: string,
        email: string,
        senha: string,
        recuperacao: string | null
    },
    erros: []
}