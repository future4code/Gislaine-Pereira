export interface Usuario{
    nome: string,
    saldo: number
}

export function podeComprar(usuario: Usuario, valor: number): Usuario | undefined {
    if (usuario.saldo >= valor) {
        return {
            ...usuario,
            saldo: usuario.saldo - valor
        }
    }
    return undefined
}