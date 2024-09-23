/*
#1 ---------------------------------------------------------------------------
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

function fizzbuzz() {

    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log('fizzbuzz');
        } else if (i % 3 == 0) {
            console.log('fizz');
        } else if (i % 5 == 0) {
            console.log('buzz')
        } else {
            console.log(i);
        }
    }
}
//fizzbuzz();

/* 
#2 ---------------------------------------------------------------------------
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function isAnagram(word1, word2) {

    if (word1.toLowerCase() == word2.toLowerCase()) return false;

    return word1.toLowerCase().split("").sort().join("") == word2.toLowerCase().split("").sort().join("");
}

//console.log(isAnagram('amparo','maropa'));

/*
#3 ---------------------------------------------------------------------------
/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

function fibonacci() {
    let count = [0, 1]
    let i = 0;
    let j = 1;
    
    do {
        count.push(count[i] + count[j]);
        i++;
        j++;

    } while (count.length < 50);
    return count;
}

//console.log(fibonacci());

/*
#4  ---------------------------------------------------------------------------
/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

function isPrimeNumber(num){
    for(let i=2; i<num; i++){
        if(num % i == 0) return false;
    }
    return true;
}

//console.log(isPrimeNumber(148));

function primesBetween1and100(){
    for(let i=2; i<=100; i++)
        if(isPrimeNumber(i))
            console.log(i);
}

//primesBetween1and100();

/*
#5 ---------------------------------------------------------------------------
/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

function polygonArea(shape){

    switch(shape){
        case 't':
            let base = parseFloat(prompt('Base: '));
            let altura = parseFloat(prompt('Altura: '));
            return (base * altura) / 2;
        case 'c':
            let lado = parseFloat(prompt('Lado: '));
            return lado * lado;
        case 'r':
            let lado1 = parseFloat(prompt('Lado Horizontal: '));
            let lado2 = parseFloat(prompt('Lado Vertical: '));
            return lado1 * lado2;
        default:
            return null;
    }
}
//console.log(polygonArea('c'));

/* 
#6 ---------------------------------------------------------------------------
 * Crea un programa que se encargue de calcular el aspect ratio de una
 * imagen a partir de una url.
 * - Url de ejemplo:
 *   https://raw.githubusercontent.com/mouredevmouredev/master/mouredev_github_profile.png
 * - Por ratio hacemos referencia por ejemplo a los "16:9" de una
 *   imagen de 1920*1080px.
 */

/*
#7 ---------------------------------------------------------------------------
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

const toReverseManual = (string => {
    let r = "";
    for(let i = string.length-1; i>=0; i--){
        r+=string[i];
    }
    return r;
})
//console.log(toReverseManual('Hola mundo'));

/* 
#8 ----------------------------------------------------------------------------
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */

function countWords(string){
    let d = {};
    string = string.replaceAll('.', '').replaceAll(',','').replaceAll('!','').replaceAll('?','').replaceAll('(','').replaceAll(')','');
    let a = string.split(" ");

    for(let i=0; i<a.length; i++){
        if(d.hasOwnProperty(a[i].toLowerCase())){
            d[a[i].toLowerCase()]++;
        } else {
            d[a[i].toLowerCase()] = 1;
        }
    }
    return d;
}
//console.log(countWords('hola que tal soy colosal Hola. tal'));

/*
#9 ----------------------------------------------------------------------------
/*
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */

function transformDecimalToBinary(decimal){
    let binario = '';
    let numero = decimal;

    while (numero > 0) {
        const residuo = numero % 2;
        binario = residuo + binario; 
        numero = Math.floor(numero / 2); 
    }
    return binario === '' ? '0' : binario;
}
//console.log(transformDecimalToBinary(1))

/*
#10 ----------------------------------------------------------------------------
 * Crea un programa que sea capaz de transformar texto natural a código
 * morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar
 *   la conversión.
 * - En morse se soporta raya "—", punto ".", un espacio " " entre letras
 *   o símbolos y dos espacios entre palabras "  ".
 * - El alfabeto morse soportado será el mostrado en
 *   https://es.wikipedia.org/wiki/Código_morse.
 */

function codeMorse(text){
    const morseDict = {
        'A': '.-',    'B': '-...',  'C': '-.-.',  'D': '-..',   'E': '.',
        'F': '..-.',  'G': '--.',   'H': '....',  'I': '..',    'J': '.---',
        'K': '-.-',   'L': '.-..',  'M': '--',    'N': '-.',    'O': '---',
        'P': '.--.',  'Q': '--.-',  'R': '.-.',   'S': '...',   'T': '-',
        'U': '..-',   'V': '...-',  'W': '.--',   'X': '-..-',  'Y': '-.--',
        'Z': '--..',
        'a': '.-',    'b': '-...',  'c': '-.-.',  'd': '-..',   'e': '.',
        'f': '..-.',  'g': '--.',   'h': '....',  'i': '..',    'j': '.---',
        'k': '-.-',   'l': '.-..',  'm': '--',    'n': '-.',    'o': '---',
        'p': '.--.',  'q': '--.-',  'r': '.-.',   's': '...',   't': '-',
        'u': '..-',   'v': '...-',  'w': '.--',   'x': '-..-',  'y': '-.--',
        'z': '--..',
        '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', 
        '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.'
    };

    const reverseMorseDict = {
        '.-': 'A',    '-...': 'B',  '-.-.': 'C',  '-..': 'D',   '.': 'E',
        '..-.': 'F',  '--.': 'G',   '....': 'H',  '..': 'I',    '.---': 'J',
        '-.-': 'K',   '.-..': 'L',  '--': 'M',    '-.': 'N',    '---': 'O',
        '.--.': 'P',  '--.-': 'Q',  '.-.': 'R',   '...': 'S',   '-': 'T',
        '..-': 'U',   '...-': 'V',  '.--': 'W',   '-..-': 'X',  '-.--': 'Y',
        '--..': 'Z',
        '-----': '0', '.----': '1', '..---': '2', '...--': '3', '....-': '4', 
        '.....': '5', '-....': '6', '--...': '7', '---..': '8', '----.': '9'
    };

    let r = "";
    if(/[a-zA-Z0-9]/.test(text)){
        for(let i=0; i<text.length; i++){
            r += morseDict[text[i]] + " ";
        }
    } else {
        for(let i=0; i<text.length; i++){
            r += reverseMorseDict[text[i]] + " ";
        }
    }
    return r;
}

//console.log(codeMorse('amparo'));
