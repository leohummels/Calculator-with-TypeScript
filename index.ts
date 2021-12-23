let v1: string
let v2: string
let op: string
let result: string

const value1 = document.getElementById("v1") as HTMLInputElement
const value2 = document.getElementById("v2") as HTMLInputElement
const operator = document.getElementById("operador") as HTMLInputElement
const btn = document.getElementById("button")!
const ret = document.getElementById("return")!

class Calc {

    constructor() {

    }

    calculator(v1: number, v2: number, op:string){    
        switch(op) {
            case "+":
                return v1 + v2
            break;
            case "-":
                return v1 - v2
            break;
            case "*":
                return v1 * v2
            break;
            case "/" :
                return v1 / v2
            default:
                return "operação inválida"
        }
    }
    
    clean() {
        value1.value = ""
        value2.value = ""
        operator.value = ""
    }


}

const Calculo = new Calc()
result = Calculo.calculator(parseInt(value1.value), parseInt(value2.value), operator.value).toString()

const p = document.createElement("p")
p.innerText = result
const div = ret?.appendChild(p) 

btn.addEventListener("click", () => { div 
                                     location.reload()})