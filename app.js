let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen(dollarAmount) {
    return dollarAmount * oneEuroIs["JPY"] / oneEuroIs["USD"];
}

function fromEuroToDollar(euroAmount) {
    return euroAmount * oneEuroIs["USD"];
}

function fromYenToPound(yenAmount) {
    return yenAmount * oneEuroIs["GBP"] / oneEuroIs["JPY"];
}

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };



function fromDollarToYen(dollarAmount) {
  return dollarAmount * oneEuroIs["JPY"] / oneEuroIs["USD"];
}


function fromYenToPound(yenAmount) {
    return yenAmount * oneEuroIs["GBP"] / oneEuroIs["JPY"];
  }