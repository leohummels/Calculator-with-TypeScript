"use strict";
let v1;
let v2;
let op;
let result;
const value1 = document.getElementById("v1");
const value2 = document.getElementById("v2");
const operator = document.getElementById("operador");
const btn = document.getElementById("button");
const ret = document.getElementById("return");
class Calc {
    constructor() {
    }
    calculator(v1, v2, op) {
        switch (op) {
            case "+":
                return v1 + v2;
                break;
            case "-":
                return v1 - v2;
                break;
            case "*":
                return v1 * v2;
                break;
            case "/":
                return v1 / v2;
            default:
                return "operação inválida";
        }
    }
    clean() {
        value1.value = "";
        value2.value = "";
        operator.value = "";
    }
}
const Calculo = new Calc();
result = Calculo.calculator(parseInt(value1.value), parseInt(value2.value), operator.value).toString();
const p = document.createElement("p");
p.innerText = result;
const div = ret === null || ret === void 0 ? void 0 : ret.appendChild(p);
btn.addEventListener("click", () => {
    div;
    location.reload();
});
