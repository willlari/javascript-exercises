const repeatString = function(name, number) {
    let phrase = '';
    if (number<0) {
        phrase = 'ERROR';
    } else {
        for(let i =0; i<number ; i++){
            phrase = phrase + name;
        }
    }
    return phrase;

};

// Do not edit below this line
module.exports = repeatString;
