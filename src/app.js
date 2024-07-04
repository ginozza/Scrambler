// JavaScript
// variables
const botonEncriptar = document.querySelector(".boton-encriptar");
const botonDesencriptar = document.querySelector(".boton-desencriptar");
const validar = document.querySelector('.validar');

// eventos
(() => {
    botonEncriptar.addEventListener('click', encriptarTexto);
    botonDesencriptar.addEventListener('click', desencriptarTexto);
})()

// funciones
function encriptarTexto() {
    let texto = document.querySelector("#texto").value;
    if (removerAcentos(texto)) {
        return;
    }
    let textoEncriptado = texto.replace(/e/img, 'enter');
    textoEncriptado = textoEncriptado.replace(/i/mg, 'imes');
    textoEncriptado = textoEncriptado.replace(/a/mg, 'ai');
    textoEncriptado = textoEncriptado.replace(/o/mg, 'ober');
    textoEncriptado = textoEncriptado.replace(/u/mg, 'ufat');
    mostrarHTML(textoEncriptado);
}

function removerAcentos(texto) {
    // Caso 1: No hay texto
    if (texto == '') {
        const alerta = document.createElement('div');
        alerta.textContent = 'Ingrese un texto';
        alerta.classList.add('error')
        setTimeout(() => {
            alerta.remove();
        }, 1500);
        validar.appendChild(alerta);
        return true;
    }
    // Caso 2: Texto tiene acentos
    if (texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "") !== texto) {
        const alerta = document.createElement('div');
        alerta.textContent = 'Ingrese un texto sin acentos';
        alerta.classList.add('error')
        setTimeout(() => {
            alerta.remove();
        }, 1500);
        validar.appendChild(alerta);
        return true;
    }
    // Caso 3: Texto tiene mayúsculas
    if (texto !== texto.toLowerCase()) {
        const alerta = document.createElement('div');
        alerta.textContent = 'Ingrese un texto sin mayúsculas';
        alerta.classList.add('error')
        setTimeout(() => {
            alerta.remove();
        }, 1500);
        validar.appendChild(alerta);
        return true;
    }
    return false;
}

function mostrarHTML(textoEncriptado) {
    const seccion2 = document.querySelector('.seccion2');
    const resultado = document.querySelector('.resultado');

    seccion2.innerHTML = `
        <div class="resultado">
            <div class="sk-circle">
                <div class="sk-circle1 sk-child"></div>
                <div class="sk-circle2 sk-child"></div>
                <div class="sk-circle3 sk-child"></div>
                <div class="sk-circle4 sk-child"></div>
                <div class="sk-circle5 sk-child"></div>
                <div class="sk-circle6 sk-child"></div>
                <div class="sk-circle7 sk-child"></div>
                <div class="sk-circle8 sk-child"></div>
                <div class="sk-circle9 sk-child"></div>
                <div class="sk-circle10 sk-child"></div>
                <div class="sk-circle11 sk-child"></div>
                <div class="sk-circle12 sk-child"></div>
            </div>
        </div>
    `;

    setTimeout(() => {
        seccion2.innerHTML = `
            <p class="salida-texto">${textoEncriptado}</p>
            <button class="boton-copiar">Copiar</button>
        `;
        
        const botonCopiarNuevo = seccion2.querySelector('.boton-copiar');
        botonCopiarNuevo.addEventListener('click', copiarTexto);
    }, 1000);
}

function copiarTexto() {
    const textoEncriptado = document.querySelector('.salida-texto').textContent;
    navigator.clipboard.writeText(textoEncriptado).then(() => {
        // Cambiar el texto del botón a "¡Copiado!" y luego restaurarlo
        const botonCopiar = document.querySelector('.boton-copiar');
        botonCopiar.textContent = "¡Copiado!";
        setTimeout(() => {
            botonCopiar.textContent = "Copiar";
        }, 2000);
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}

function desencriptarTexto() {
    let texto = document.querySelector("#texto").value;
    texto = texto.toLowerCase();
    let textoEncriptado = texto.replace(/enter/mg, 'e');
    textoEncriptado = textoEncriptado.replace(/imes/mg, 'i');
    textoEncriptado = textoEncriptado.replace(/ai/mg, 'a');
    textoEncriptado = textoEncriptado.replace(/ober/mg, 'o');
    textoEncriptado = textoEncriptado.replace(/ufat/mg, 'u');
    mostrarHTML(textoEncriptado);
}
