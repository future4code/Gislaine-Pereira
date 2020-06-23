// A)
function sum(a: number, b: number): number {
    return (a + b)
    console.log(sum)
}

// B)
function sub(a: number, b: number): number {
    return (a - b)
    console.log(sub)
}

// C)
function mult(a: number, b: number): number {
    return (a * b)
    console.log(mult)
}

// D) 
function qualMaior(a: number, b: number): void {
    let diferença = a - b
    diferença > 0 ? console.log(a + 'é maior que ' + b) : console.log(b + 'é maior que ' + a)
}
