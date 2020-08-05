export interface LambdaOutput{
    statusCode: number,
    body: string
}

export const handler = async(envent: any): Promise<LambdaOutput> => {
    const mensagem = "Olá mundo, sou uma mensagem da AWS"
    
    return{
        statusCode: 200,
        body: JSON.stringify({mensagem})
    }
} 