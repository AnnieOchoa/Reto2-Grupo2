//Funcion para saber si todos los elementos en un array son mayores a 10 con un bool
const allMoreThanTen = () => {
    const numeroArray = [22,12,100,20,50,17,21]
    const limite = 10
    let flag;
    let i = 0
    do {
        if(numeroArray[i] > limite) {
            flag = true
            i++
        } else {
            flag = false
            break;
        }
    } while (i<numeroArray.length);
    
console.log(`Arreglo: ${numeroArray}`);
    if (flag === true) {
        console.log('Todos los elementos son mayores a 10');
    } else {
        console.log('No todos los elementos son mayores a 10');
    }
}

allMoreThanTen()