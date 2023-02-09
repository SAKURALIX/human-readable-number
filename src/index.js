module.exports = function toReadable (number) {
    let value = String(number);
    let units = value.at(-1);
    let tens = value.at(-2);
    let hundreds = value.at(-3);

    let readableUnit
    let readableTen
    let readableHundred

    let readableString
    if (units === '0' && value.length > 1) {readableUnit = ''}
    if (units === '0' && value.length === 1) {readableUnit = 'zero'}
    if (units === '1' && tens != '1') {readableUnit = 'one'}
    if (units === '1' && tens === '1') {readableUnit = ''}
    if (units === '2' && tens != '1') {readableUnit = 'two'}
    if (units === '2' && tens === '1') {readableUnit = ''}
    if (units === '3' && tens != '1') {readableUnit = 'three'}
    if (units === '3' && tens === '1') {readableUnit = ''}
    if (units === '4' && tens != '1') {readableUnit = 'four'}
    if (units === '4' && tens === '1') {readableUnit = ''}
    if (units === '5' && tens != '1') {readableUnit = 'five'}
    if (units === '5' && tens === '1') {readableUnit = ''}
    if (units === '6' && tens != '1') {readableUnit = 'six'}
    if (units === '6' && tens === '1') {readableUnit = ''}
    if (units === '7' && tens != '1') {readableUnit = 'seven'}
    if (units === '7' && tens === '1') {readableUnit = ''}
    if (units === '8' && tens != '1') {readableUnit = 'eight'}
    if (units === '8' && tens === '1') {readableUnit = ''}
    if (units === '9' && tens != '1') {readableUnit = 'nine'}
    if (units === '9' && tens === '1') {readableUnit = ''}

    if (value.slice(-2) === '10') {readableTen = 'ten'}
    if (value.slice(-2) === '11') {readableTen = 'eleven'}
    if (value.slice(-2) === '12') {readableTen = 'twelve'}
    if (value.slice(-2) === '13') {readableTen = 'thirteen'}
    if (value.slice(-2) === '14') {readableTen = 'fourteen'}
    if (value.slice(-2) === '15') {readableTen = 'fifteen'}
    if (value.slice(-2) === '16') {readableTen = 'sixteen'}
    if (value.slice(-2) === '17') {readableTen = 'seventeen'}
    if (value.slice(-2) === '18') {readableTen = 'eighteen'}
    if (value.slice(-2) === '19') {readableTen = 'nineteen'}

    if (tens === undefined) {readableTen = ''}
    if (tens === '0') {readableTen = ''}
    if (tens === '2') {readableTen = 'twenty '}
    if (tens === '3') {readableTen = 'thirty '}
    if (tens === '4') {readableTen = 'forty '}
    if (tens === '5') {readableTen = 'fifty '}
    if (tens === '6') {readableTen = 'sixty '}
    if (tens === '7') {readableTen = 'seventy '}
    if (tens === '8') {readableTen = 'eighty '}
    if (tens === '9') {readableTen = 'ninety '}

    if (hundreds === undefined) {readableHundred = ''}
    if (hundreds === '1') {readableHundred = 'one hundred '}
    if (hundreds === '2') {readableHundred = 'two hundred '}
    if (hundreds === '3') {readableHundred = 'three hundred '}
    if (hundreds === '4') {readableHundred = 'four hundred '}
    if (hundreds === '5') {readableHundred = 'five hundred '}
    if (hundreds === '6') {readableHundred = 'six hundred '}
    if (hundreds === '7') {readableHundred = 'seven hundred '}
    if (hundreds === '8') {readableHundred = 'eight hundred '}
    if (hundreds === '9') {readableHundred = 'nine hundred '}

    if (value.slice(-2) === '90') {readableTen = 'ninety '}
    
    readableString = readableHundred + readableTen + readableUnit;

    return readableString.trim()
    // console.log(readableString.trim())
    // return console.log(tens)
}

// toReadable (25)
// toReadable (34)
// toReadable (47)
// toReadable (56)
// toReadable (79)

// toReadable (990)
// toReadable (0)