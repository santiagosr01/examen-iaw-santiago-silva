const ej2 =require("prompt-sync")({signit: true})

let cadenas = []
let cadena
while (!cancelar){
const palabra = ej2 ("Introduce una palabra: ")
let cancelar = false
const frase = palabra
let nums = 0 
        for (let i = 0; i < frase.length; i ++){
         if (frase.charAt(i) === "1" || 
            frase.charAt(i) === "2" ||
            frase.charAt(i) === "3" ||
            frase.charAt(i) === "4" ||
            frase.charAt(i) === "5" ||
            frase.charAt(i) === "6" ||
            frase.charAt(i) === "7" ||
            frase.charAt(i) === "8" ||
            frase.charAt(i) === "9") {
            }{  
                nums = nums + 1
            } 
           }
        console.log("La suma es esta: " + nums)       
}



