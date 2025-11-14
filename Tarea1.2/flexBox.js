// Alterna entre valores para 'flex-direction'
function cambiarFlexDirection() {
    var aFlexDirection = ['row', 'column', 'row-reverse', 'column-reverse'];
    var contenedor = document.querySelector(".contenedor");
    var actual = aFlexDirection.indexOf(contenedor.style.flexDirection);
    var index = (actual == -1 || actual === undefined || (++actual) > aFlexDirection.length - 1) ? 0 : actual;
    var propiedad = aFlexDirection[index];

    contenedor.style.height = null; // Limpia altura si estaba puesta
    contenedor.style.flexDirection = propiedad;
    document.querySelector("#camFDir").innerHTML = propiedad;
}

function cambiarFlexWrap() {
    var aFlexWrap = ['nowrap', 'wrap', 'wrap-reverse'];
    var contenedor = document.querySelector(".contenedor");
    var actual = aFlexWrap.indexOf(contenedor.style.flexWrap);
    var index = (actual == -1 || actual === undefined || (++actual) > aFlexWrap.length - 1) ? 0 : actual;
    var propiedad = aFlexWrap[index];

    if (propiedad.includes("nowrap")) {
        noWrap();
        document.getElementById("camAC").setAttribute('disabled','');
    } else {
        wrap();
        document.getElementById("camAC").removeAttribute('disabled');
    }
    contenedor.style.height = null;
    contenedor.style.flexWrap = propiedad;
    document.querySelector("#camFWr").innerHTML = propiedad;
}


function cambiarJustifyContent() {
    var aJustifyContent = ['flex-start', 'flex-end', 'center', 'space-around', 'space-between', 'space-evenly'];
    var contenedor = document.querySelector(".contenedor");
    var actual = aJustifyContent.indexOf(contenedor.style.justifyContent);
    var index = (actual == -1 || actual === undefined || (++actual) > aJustifyContent.length - 1) ? 0 : actual;
    var propiedad = aJustifyContent[index];

    contenedor.style.height = null;
    contenedor.style.justifyContent = propiedad;
    document.querySelector("#camJCnt").innerHTML = propiedad;
}


function cambiarAlignItems() {
    var aAlignItems = ['flex-start', 'flex-end', 'center'];
    var contenedor = document.querySelector(".contenedor");
    var actual = aAlignItems.indexOf(contenedor.style.alignItems);
    var index = (actual == -1 || actual === undefined || (++actual) > aAlignItems.length - 1) ? 0 : actual;
    var propiedad = aAlignItems[index];

    contenedor.style.height = "50vh"; // Para mostrar mejor la alineación
    contenedor.style.alignItems = propiedad;
    document.querySelector("#camAIt").innerHTML = propiedad;
}


function cambiarAlignContent() {
    var aAlignContent = ['flex-start', 'flex-end', 'center'];
    var contenedor = document.querySelector(".contenedor");
    var actual = aAlignContent.indexOf(contenedor.style.alignContent);
    var index = (actual == -1 || actual === undefined || (++actual) > aAlignContent.length - 1) ? 0 : actual;
    var propiedad = aAlignContent[index];

    contenedor.style.height = "70vh"; // Para ver efecto en varias líneas
    contenedor.style.alignContent = propiedad;
    document.querySelector("#camAC").innerHTML = propiedad;
}

// Función para eliminar wrap: solo 4 elementos
function noWrap() {
    var contenedor = document.querySelector(".contenedor");
    contenedor.innerHTML = `
        <div class='elemento e1' onclick='modificar(this)'>1</div>
        <div class='elemento e2' onclick='modificar(this)'>2</div>
        <div class='elemento e3' onclick='modificar(this)'>3</div>
        <div class='elemento e4' onclick='modificar(this)'>4</div>
    `;
}

function wrap() {
    const contenedor = document.querySelector(".contenedor");
    let html = "";
    for (let i = 1; i <= 15; i++) {
        html += `<div class='elemento e${i}' onclick='modificar(this)'>${i}</div>`;
    }
    contenedor.innerHTML = html;
}


function modificar(elemento) {
    let grow = elemento.style.flexGrow;
    if (!grow || isNaN(parseInt(grow))) {
        elemento.style.flexGrow = 0;
    } else {
        if (parseInt(grow) === 0) {
            elemento.style.flexGrow = 1;
        } else {
            elemento.style.flexGrow = parseInt(grow) - 1;
        }
    }
}
