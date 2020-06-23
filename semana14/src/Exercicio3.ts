function verNumeros(sequenciaNumeros: number[]): number | void {
    
    type respostas = {
        quantosNumeros: number,
        quantosImpares: number,
        somatorio: number
    }

    const impares = sequenciaNumeros.filter((numero) =>{
        return numero % 2 !== 0 
    });

    let somaTudo: number = 0
    for (let i = 0; i < sequenciaNumeros.length; i++) {
        somaTudo += sequenciaNumeros[i]
    }


    const objetoFinal: respostas = {
        quantosNumeros: sequenciaNumeros.length,
        quantosImpares: impares.length,
        somatorio: somaTudo,
    }

    console.log(objetoFinal)
}

verNumeros([1,50,35,108,7,86,37])
