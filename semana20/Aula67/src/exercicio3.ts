export interface LambdaOutput{
    statusCode: number,
    body: string
}

export const handler = async(event: any): Promise<LambdaOutput> => {
    const num1 = event.num1
    const num2 = event.num2
    
    const resultado = num1 + num2
    const mensagem = `A soma entre ${num1} e ${num2} é ${resultado}`
    
     return{
        statusCode: 200,
        body: JSON.stringify({mensagem})
    }
} 