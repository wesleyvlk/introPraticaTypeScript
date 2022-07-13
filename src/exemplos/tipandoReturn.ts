function typeReturn(n1: number, n2: number): number {
    return n1 + n2
}

//aqui foi tipado nao somente os valores, mas também o return da função

console.log(typeReturn(1, 2));
// console.log(typeReturn('1', 2)); nao é perfeito, ele avisa o erro mas ainda printa o resultado