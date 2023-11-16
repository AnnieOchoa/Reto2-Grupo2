//Dado un arreglo de objeto, ordenar el objeto en funcion de la edad
let personalInfo = [
    {
        "name": 'Maria Fuentes',
        "age": 35,
        "hobby": 'Tocar el piano'
    },
    {
        "name": 'Jose Bustamante',
        "age": 20,
        "hobby": 'Jugar Baloncesto'
    },
    {
        "name":'Otoniel Pereira',
        "age": 15,
        "hobby":'Ver series de aventura'
    },
    {
        "name": 'Alejandra Hernandez',
        "age": 27,
        "hobby": 'Jugar videojuegos'
},
]
//Se usa el metodo sort() para ordenar arreglos pasando parametros a y b declarados depues con el valor de la edad de cada objeto
console.table(personalInfo.sort(((a, b) => a.age - b.age)))