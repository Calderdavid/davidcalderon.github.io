
let miImage = document.querySelector('img'); //Obtienes la etiqueta

miImage.onclick = function(){
    console.log('Entro a la funcion');
    let miSrc = miImage.getAttribute('src');//Obtienes el atributo de la etiqueta
    if(miSrc === 'images/firefox_PNG34.png'){
        miImage.setAttribute('src','images/firefox_PNG41.png');
    }else{
        miImage.setAttribute('src','images/firefox_PNG34.png');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function estableceNombreUsuario(){
    let miNombre = prompt('Por favor ingresa tu nombre');
    if(!miNombre){//Si miNombre no existe
        estableceNombreUsuario();

    }else{
        localStorage.setItem('nombre', miNombre);
        miTitulo.innerHTML = 'Mozilla es genial, ' + miNombre;
    }
}

miBoton.onclick = function(){
    estableceNombreUsuario();
}

