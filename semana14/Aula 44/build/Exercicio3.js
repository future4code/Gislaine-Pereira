function verNumeros(sequenciaNumeros) {
    const impares = sequenciaNumeros.filter((numero) => {
        return numero % 2 !== 0;
    });
    let somaTudo = 0;
    for (let i = 0; i < sequenciaNumeros.length; i++) {
        somaTudo += sequenciaNumeros[i];
    }
    const objetoFinal = {
        quantosNumeros: sequenciaNumeros.length,
        quantosImpares: impares.length,
        somatorio: somaTudo,
    };
    console.log(objetoFinal);
}
verNumeros([1, 50, 35, 108, 7, 86, 37]);
//# sourceMappingURL=Exercicio3.js.map