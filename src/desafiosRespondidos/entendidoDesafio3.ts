// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo')! as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo')! as HTMLButtonElement;
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo')!;

let meuSaldo = 0; //ta fácil pra ninguém

function somarAoSaldo(soma: number) {
    if (campoSaldo) {
        meuSaldo += soma
        campoSaldo.innerHTML = meuSaldo.toString();
        limparCampoSoma();
    }
}

function limparCampoSoma() {
    soma.value = "";
}

function limparSaldo() {
    if (campoSaldo) {
        meuSaldo = 0;
        campoSaldo.innerHTML = meuSaldo.toString();
    }
}

if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value));
    });
}

botaoLimpar.addEventListener('click', () => {
    limparSaldo();
});

// /**
//     <h4>Valor a ser adicionado: <input id="soma"> </h4>
//     <button id="atualizar-saldo">Atualizar saldo</button>
//     <button id="limpar-saldo">Limpar seu saldo</button>
//     <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
//  */