/* e --> enter
o --> ober
i --> imes
a --> ai
u --> ufat */

let copiar = document.querySelector('.copiar');
let encriptar = document.querySelector('.boton-encriptar');
let desencriptar = document.querySelector('.boton-desencriptar');

window.addEventListener('DOMContentLoaded', (e) => {
    copiar.style.display = "none";
});

encriptar.addEventListener('click', (e) => {
    let textoDesencriptado = document.querySelector('.texto').value.toLowerCase();
    let texto = textoDesencriptado.replace(/e/mgi , "enter").replace(/o/mgi , "ober").replace(/i/mgi , "imes").replace(/a/mgi , "ai").replace(/u/mgi , "ufat");
    const figura =  document.querySelector('.figura').style.display = "none";
    const alerta =  document.querySelector('.alerta').style.display = "none";
    document.querySelector('.mensaje').innerHTML = texto;
    copiar.style.display = "initial"; 
    if (screen.width > 768) {
        //pantalla grande
        document.querySelector('.mensaje').style.marginTop = "25px";
        document.querySelector('.mensaje').style.height = "75%";
        copiar.style.marginBottom = "25px";
        document.querySelector('.caja-der').style.justifyContent = "space-between";
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
    }
    
 
});

desencriptar.addEventListener('click', (e) => {
    let textoEncriptado = document.querySelector('.texto').value.toLowerCase();
    let texto = textoEncriptado.replace(/enter/mgi , "e").replace(/ober/mgi , "o").replace(/imes/mgi , "i").replace(/ai/mgi , "a").replace(/ufat/mgi , "u");
    const figura =  document.querySelector('.figura').style.display = "none";
    const alerta =  document.querySelector('.alerta').style.display = "none";
    document.querySelector('.mensaje').innerHTML = texto;
    document.querySelector('.caja-der').style.justifyContent = "space-between";
    document.querySelector('.mensaje').style.marginTop = "25px";
    document.querySelector('.copiar').style.marginBottom = "25px";
});

copiar.addEventListener('click', (e) => {
    let contenido = document.querySelector('#contenido');
    contenido.select();
    document.execCommand("copy");
});

