//Elementos del polinomio
const coeficiente = (x) => {
    return Math.ceil(Math.random()*200-x);
};
 
const exponente = (x) => {
    return Math.ceil(Math.random()*x);
};

const radicando = (x) => {
    return Math.ceil((Math.random()+1)*x);
}

const indice = (x) => {
    return Math.ceil(Math.random()*x);
}
 
/*Clase de polinommios enteros*/
class Polinomio{
    constructor(){
        this.coef = [];
        this.exp = [];
        this.termInd = 0;
    }

    crear = (terms) => {
        let expresion = ``;
        for(let i=0;i<terms;i++){
            this.coef[i]=coeficiente(100);
            this.exp[i]=exponente(10);
            if(this.exp[i] !== this.exp[i-1]){
                expresion += `${this.coef[i] > 0 ? "+" + this.coef[i] : this.coef[i]}x<sup>${this.exp[i]}</sup>`;
            } else{
                this.exp[i] = exponente(10);
                expresion += `${this.coef[i] > 0 ? "+" + this.coef[i] : this.coef[i]}x<sup>${this.exp[i]}</sup>`;
            }
        }
        this.termInd = coeficiente(100);
        return expresion + (this.termInd > 0 ? "+" + this.termInd : this.termInd);
    }
}

//Clase de radicales
class Radicales{
    constructor(){
        this.radicando = 1;
        this.indice = 2;
    }

    crear = (x) => {
        
        return radicando(x);
    }
}

