const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let array = [];

    for (let i = 0; i < expr.length; i+=10) {
        array.push(expr.slice(i, i+10));
    }

    let str = '';
    let text = '';
    let arrayOfDotesDashes = [];

    for(let i = 0; i < array.length; i++) {
        str = '';
        for(let j = 0; j < array[i].length; j+=2) {
            if(array[i].slice(j, j+2) == '11'){
                str = `${str}-`;
            }
            else if (array[i].slice(j, j+2) == '10'){
                str = `${str}.`;
            }
        }   
        if(array[i] === '**********') {
            text = `${text} `;
        }
        else{
            text = `${text}${MORSE_TABLE[str]}`;
        }
        
    }

    return text.trim();
}

module.exports = {
    decode
}