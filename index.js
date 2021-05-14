
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

var boton= document.getElementById("boton")
boton.onclick=function(){
    app.get("/adoptar", function (req, res) {

        if (req.params.adoptar == animales[i].nombre) {
                  animales[i].nombre -= req.params.adoptar
                  res.send(nuestralista())
                } else {
                  res.send("Ese animal ya ha sido adoptado");
                }
              }
    )
}

function nuestralista(){
    let parrafo=""
    for (let i = 0; i < animales.length; i++) {
        parrafo += `<tr><td>${animales[i].nombre}</td><td>${animales[i].edad}</td><td>${animales[i].tipo}</td></tr>`;
    
        }
        res.send(`<table>${parrafo}</table>`);
}

app.listen(process.env.PORT || 3000)