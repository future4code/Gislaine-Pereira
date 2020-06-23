enum Eras {
    AC = "AC",
    DC = "DC"
}

function qualEra(ano: number, era?: Eras): string {
    let defineEra: Eras = era
    era === undefined ? defineEra = Eras.DC : defineEra = era
    
    let transformaAno: number = 0
    defineEra === "AC" ? transformaAno = ano * -1 : transformaAno = ano 
    
    if (transformaAno < -400){
        return "Pré - Histórica"
    } else if (transformaAno >= -400 && transformaAno < 476){
        return "Idade Antiga"
    } else if (transformaAno >= 476 && transformaAno < 1453){
       return "Idade Média"
    } else if (transformaAno >= 1453 && transformaAno < 1789) {
        return "Idade Moderna"
    } else {
        return "Idade Contemporânea"
    }
}

console.log("10.000 AC" + qualEra(10000, Eras.AC))
console.log("3.0000 AC" + qualEra(3000, Eras.AC))
console.log("120 DC" + qualEra(120, Eras.DC))
console.log("700 DC" + qualEra(700, Eras.DC))
console.log("1.700 DC" + qualEra(1, Eras.DC))
console.log("1.990 DC" + qualEra(500, Eras.DC))