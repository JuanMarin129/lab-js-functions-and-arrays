// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1,num2) {

    if(num1>num2) {
        return num1;
    }
    else if(num2>num1) {
        return num2;
    }
    else if(num1===num2) {
        return num1;
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrayPalabras) {

    let palabraLarga = "";

    if(arrayPalabras.length === 0) {
        return null
    }

    for(let i=0; i<arrayPalabras.length; i++) {
        if(arrayPalabras[i].length > palabraLarga.length) {
            palabraLarga = arrayPalabras[i];
        }
    }

    return palabraLarga;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numerosParaSumar) {
    let suma = 0;

    for (let i=0;i<numerosParaSumar.length; i++)
    {
        suma += numerosParaSumar[i];
    }

    return suma;
}



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numerosParaMedia) {

    if(numerosParaMedia.length === 0) {
        return 0;
    }
  
    let media = sumNumbers(numerosParaMedia) / numerosParaMedia.length;

    /*
    let sumaTotal = sumNumbers(numerosParaMedia);
    let media = sumaTotal / numerosParaMedia.length;
    */
    return media;

}





// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayPalabrasBuscar,palabraBusqueda) {

    let encontrado = false;

    if(arrayPalabrasBuscar.length === 0) {
        return null;
    }
    
    for (let i=0; i<arrayPalabrasBuscar.length; i++) {
        if(arrayPalabrasBuscar[i] === palabraBusqueda) {
            encontrado = true;
            // console.log("Encontramos la palabra");
        }
    }
    return encontrado;
}
