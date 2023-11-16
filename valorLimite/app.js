//Funcion de array de valor limite y devuelva otro array con elemento > al limite
const arrayMayorLimite = () => {
    const numArray = [2, 50, 8, 20, 7, 10, 17, 30, 91]
    let limite = 10
    let newArray = []
    let j = 0
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] > limite) {
            newArray[j] = (numArray[i])
            j++
        }   
    }
    console.log(`Arreglo normal: ${numArray}`);
    console.log(`Valor límite: ${limite}`);
    console.log(`Arreglo de numeros mayores al valor limite ${newArray}`);
}
arrayMayorLimite()