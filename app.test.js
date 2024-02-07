test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})


const { fromDollarToYen } = require('./app');

test('One dollar should be equivalent to 156.5 yen', () => {
  expect(fromDollarToYen(1)).toBe(156.5);
});


const { fromYenToPound } = require('./app');

test('One yen should be equivalent to 0.00556 pounds', () => {
  expect(fromYenToPound(1)).toBeCloseTo(0.00556, 5);
})