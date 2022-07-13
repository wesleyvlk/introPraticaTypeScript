let anyBugString: string = 'Má Pratica Any';
let AnyEstaDeVolta: any;
AnyEstaDeVolta = 3;
AnyEstaDeVolta = true;
AnyEstaDeVolta = 'hello any';

// (typeof anyBugString === 'string') ? anyBugString = AnyEstaDeVolta : anyBugString;
console.log(anyBugString); // "Nada acontece"

let unknownTestString: string = 'Verificando Boa Pratica unknown';
let unknownValor: unknown;
unknownValor = 3;
unknownValor = true;
unknownValor = 'Boa Pratica unknown';

// (typeof unknownTestString === 'string') ? unknownTestString = unknownValor : unknownTestString;
console.log(unknownTestString); // "O tipo 'unknown' não pode ser atribuído ao tipo 'string'.ts(2322)"

function allValidaErro(erro: string, codigo: number): never {
    throw {error: erro, code: codigo};
}

allValidaErro('Tem Erro', 2322)