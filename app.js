
let numeroSecreto = 0;
let intentos= 0 ;
let listaNumerosSorteados =[];
let numeroMaximo =10;
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${intentos == 1 ? 'vez': 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        // el usuario no acerto
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor')
        } else {
            asignarTextoElemento('p','El numero secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value ='';
}


function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}

function generarNumeroSecreto(){
  let numeroGenerado = Math.floor(Math.random()*10)+1;
  console.log(`este es el numero secreto ${numeroGenerado}`);
  console.log(listaNumerosSorteados);
//   si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se uso todos los numeros');

    }else {
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
    
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
      
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego de Numero Secreto');
    asignarTextoElemento('p','Elige un numero del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

condicionesIniciales();



