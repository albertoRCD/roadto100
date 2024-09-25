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

    } catch (e) {
        console.log(e);
        return null;
    }
}
//console.log(numberDays('1/1/2024', '1/1/2025'));

/*
#17 ----------------------------------------------------------------------------
 * Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */
const putUpperCase = (s) => {
    return s.split(" ").map(x => x[0] = x[0].toUpperCase() + x.slice(1, )).join(" ");
}
//console.log(putUpperCase('amparo jose de todos los santos'));

/*
#18 ----------------------------------------------------------------------------
 * Crea una función que evalúe si un/a atleta ha superado correctamente una
 * carrera de obstáculos.
 * - La función recibirá dos parámetros:
 *      - Un array que sólo puede contener String con las palabras
 *        "run" o "jump"
 *      - Un String que represente la pista y sólo puede contener "_" (suelo)
 *        o "|" (valla)
 * - La función imprimirá cómo ha finalizado la carrera:
 *      - Si el/a atleta hace "run" en "_" (suelo) y "jump" en "|" (valla)
 *        será correcto y no variará el símbolo de esa parte de la pista.
 *      - Si hace "jump" en "_" (suelo), se variará la pista por "x".
 *      - Si hace "run" en "|" (valla), se variará la pista por "/".
 * - La función retornará un Boolean que indique si ha superado la carrera.
 * Para ello tiene que realizar la opción correcta en cada tramo de la pista.
 */

const theRace = (array, string) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] != 'run' && array[i] != 'jump') return false;
    }

    for (let i = 0; i < string.length; i++) {
        if (string[i] != '_' && string[i] != '|') return false;
    }

    if (array.length != string.length) return false;

    for (let i = 0; i < array.length; i++) {
        if (array[i] == 'run' && string[i] != '_') return false;
        else if (array[i] == 'jump' && string[i] != '|') return false;
    }
    return true;
}

//console.log(theRace(['run','run','jump','run'], '__|_'));

/*
#19 ----------------------------------------------------------------------------
 * Crea una función que analice una matriz 3x3 compuesta por "X" y "O"
 * y retorne lo siguiente:
 * - "X" si han ganado las "X"
 * - "O" si han ganado los "O"
 * - "Empate" si ha habido un empate
 * - "Nulo" si la proporción de "X", de "O", o de la matriz no es correcta.
 *   O si han ganado los 2.
 * Nota: La matriz puede no estar totalmente cubierta.
 * Se podría representar con un vacío "", por ejemplo.
 */

const threeInRow = (table) => {

     // Verificar que todos los elementos sean válidos
     for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < table[i].length; j++) {
            if (!(table[i][j] === 'o' || table[i][j] === 'x' || table[i][j] === '')) {
                return null; // Retorna null si el elemento contiene caracteres no permitidos
            }
        }
    }
        
    //Check rows.
    for(let i=0; i<table.length; i++){
        if(table[i].filter(x => x == 'x').length == 3) return 'X';
        if(table[i].filter(x => x == 'o').length == 3) return 'O';
    }

    //Check columns.
    for(let i=0; i<table.length; i++){
            if(table[0][i] == 'x' && table[1][i] == 'x' && table[2][i] == 'x') return 'X';
            else if(table[0][i] == 'o' && table[1][i] == 'o' && table[2][i] == 'o') return 'O';
    }

    // Check diagonals
    if (table[0][0] === 'x' && table[1][1] === 'x' && table[2][2] === 'x') return 'X';
    if (table[0][2] === 'x' && table[1][1] === 'x' && table[2][0] === 'x') return 'X';
    if (table[0][0] === 'o' && table[1][1] === 'o' && table[2][2] === 'o') return 'O';
    if (table[0][2] === 'o' && table[1][1] === 'o' && table[2][0] === 'o') return 'O';

    // Check for draw (empate)
    const isFull = table.every(row => row.every(cell => cell !== ''));
    if (isFull) return 'Empate';

}

/*console.log(threeInRow(
    [
        ['o', 'o', 'x'],
        ['x', 'o', 'o'],
        ['o', '', 'o']
    ]
));*/

/*
#20 ----------------------------------------------------------------------------
 * Crea una función que reciba días, horas, minutos y segundos (como enteros)
 * y retorne su resultado en milisegundos.
 */

const miliseconds = (d, h, m, s) => {

    let scs = s * 1000;
    let mns = m * 60000;
    let hrs = h * 3600000;
    let days = d * 86400000;

    return scs + mns + hrs + days;
}
//console.log(miliseconds(2,4,10,44));

/*
#21 ----------------------------------------------------------------------------
 * Crea una función que sume 2 números y retorne su resultado pasados
 * unos segundos.
 * - Recibirá por parámetros los 2 números a sumar y los segundos que
 *   debe tardar en finalizar su ejecución.
 * - Si el lenguaje lo soporta, deberá retornar el resultado de forma
 *   asíncrona, es decir, sin detener la ejecución del programa principal.
 *   Se podría ejecutar varias veces al mismo tiempo.
 */

const stopingTime = (n1, n2, stop) => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(n1 + n2);
        }, stop);
    });
};

/*stopingTime(10, 2, 5000).then(result => {
    console.log(result); 
});*/

/*
#22 ----------------------------------------------------------------------------
 * Lee el fichero "Challenge21.txt" incluido en el proyecto, calcula su
 * resultado e imprímelo.
 * - El .txt se corresponde con las entradas de una calculadora.
 * - Cada línea tendrá un número o una operación representada por un
 *   símbolo (alternando ambos).
 * - Soporta números enteros y decimales.
 * - Soporta las operaciones suma "+", resta "-", multiplicación "*"
 *   y división "/".
 * - El resultado se muestra al finalizar la lectura de la última
 *   línea (si el .txt es correcto).
 * - Si el formato del .txt no es correcto, se indicará que no se han
 *   podido resolver las operaciones.
 */


/*
#23 ----------------------------------------------------------------------------
 * Crea una función que reciba dos array, un booleano y retorne un array.
 * - Si el booleano es verdadero buscará y retornará los elementos comunes
 *   de los dos array.
 * - Si el booleano es falso buscará y retornará los elementos no comunes
 *   de los dos array.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

const outfitWTF = (arr1, arr2, b) => {

    let r = [];
    if(b){
        for(let i=0; i<arr1.length; i++){
           if(arr2.includes(arr1[i])){
            r.push(arr1[i]);
           }
        }
        for(let i=0; i<arr2.length; i++){
            if(arr1.includes(arr2[i])){
             r.push(arr2[i]);
            }
         }
    } else {
        for(let i=0; i<arr1.length; i++){
            if(!arr2.includes(arr1[i])){
             r.push(arr1[i]);
            }
         }
         for(let i=0; i<arr2.length; i++){
             if(!arr1.includes(arr2[i])){
              r.push(arr2[i]);
             }
          }

    }

    return Array.from(new Set(r));
}

//console.log(outfitWTF(['amparo','jose',2], ['hose', 'jose', 3], true));

/*
#24 ----------------------------------------------------------------------------
 * Crea dos funciones, una que calcule el máximo común divisor (MCD) y otra
 * que calcule el mínimo común múltiplo (mcm) de dos números enteros.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

const mcd = (n1, n2) => {
    let numbers1 = [];
    let numbers2 = [];

    for(let i=1; i<=n1; i++){
        if(n1 % i == 0) numbers1.push(i);
    }

    for(let i=1; i<=n2; i++){
        if(n2 % i == 0) numbers2.push(i);
    }
    return numbers1.filter(x => numbers2.includes(x)).sort((a,b) => b-a)[0];
}

const mcm = (n1, n2) => {
    
    let numbers1 = [];
        for(let i=n1; i<101; i++)
            if(i % n1 == 0) numbers1.push(i);

    let r = n2;
    do {
        if(r % n2 == 0){
            if(numbers1.includes(r)) return r;
        }
        r++;
    }while(true)
        
}

//console.log(mcd(18, 15));
//console.log(mcm(18, 15));

/*
#25 ----------------------------------------------------------------------------
 * Quiero contar del 1 al 100 de uno en uno (imprimiendo cada uno).
 * ¿De cuántas maneras eres capaz de hacerlo?
 * Crea el código para cada una de ellas.
 */

const count1to100 = () => {
    //1
    let n = 1;
    while(n != 101){
        //console.log(n);
        n++;
    }
    //2
    for(let i=1; i<101; i++){
        //console.log(i);
    }
    //3
    console.log(Array.from({ length: 100 }, (_, i) => i + 1).map(x => x));
}
//count1to100();

/*
#26 ----------------------------------------------------------------------------
* Crea un programa que calcule quien gana más partidas al piedra,
 * papel, tijera.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "R" (piedra), "P" (papel)
 *   o "S" (tijera).
 * - Ejemplo. Entrada: [("R","S"), ("S","R"), ("P","S")]. Resultado: "Player 2".
 */

function rockPaperScisors(c) {
    let r = ['Player1', 'Player2', 'Empate-'];

    for(let i=0; i<c.length; i++){
        let player1 = c[i][0];
        let player2 = c[i][1];

        if(player1 == player2) r[2]+='.';

        else if(player1 == 'R' && player2 == 'S') r[0]+='.';
        else if(player1 == 'S' && player2 == 'P') r[0]+='.';
        else if(player1 == 'P' && player2 == 'R') r[0]+='.';

        else r[1]+='.';
    }

    return r.sort((a,b) => b.length-a.length)[0].slice(0,7);
}
//console.log(rockPaperScisors([["S","S"], ["S","S"], ["P","S"]]));

/*
#27 ----------------------------------------------------------------------------
 * Crea un programa que dibuje un cuadrado o un triángulo con asteriscos "*".
 * - Indicaremos el tamaño del lado y si la figura a dibujar es una u otra.
 * - EXTRA: ¿Eres capaz de dibujar más figuras?
 */

const paintShapes = (...args) => {

    let lado;

    if(args.length == 1){
        lado = args[0];
        for(let i = 0; i < lado; i++){
            let row = '';  // Almacenar cada fila
            for(let j = 0; j < lado; j++){
                if(i == 0 || i == lado - 1 || j == 0 || j == lado - 1){
                    row += '*';
                } else {
                    row += ' ';
                }
            }
            console.log(row);  // Imprimir la fila completa
        }
    }
}

paintShapes(4);

