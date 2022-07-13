import { isExportSpecifier } from "typescript"

interface NovoPaciente {
    nome: string
    dDN: string
    cpf: number
    telefone: number
    endereço?: string
    email?: string
}

interface NovaVisita extends NovoPaciente {
    visita: string[]
}

let wesley: NovaVisita = {
    nome: "Wesley Brito",
    dDN: "20 de abril de 2000",
    cpf: 48873223800,
    telefone: 11948135991,
    visita: ["1 - 30/05/2022", "2 - 20/06/2022", "3 - 11/07/2022"]
}

function Visitas(lista: string[]) {
    for (let item of lista) {
        console.log('- ', item);
    }
}

Visitas(wesley.visita);