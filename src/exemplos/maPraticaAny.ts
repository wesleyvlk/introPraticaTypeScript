let valorAny: any;
valorAny = 3;
valorAny = "hello any";
valorAny = true;
// infelizmente aula com Any, mas acredito que o Any seja bom para receber dados nao tipados de API

let valorString: string = 'teste';
valorString = valorAny //Meu mundo caiu ;-;
let valorString2: string = 'teste2';
valorString2 = valorAny //Meu mundo caiu ;-; ^2

function concatString(str1: string, str2: string) {
    console.log(str1 + str2)
}

concatString(valorString, valorString2);