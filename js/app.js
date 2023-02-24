/* e --> enter
o --> ober
i --> imes
a --> ai
u --> ufat */

let copiar = document.querySelector('.contenedor-secun-der__copiar');
let encriptar = document.querySelector('.contenedor-botones__encriptar');
let desencriptar = document.querySelector('.contenedor-botones__desencriptar');

const figura = document.querySelector('.contenedor-secun-der__figura');
const mensaje = document.querySelector('.contenedor-secun-der__mensaje');
const alerta = document.querySelector('.contenedor-secun-der__alerta');

window.addEventListener('DOMContentLoaded', (e) => {
    copiar.style.display = "none";
});

encriptar.addEventListener('click', (e) => {
    let texto = document.querySelector('.contenedor-secun-izq__texto').value.toLowerCase();
    if(texto == ""){
        alert("Debe escribir para poder encriptar...");
    }
    else {
        let textoEncriptado = texto.replace(/e/mgi , "enter").replace(/o/mgi , "ober").replace(/i/mgi , "imes").replace(/a/mgi , "ai").replace(/u/mgi , "ufat");
        mensaje.innerHTML = textoEncriptado;
        figura.style.display = "none";
        alerta.style.display = "none";
        copiar.style.display = "initial"; 
        /*if (screen.width > 768) {
            //pantalla grande
            console.log("pc");
            mensaje.style.height = "75%";
            document.querySelector('.contenedor-secun-der').style.justifyContent = "space-between";
        }
        else {
            if((screen.width > 375) && (screen.width < 768)) {
                console.log("tablet");
                //tablet
            }
            else {
                console.log("celular");
                //celular
            }
        }*/
    }
});

desencriptar.addEventListener('click', (e) => {
    let texto = document.querySelector('.contenedor-secun-izq__texto').value.toLowerCase();
    if(texto == ""){
        alert("Debe escribir para poder desencriptar...");
    }
    else {
        let textoDesencriptado = texto.replace(/enter/mgi , "e").replace(/ober/mgi , "o").replace(/imes/mgi , "i").replace(/ai/mgi , "a").replace(/ufat/mgi , "u");
        mensaje.innerHTML = textoDesencriptado;
        figura.style.display = "none";
        alerta.style.display = "none";
        copiar.style.display = "initial";

    }
});

copiar.addEventListener('click', (e) => {
    let contenido = document.querySelector('#contenido');
    contenido.select();
    document.execCommand("copy");
    const temp = setTimeout(function(){
        document.querySelector('.contenedor-secun-der__copiar').innerHTML = "Copiar";
    }, 4000); 
    document.querySelector('.contenedor-secun-der__copiar').innerHTML = "Copiado!";
});

