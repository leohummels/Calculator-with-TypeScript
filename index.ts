let result: string

const value1 = document.getElementById("v1") as HTMLInputElement
const value2 = document.getElementById("v2") as HTMLInputElement
const operator = document.getElementById("operador") as HTMLInputElement
const btn = document.getElementById("button")!
const ret = document.getElementById("return")!
    
parseInt(value1.value, 10)
parseInt(value2.value, 10)

    function clean(): void {
        value1.value = ""
        value2.value = ""
        operator.value = ""
    }

    function calculator(v1: number, v2:number, op:string) : number | string {    
        let r: number | string
        switch(op) {
            case "+":
                r = v1 + v2
                clean()
            break;
            case "-":
                r = v1 - v2
                clean()
            break;
            case "*":
                r = v1 * v2
                clean()
            break;
            case "/":
                r = v1 / v2
                clean()
            break;
            default:
                clean()
                r = "operação inválida"
        }

        
        return r
    }


btn.addEventListener("click", () => {   if(document.getElementById("paragraph")) {
                                            document.getElementById("paragraph")?.remove()
                                        }

                                        result = calculator(parseInt(value1.value, 10), parseInt(value2.value, 10), operator.value).toString()
                                        const p = document.createElement("p")
                                        p.setAttribute("id", "paragraph")
                                        p.innerText = result
                                        ret?.appendChild(p)  
                                    })