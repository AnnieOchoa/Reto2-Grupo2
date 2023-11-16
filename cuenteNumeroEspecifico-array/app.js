//Funcion para ver cuantas veces aparece un numero especifico
const especifictNumber = (repeated) => {
    const numArray = [2,3,5,3,25,50,50,10,10,10,10,5,65,9,10,25]
    let j = 0

    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] === repeated) {
            j++;
        }   
    }
if (j == 1) {
        console.log(`El numero específico ${repeated}, se repite ${j} vez.`);
    } else {
        console.log(`El numero específico ${repeated}, se repite ${j} veces.`);
    }
}

especifictNumber(2)