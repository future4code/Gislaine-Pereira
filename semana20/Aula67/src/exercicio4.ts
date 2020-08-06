export interface LambdaOutput{
    statusCode: number,
    body: string
}

export const handler = async(event: any): Promise<LambdaOutput> => {
    const key = event.key
    const posicaoarroba = key.indexOf("@");
    const posicaoponto = key.lastIndexOf(".");
    let mensagem ={}
    let status = 0

    if (posicaoarroba < 1 && posicaoponto < 2){
        status = 400,
        mensagem = {
            "isEmail": false,
            "reason": "Sem arroba e . ausente ou inválido"
        }
    } else if (posicaoarroba < 1){
        status = 400,
        mensagem = {
            "isEmail": false,
            "reason": "Sem arroba ('@')"
        }
    } else if (posicaoponto < 2){
        status = 400,
        mensagem = {
            "isEmail": false,
            "reason": "Ponto ausente ou inválido"
        }
    }else{
        status = 200,
        mensagem = {
            "isEmail": true,
        }
    }
    
    
    return{
        statusCode: status,
        body: JSON.stringify({mensagem})
    }
} 