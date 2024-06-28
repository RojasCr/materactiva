
const e = new Polinomio();


e.crear = (terms) => {
    // let expresion = ``;
    // for( let i=0; i < terms; i++){
        //     e.coef[i] = coeficiente(100);
        //     expresion += `${e.coef[i]}x`;
        // }
        e.coefPri = coeficiente(100)
        e.termInd = coeficiente(100) == 0 ? "+" + coeficiente(100) : coeficiente(100);
        e.res = coeficiente(100);
    return `${e.coefPri}x ${e.termInd > 0 ? "+" : ""}${e.termInd} = ${e.res}`;
}

const generar1 = () => {
    let ecuacion = `
                    <div class="contenedorEc">
                        <div class="ecuacion">${e.crear()}</div>
                        <div class="lateral"> x = <input id="x"> <span id="eval"></span></div>
                    </div>
                `;
    document.getElementById("ejercicios").innerHTML = ecuacion;
}

const verificar1 = () => {
    let X = document.getElementById("x");
    const answer = (e.res - e.termInd) / (e.coefPri);

    if(math.evaluate(X.value) == answer){
        document.getElementById("eval").innerHTML = "¡Bien!";
    } else {
        document.getElementById("eval").innerHTML = "¡Volvé a intentar!";
    }
    
    console.log(math.evaluate(X.value));
    console.log(answer);
}