
let animales=[
    {
        nombre:"Oberón",
        edad:5,
        tipo:"perro"
        
    }
    ,{
        nombre:"Kira",
        edad:3,
        tipo:"perro"
    }
    ,{
        nombre:"Nala",
        edad:8,
        tipo:"hurón"
    }
    ,{
        nombre:"Casandra",
        edad:2,
        tipo:"tortuga"
    }
]

for (let i = 0; i < nombre.length; i++) {
    let nombre=nombre[i]*animales.length
   }
document.getElementById("nombre").innerHTML=`
<p>${nombre}</p>
`
for (let i = 0; i < edad.length; i++) {
    let edad=edad[i]*animales.length
   }
document.getElementById("edad").innerHTML=`
<p>${edad}</p>
`
for (let i = 0; i < tipo.length; i++) {
    let tipo=tipo[i]*animales.length
   }
document.getElementById("tipo").innerHTML=`
<p>${tipo}</p>
`

module.exports=animales