/*
 Crea un pequeño script en la consola que muestre de forma ordenada información básica del BOM:

    Navegador, idioma y plataforma
    Resolución de pantalla
    URL actual
    Título del documento
    Número de entradas en el historial
    Tiempo que tarda en ejecutarse un bucle

*/

console.log("Navegador: "+navigator.userAgent);
console.log("Idioma: "+navigator.language);
console.log("Plataforma: "+navigator.platform);
console.log("Resolucion de pantalla: "+screen.width+"x"+screen.height);
console.log("URL actual: "+location.href);
console.log("Titulo de Documento: "+document.title);
console.log("Numeros de entradas: "+history.length);
let inicio = performance.now();
for (let i = 0; i < 1_000_000; i++) { } 
let fin = performance.now();
console.log("Tiempo:", fin - inicio, "ms");