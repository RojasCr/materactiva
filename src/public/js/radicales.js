const rad = new Radicales();

const radical = document.getElementById("enteros");

const generar = () => {

    let expresion = `<math xmlns="http://www.w3.org/1998/Math/MathML">
                            <msqrt>
                                <mn id=number>${rad.crear(20)}</mn>
                            </msqrt>
                    </math>
                    <span id=lateral>
                        = 
                        <input id="factor">
                        <math xmlns="http://www.w3.org/1998/Math/MathML">
                            <msqrt>
                                <mn><input id="radicando"></mn>
                            </msqrt>
                            <span id=verificador></span>
                        </math>
                    </span>`
    radical.innerHTML = expresion;
}

const verificar = () => {
    const number = document.getElementById("number").innerHTML
    const factor = document.getElementById("factor").value
    const radicando = document.getElementById("radicando").value
    const verificador = document.getElementById("verificador")

    const isCorrect = (factor**2)*radicando

    if(Number(number) === isCorrect){
        return verificador.innerHTML = "¡Bien!"
    } else {
        return verificador.innerHTML = "¡Vuelve a intentar!"
    }
}