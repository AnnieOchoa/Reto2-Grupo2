//Funcion para eliminar elementos duplicados en un array
const deleteDuplicates = () => {
    let numArray = [2,3,5,3,25,50,50,10,10,10,10,5,65,9,10,25]
    console.log(`Arreglo normal: ${numArray}`)
    let newArray = []
    let j = 0
    for (let i = numArray.length - 1; i >= 0; i--) {
        if (numArray.indexOf(numArray[i]) == i) {
            newArray[j] = numArray[i]
            j++
        }
    }
    console.log(`Despues de eliminar duplicados: ${newArray.reverse()}`);
}
deleteDuplicates()
