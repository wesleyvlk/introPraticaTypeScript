// Como podemos melhorar o esse código usando TS? 

/* let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
} */

interface Pessoas {
    nome: string,
    idade: number,
}

interface Profissao extends Pessoas {
    profissao: "Atriz" | "Padeiro" | "teste 2" | "quantos ous consegue?" | "acho que infintos";
}

let pessoa1: Profissao= {
    nome: "Maria",
    idade: 29,
    profissao: "Atriz"
};

let pessoa2: Profissao = {
    nome: "Roberto",
    idade: 19,
    profissao: "Padeiro"
};

let pessoa3: Profissao = {
    nome: "Laura",
    idade: 32,
    profissao: "Atriz"
};

let pessoa4: Profissao = {
    nome: "Carlos",
    idade: 19,
    profissao: "Padeiro"
};