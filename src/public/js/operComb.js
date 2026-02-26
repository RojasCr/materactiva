const oper = new Polinomio();

const generar = (x) => {
    return Math.ceil((Math.random()*5)*x)
}


oper.crear = () => {
    oper.a = generar(2)
    oper.b = generar(2)
    oper.c = generar(2)
    oper.d = generar(1)
    const operation = `${oper.a}<sup>${oper.d}</sup>+${oper.b}-${oper.c}`

    return operation;
}

let operation;

const generar1 = () => {
    let exer = oper.crear()
    let operacion = `
                    <div class="contenedorEc">
                        <div class="ecuacion">${exer}</div>
                        <div class="lateral"> <input id="solution"> <span id="eval"></span></div>
                    </div>
                `;
    document.getElementById("ejercicios").innerHTML = operacion;
    console.log(exer)
    return operation = exer;
}

const verificar1 = () => {
    let solution = document.getElementById("solution");
    const answer = oper.a**oper.d+oper.b-oper.c;

    if(math.evaluate(solution.value) == answer){
        document.getElementById("eval").innerHTML = "¡Bien!";
    } else {
        document.getElementById("eval").innerHTML = "¡Volvé a intentar!";
    }
    
    console.log(math.evaluate(solution.value));
    console.log(answer);
}
