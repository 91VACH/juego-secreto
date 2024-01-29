let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


console.log(numeroSecreto);

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
 
    if(numeroDeUsuario === numeroSecreto){

        asignarTextoElemento('p',`acertaste el número en ${intentos} ${ (intentos === 1) ? 'vez': 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
   
    }else{ 

        // EL USUARIO NO ACERTÓ 

        if (numeroDeUsuario>numeroSecreto) {
            asignarTextoElemento('p','El numero secreto es menor');
            
        }else{
            if(numeroDeUsuario<numeroSecreto){
                asignarTextoElemento('p','El numero secreto es mayor');
            }
        }
intentos++;
limpiarCaja();

    }
    return;
}

function generarNumeroSecreto() {
let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
console.log(numeroGenerado);
console.log(listaNumerosSorteados);
//si ya sorteamos todos los numeros
if(listaNumerosSorteados.length == numeroMaximo){
    asignarTextoElemento('p','ya se sortearon todos los numeros posibles');

}else{
// si el numero generado está incluido en la lista 
        if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();

        }else{
         listaNumerosSorteados.push(numeroGenerado);
         return numeroGenerado;
        }
      }
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo} mi kingkong`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}
function reiniciarJuego() {

    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //generar el número aleatorio
    //inicializar el número de intentos
    condicionesIniciales();
    //deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}


condicionesIniciales();
