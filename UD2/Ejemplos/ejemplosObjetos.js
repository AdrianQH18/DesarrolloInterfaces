let alumno={
    nombre:"Carlos",
    "nota final":8.5
};

//notacion punto
console.log("notacion punto alumno.nombre; ", alumno.nombre);//carlos

//notacion corchetes
console.log("notacion corchete alumno[nota final]: , ",alumno["nota final"]);//8.5

//Acceso dinamico
let clave="nombre";
console.log("Acceso usando la variable clave ", alumno[clave])//carlos


//console.log("Acceso usando punto ", alumno.)//carlos

/*
Uncaught SyntaxError: missing name after . operator
salta directamente un error
*/