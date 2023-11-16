const highestNumber = () => {
    const numeroArray = [2,7, 20, 17, 50, 6, 64]
    let max = numeroArray[0]
    for (let i = 0; i < numeroArray.length; i++) {
        if (numeroArray[i] > max) {
            max = numeroArray[i]  
        }
    }
    console.log(`El numero mayor del arreglo ${numeroArray} es: ${max}`);
}

highestNumber()