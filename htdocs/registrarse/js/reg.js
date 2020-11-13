/* Funcion para mandar del boton desplegable la carrera*/
var array_valores = Array(); /* Creamos un array para guardar el valor de la etiqueta "a" */

function Carrera(parametros) {
    /*Obtuve el valor de un "a" donde se  mande llamar la funcion*/
    array_valores.push(parametros.innerHTML);

    /*Cambiamos el valor del input text al valor de la etiqueta "a" */
    var cambio = document.getElementById("seleccion_c").value = array_valores.toString(); /*Cambie el valor del input por el del menu desplegable que es "a" */
    var numeros = array_valores.splice(0) /* Eliminamos los valores del array para que no se unan si es que quiere volver a elegir*/

}