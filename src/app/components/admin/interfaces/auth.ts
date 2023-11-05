export interface AuthResponse{
    data: {
        token: string,
        nome: string,
        id: string
    },
    erros: []
}