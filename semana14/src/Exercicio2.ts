// A)
function sum(a: number, b: number): number {
    return (a + b)
}

// B)
function sub(a: number, b: number): number {
    return (a - b)
}

// C)
function mult(a: number, b: number): number {
    return (a * b)
}

// D) 
function qualMaior(a: number, b: number): number | boolean {
    
    if (a > b) {
        return true
    }
    else {
        return false
    }
}
