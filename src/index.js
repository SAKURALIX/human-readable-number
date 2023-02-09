module.exports = function toReadable (number) {
    let value = String(number);
    let units = value.at(-1);
    let tens = value.at(-2);
    let hundreds = value.at(-3);

    let readableUnit
    let readableTen
    let readableHundred

    let readableString
    if (units === '0' && tens === 'udefined') {readableUnit = 'zero'}
    if (units === '1') {readableUnit = 'one'}
    if (units === '2') {readableUnit = 'two'}
    if (units === '3') {readableUnit = 'three'}
    if (units === '4') {readableUnit = 'four'}
    if (units === '5') {readableUnit = 'five'}
    if (units === '6') {readableUnit = 'six'}
    if (units === '7') {readableUnit = 'seven'}
    if (units === '8') {readableUnit = 'eight'}
    if (units === '9') {readableUnit = 'nine'}


    if (tens === '2') {readableTen = 'twenty '}
    if (tens === '3') {readableTen = 'thirty '}
    if (tens === '4') {readableTen = 'forthy '}
    if (tens === '5') {readableTen = 'fifty '}
    if (tens === '6') {readableTen = 'sixty '}
    if (tens === '7') {readableTen = 'seventy '}
    if (tens === '8') {readableTen = 'eighty '}
    if (tens === '9') {readableTen = 'ninety '}

    if (hundreds === '9') {readableHundred = 'nine hundred '}

    if (tens === '9' && units === '0') {
        readableTen = 'ninety ';
        readableUnit = 'zero'
    }



    readableString = readableHundred + readableTen + readableUnit;

    return readableString
    // console.log(readableString)
    // return console.log(tens)
}

// toReadable (25)
// toReadable (34)
// toReadable (47)
// toReadable (56)
// toReadable (79)

// toReadable (999)