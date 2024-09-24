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

function isPrimeNumber(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) return false;
    }
    return true;
}

//console.log(isPrimeNumber(148));

function primesBetween1and100() {
    for (let i = 2; i <= 100; i++)
        if (isPrimeNumber(i))
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

function polygonArea(shape) {

    switch (shape) {
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
    for (let i = string.length - 1; i >= 0; i--) {
        r += string[i];
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

function countWords(string) {
    let d = {};
    string = string.replaceAll('.', '').replaceAll(',', '').replaceAll('!', '').replaceAll('?', '').replaceAll('(', '').replaceAll(')', '');
    let a = string.split(" ");

    for (let i = 0; i < a.length; i++) {
        if (d.hasOwnProperty(a[i].toLowerCase())) {
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

function transformDecimalToBinary(decimal) {
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

function codeMorse(text) {
    const morseDict = {
        'A': '.-',
        'B': '-...',
        'C': '-.-.',
        'D': '-..',
        'E': '.',
        'F': '..-.',
        'G': '--.',
        'H': '....',
        'I': '..',
        'J': '.---',
        'K': '-.-',
        'L': '.-..',
        'M': '--',
        'N': '-.',
        'O': '---',
        'P': '.--.',
        'Q': '--.-',
        'R': '.-.',
        'S': '...',
        'T': '-',
        'U': '..-',
        'V': '...-',
        'W': '.--',
        'X': '-..-',
        'Y': '-.--',
        'Z': '--..',
        'a': '.-',
        'b': '-...',
        'c': '-.-.',
        'd': '-..',
        'e': '.',
        'f': '..-.',
        'g': '--.',
        'h': '....',
        'i': '..',
        'j': '.---',
        'k': '-.-',
        'l': '.-..',
        'm': '--',
        'n': '-.',
        'o': '---',
        'p': '.--.',
        'q': '--.-',
        'r': '.-.',
        's': '...',
        't': '-',
        'u': '..-',
        'v': '...-',
        'w': '.--',
        'x': '-..-',
        'y': '-.--',
        'z': '--..',
        '0': '-----',
        '1': '.----',
        '2': '..---',
        '3': '...--',
        '4': '....-',
        '5': '.....',
        '6': '-....',
        '7': '--...',
        '8': '---..',
        '9': '----.'
    };

    const reverseMorseDict = {
        '.-': 'A',
        '-...': 'B',
        '-.-.': 'C',
        '-..': 'D',
        '.': 'E',
        '..-.': 'F',
        '--.': 'G',
        '....': 'H',
        '..': 'I',
        '.---': 'J',
        '-.-': 'K',
        '.-..': 'L',
        '--': 'M',
        '-.': 'N',
        '---': 'O',
        '.--.': 'P',
        '--.-': 'Q',
        '.-.': 'R',
        '...': 'S',
        '-': 'T',
        '..-': 'U',
        '...-': 'V',
        '.--': 'W',
        '-..-': 'X',
        '-.--': 'Y',
        '--..': 'Z',
        '-----': '0',
        '.----': '1',
        '..---': '2',
        '...--': '3',
        '....-': '4',
        '.....': '5',
        '-....': '6',
        '--...': '7',
        '---..': '8',
        '----.': '9'
    };

    let r = "";
    if (/[a-zA-Z0-9]/.test(text)) {
        for (let i = 0; i < text.length; i++) {
            r += morseDict[text[i]] + " ";
        }
    } else {
        for (let i = 0; i < text.length; i++) {
            r += reverseMorseDict[text[i]] + " ";
        }
    }
    return r;
}

//console.log(codeMorse('amparo'));

/*
#11 ----------------------------------------------------------------------------
 * Crea un programa que comprueba si los paréntesis, llaves y corchetes
 * de una expresión están equilibrados.
 * - Equilibrado significa que estos delimitadores se abren y cieran
 *   en orden y de forma correcta.
 * - Paréntesis, llaves y corchetes son igual de prioritarios.
 *   No hay uno más importante que otro.
 * - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
 * - Expresión no balanceada: { a * ( c + d ) ] - 5 }
 */

function balancedExpresions(expresion) {
    // Mapa de los caracteres de cierre correspondientes a los de apertura
    const delimitadores = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    // Pila para ir almacenando los caracteres de apertura
    let pila = [];

    // Iteramos sobre cada carácter de la expresión
    for (let i = 0; i < expresion.length; i++) {
        let caracter = expresion[i];

        // Si es un carácter de apertura, lo añadimos a la pila
        if (delimitadores[caracter]) {
            pila.push(caracter);
        }
        // Si es un carácter de cierre
        else if (caracter === ')' || caracter === '}' || caracter === ']') {
            // Sacamos el último carácter de apertura de la pila
            let ultimo = pila.pop();

            // Si no coincide con el carácter de cierre o la pila está vacía, no está equilibrado
            if (delimitadores[ultimo] !== caracter) {
                return false;
            }
        }
    }

    // Si al final la pila está vacía, significa que la expresión está equilibrada
    return pila.length === 0;
}

//console.log(balancedExpresions('([{})]'));

/*
#12 ----------------------------------------------------------------------------
 * Crea una función que reciba dos cadenas como parámetro (str1, str2)
 * e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO
 *   estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO
 *   estén presentes en str1.
 */

function deleteChars(str1, str2) {

    let out1 = '';
    let out2 = '';

    for (let i = 0; i < str1.length; i++) {
        if (!str2.includes(str1[i])) {
            out1 += str1[i];
        }
    }

    for (let i = 0; i < str2.length; i++) {
        if (!str1.includes(str2[i])) {
            out2 += str2[i];
        }
    }
    return out1 + " " + out2;
}

//console.log(deleteChars('murcielgago','television'));

/*
#13 ----------------------------------------------------------------------------
 * Escribe una función que reciba un texto y retorne verdadero o
 * falso (Boolean) según sean o no palíndromos.
 * Un Palíndromo es una palabra o expresión que es igual si se lee
  * de izquierda a derecha que de derecha a izquierda.
 * NO se tienen en cuenta los espacios, signos de puntuación y tildes.
 * Ejemplo: Ana lleva al oso la avellana.
 */
function isPalindrome(text) {

    let textr = text.replace(/[^a-z0-9]/gi, '').toLowerCase();

    for (let i = 0, j = textr.length - 1; i < j; i++, j--) {
        if (textr[i] != textr[j]) return false;
    }

    return true;
}
//console.log(isPalindrome('Ana lleva al oso la avellana.'));

/*
#14 ----------------------------------------------------------------------------
 * Escribe una función que calcule y retorne el factorial de un número dado
 * de forma recursiva.
 */

function factorialRecursive(num) {
    if (num == 0 || num == 1) return 1;

    return factorialRecursive(num - 1) * num;
}
//console.log(factorialRecursive(7));

/*
#15 ----------------------------------------------------------------------------
 * Escribe una función que calcule si un número dado es un número de Armstrong
 * (o también llamado narcisista).
 * Si no conoces qué es un número de Armstrong, debes buscar información
 * al respecto.
 */

const isNumberAmstrong = (n) => {

    let nString = n.toString();
    let l = nString.length;
    let digits = [];

    for (let i = 0; i < nString.length; i++) {
        digits.push(parseInt(Math.pow(nString[i], l)));
    }
    return digits.reduce((a, b) => a + b) === n;
}
//console.log(isNumberAmstrong(214));

/*
#16 ----------------------------------------------------------------------------
 * Crea una función que calcule y retorne cuántos días hay entre dos cadenas
 * de texto que representen fechas.
 * - Una cadena de texto que representa una fecha tiene el formato "dd/MM/yyyy".
 * - La función recibirá dos String y retornará un Int.
 * - La diferencia en días será absoluta (no importa el orden de las fechas).
 * - Si una de las dos cadenas de texto no representa una fecha correcta se
 *   lanzará una excepción.
 */

function numberDays(date1, date2) {

    function convert(d) {
        let firstb = d.indexOf('/');
        let day = d.slice(0, firstb);
        let secondb = d.lastIndexOf('/');
        let month = d.slice(firstb + 1, secondb);

        let newdate1 = month + "/" + day + "/" + d.slice(-4);
        
        return new Date(newdate1);
    }

    let d1 = convert(date1);
    let d2 = convert(date2);

    try {
        let oneday = 86400000;
        return Math.round(Math.abs(d1.getTime() - d2.getTime()) * 24 / oneday / 24);

    } catch(e){
        console.log(e);
        return null;
    }
}
//console.log(numberDays('1/1/2024', '1/1/2025'));