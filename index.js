
const express = require("express");
const app= express()

const animales=require("./animales")

app.use(express.static('public'))

app.get('/sumar-animal', function(req,res){
    let animalillos=[
        nombre=res.require.nombre,
        edad=res.require.edad,
        tipo=res.require.tipo
    ]
    animalillos.push(animales)
    res.send(nuestralista())
})

    app.get("/adoptar", function (req, res) {
        let found=false//operador lógico, que ayuda a que sea efectivo
        for (let i = 0; i < animales.length && !found; i++) {//primero debes recorrer el array para ver si coincide
        
            if (req.params.adoptar == animales[i].nombre) {
                found= true//para que sea logico/ cambia o no si encuentra el nombre
                  animales.splice(i,1)//este es el que vamos a quitar
                  ? res.send("ha sido adoptado")//si encuentra el nombre
                  : res.send("Ese animal ya ha sido adoptado");//si no lo encuentra
                } 
              }
            }
    )

function nuestralista(){
    let parrafo=""
    for (let i = 0; i < animales.length; i++) {
        parrafo += `<tr><td>${animales[i].nombre}</td><td>${animales[i].edad}</td><td>${animales[i].tipo}</td></tr><form action="/adoptar"><button type="submit" name="nombre value=${animales[i].nombre}>Adoptar</buton></form>`;
    //añadimos el boton dentro de la form, para que aparezca enc ada uno de ellos, y tenemos que poner la variable
        }
        res.send(`<table>${parrafo}</table>`);

}

app.listen(process.env.PORT || 3000)