function importAPI(n1: number, n2: number, callback: (nPos: number) => number): number {
    let resultIAPI = n1 + n2
    return callback(resultIAPI);
} //acrescentado um callback para tratar os numeros

function aoQuadrado(nPos: number): number {
    return nPos * nPos;
}

function allAQDivisao(nPos: number): number {
    nPos = aoQuadrado(nPos)
    return nPos / nPos;
}

console.log(importAPI(5, 6, aoQuadrado));
console.log(importAPI(5, 6, allAQDivisao));