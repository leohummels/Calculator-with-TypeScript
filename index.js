"use strict";
let vA;
let vB;
let op;
let result;
const value1 = document.getElementById("v1");
const value2 = document.getElementById("v2");
const operator = document.getElementById("operador");
const btn = document.getElementById("button");
const ret = document.getElementById("return");
parseInt(value1.value, 10);
parseInt(value2.value, 10);
function clean() {
    value1.value = "";
    value2.value = "";
    operator.value = "";
}
function calculator(v1, v2, op) {
    let r;
    switch (op) {
        case "+":
            r = v1 + v2;
            clean();
            break;
        case "-":
            r = v1 - v2;
            clean();
            break;
        case "*":
            r = v1 * v2;
            clean();
            break;
        case "/":
            r = v1 / v2;
            clean();
            break;
        default:
            clean();
            r = "operação inválida";
    }
    return r;
}
btn.addEventListener("click", () => {
    var _a;
    if (document.getElementById("paragraph")) {
        (_a = document.getElementById("paragraph")) === null || _a === void 0 ? void 0 : _a.remove();
    }
    result = calculator(parseInt(value1.value, 10), parseInt(value2.value, 10), operator.value).toString();
    const p = document.createElement("p");
    p.setAttribute("id", "paragraph");
    p.innerText = result;
    ret === null || ret === void 0 ? void 0 : ret.appendChild(p);
});
