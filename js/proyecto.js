

class Instrumentos{
    constructor(nombre, precio, stock){

        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;

    }

    getDatos(){
        console.log("--- DATOS DE LOS INSTRUMENTOS---");
        console.log("Nombre: ", this.nombre);
        console.log("Precio : ", this.precio);
        console.log("Stock: ", this.stock);
        console.log("");

    }
    
    getStock(){
        if(this.stock <=0){
            return false
        }
        else{
            return true
        }
    }

    updateStock(unidades){
        if(this.stock >= unidades){
            this.stock = this.stock - unidades
            return true
        }
        else{
            console.log("No tenemos ese stock");
            console.log("Stock disponible: ", this.stock);
            return false
        }
    }
}

// ALTA DE PRODUCTOS

let listaInstrumento = [];

for(let i=0; i < 4; i = i + 1){

    let nombre = prompt("Ingrese el nombre del instrumento");
    let precio = parseFloat(prompt("ingrese el precio"));
    let stock = parseInt(prompt("Ingrese el stock"));

    let producto = new Instrumentos(nombre,precio,stock);

    listaInstrumento.push(producto);
    console.log(listaInstrumento);

}


//Inicio Render
for(let producto of listaInstrumento){

 producto.getDatos();   
}


//Simulacion de compra

function buscarInstrumento(producto){
    return producto.nombre == alquilerUsuario
}

let alquilerUsuario = "";

while(alquilerUsuario != "FIN"){
    alquilerUsuario = prompt("Ingrese el Instrumento que decea alquilar o FIN");
    
    if(alquilerUsuario != "FIN"){

        let resultadoAlquiler = listaInstrumento.find(buscarInstrumento);
        

        if ( resultadoAlquiler != undefined){
        
            if(resultadoAlquiler.getStock()){
                
                let unidades = parseInt(prompt("¿Cuantas unidades decea alquilar?"));
                
                if(resultadoAlquiler.updateStock(unidades)){
                    alert("Gracias por alquilar");
                    console.log("");
                    for(let producto of listaInstrumento){
                        if(producto.stock > 0){
                            producto.getDatos();   
                        }
                       }
                }
            }   
        }
        else{
            alert ("No tenemos en stock.");
        }
    }
}

