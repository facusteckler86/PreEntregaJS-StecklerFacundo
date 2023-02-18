/* 
    El cliente debe elegir entre los dos productos disponibles
 */

let saludo = "Hola"
let producto1 = medialunas;
let producto2 = pan de campo;
let producto3 = tortas;


let mensaje = parseInt (prompt(`${saludo} Indique por favor que producto desea de nuestra seleccion: `));

while (mensaje != "Salir"){

if (producto1 === "Si"){
    alert (prompt (`Desea comprar medialunas?`))
    
} else if(producto2 === "Si"){
    alert (prompt (`Desea comprar Pan de Campo?`))
    
} else if (producto3 === "Si") {
    alert (prompt (`Desea comprar unas tortas?`))
    
}else if (producto1 === "No" && producto2 === "No" producto3 === "No") {
    alert (prompt (`Si no desea nada escriba Salir`))
    
} 
}

