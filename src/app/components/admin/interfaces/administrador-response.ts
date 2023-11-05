export interface AdministradorResponse{
    data: {
        total: number,
        page: number,
        pageSize: 12,
        administradores:
    [{
        id: string,
        nome: string,
        email: string,
        senha: string,
        recuperacao: string | null
    }],
    erros: []
}}