let button = document.getElementById('button'); 
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;

function adcNumero(n1: number, n2: number, deveprint: boolean, frase: string) {
    let resultado = n1 + n2;
    if(deveprint) {
        console.log(frase + resultado)
    }
    return n1 + n2
}

let deveprint = true;
let frase = "O Valor é: ";
if(button) {
    button.addEventListener('click', () => {
        if(input1 && input2) {
            console.log(adcNumero(Number(input1.value), Number(input2.value), deveprint, frase));
        }
    }) 
}