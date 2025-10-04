// ========================
// DO NOT REMOVE THE EXPORT KEYWORDS
// ========================

/**
 * Challenge - 1
 *
 * Calculate and return the sum of the numbers between 1 and a destination.
 * (1 to destination) where destination is a number greater than 1 and destination is included when calculating the sum.
 *
 *
 * @param {number} destination is the stopping number
 * @returns number the sum of the numbers from 1 to destination
 */
export function sumOfNumbersTo(destination) {
    let sum = 0;
    for (let i = 1; i <= destination; i++) {
        sum += i;
    }
    return sum;
}


/**
 // NOTE: This is a placeholder for Challenge 1, assuming it sums numbers in an array.
export function sumOfNumbersTo(numbers) {
    // This is a placeholder implementation—replace it with your actual solution for Challenge 1 if needed.
    return numbers.reduce((acc, current) => acc + current, 0);
}

/**
 * Challenge - 2
 *
 * Calculate count, sum and put each even number in an array, from 0 to a destination.
 * The returned object should have the following keys: count, sum, arrayOfEvenNumbers.
 *
 * @param {number} destination the stopping number (inclusive)
 * @returns {object} the object containing count, sum, arrayOfEvenNumbers from 0 to destination
 */
export function evenNumbersWithin(destination) {
    // Use let for mutable variables
    let sum = 0;
    let count = 0;
    const arrayOfEvenNumbers = [];

    // Loop from 0 up to and including the destination number
    for (let i = 0; i <= destination; i++) {
        // Check if the current number (i) is even
        if (i % 2 === 0) {
            count++;
            sum += i;
            arrayOfEvenNumbers.push(i);
        }
    }

    // Return the required result object
    return {
        count,
        sum,
        arrayOfEvenNumbers,
    };
}

/**
 * Challenge - 3
 *
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 *
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 *
 * @param {Array<number>} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns {Array<number>} the converted temperatures in Fahrenheit
 */
export function celsiusToFahrenheit(arrayOfNumbers) {
    // The formula for C to F is: F = C * (9/5) + 32
    // We use the map function to transform each Celsius temperature (celsius)
    // to Fahrenheit, and then Math.trunc to remove any decimal parts.
    const result = arrayOfNumbers.map(celsius => {
        const fahrenheit = celsius * (9 / 5) + 32;
        return Math.trunc(fahrenheit);
    });

    return result;
}

/**
 * Challenge - 4
 *
 * Calculates the count and sum of odd numbers from 0 to the given destination.
 * Stores each odd number in an array. Returns an object with count, sum, and arrayOfOddNumbers.
 *
 * @param {number} destination the destination number
 * @returns {object} the count, sum, and arrayOfOddNumbers
 */
export function oddNumbersWithin(destination) {
    let sum = 0;
    let count = 0;
    const arrayOfOddNumbers = [];

    // Loop from 0 up to and including the destination number
    for (let i = 0; i <= destination; i++) {
        // Check if the current number (i) is odd
        if (i % 2 !== 0) {
            count++;
            sum += i;
            arrayOfOddNumbers.push(i);
        }
    }

    return {
        count,
        sum,
        arrayOfOddNumbers,
    };
}

/**
 * Challenge - 5
 *
 * Given an array of numbers, find all numbers that are multiples of a given factor.
 * Return an object containing the count of multiples, their sum, and an array of the multiples.
 *
 * @param {Array<number>} arrayOfNumbers the array of numbers to check
 * @param {number} factor the factor to check multiples for
 * @returns {object} the count, sum, and arrayOfMultiples
 */
export function findMultiples(arrayOfNumbers, factor) {
    let sum = 0;
    let count = 0;
    const arrayOfMultiples = [];

    // Iterate through the array of numbers
    for (const number of arrayOfNumbers) {
        // Check if the number is a multiple of the factor
        // A number is a multiple if the remainder of the division is 0.
        if (number % factor === 0) {
            count++;
            sum += number;
            arrayOfMultiples.push(number);
        }
    }

    return {
        count,
        sum,
        arrayOfMultiples,
    };
}

/**
 * Helper function to calculate the factorial of a single number.
 * @param {number} n The number for which to calculate the factorial.
 * @returns {number} The factorial result. Returns 0 for negative numbers.
 */
function factorial(n) {
    // Handle special cases: negative numbers return 0
    if (n < 0) {
        return 0;
    }
    // Base case: 0! = 1 and 1! = 1
    if (n === 0 || n === 1) {
        return 1;
    }

    // Calculate factorial iteratively
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
/**
 * Challenge - 6
 *
 * Given an array of numbers, calculate the factorial of each number and return a new array.
 * The factorial of a number n is the product of all positive integers less than or equal to n.
 * For example: 5! = 5 × 4 × 3 × 2 × 1 = 120
 * Note: 0! = 1 and negative numbers should return 0.
 *
 * @param {Array<number>} arrayOfNumbers the array of numbers to calculate factorials for
 * @returns {Array<number>} the array of factorial results
 */
export function calculateFactorials(arrayOfNumbers) {
    // Use the map function to apply the helper factorial function to every number in the array.
    const result = arrayOfNumbers.map(factorial);

    return result;
}
/**
 * Challenge - 7
 *
 * Given an array of numbers, find all prime numbers and return an object containing
 * the count of primes, their sum, and an array of the prime numbers found.
 *
 * @param {Array<number>} arrayOfNumbers the array of numbers to check for primes
 * @returns {object} the count, sum, and arrayOfPrimes
 */
export function findPrimeNumbers(arrayOfNumbers) {
    /**
     * Helper function to determine if a number is prime.
     * A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.
     *
     * @param {number} num The number to check.
     * @returns {boolean} True if the number is prime, otherwise false.
     */
    const isPrime = (num) => {
        // Numbers less than 2 are not prime
        if (num < 2) {
            return false;
        }
        // 2 is the only even prime number
        if (num === 2) {
            return true;
        }
        // Check for divisibility from 2 up to the square root of the number
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    let sum = 0;

    // 1. Filter the array to get only prime numbers using the helper function
    const arrayOfPrimes = arrayOfNumbers.filter(isPrime);

    // 2. Calculate the count
    const count = arrayOfPrimes.length;

    // 3. Calculate the sum
    sum = arrayOfPrimes.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);

    return {
        count,
        sum,
        arrayOfPrimes,
    };
}
/**
 * Challenge - 8
 *
 * Given an array of numbers, return the double of the values
 *
 * @param {Array<number>} arrayOfNumbers the array of numbers to double
 * @returns {Array<number>} the array of doubled numbers
 */
export function doubleTheValues(arrayOfNumbers) {
    // Use the map function to iterate over the array and return a new array
    // where each number is multiplied by 2.
    const result = arrayOfNumbers.map(num => num * 2);

    return result;
}


// ========================
// DO NOT REMOVE THE EXPORT KEYWORDS
// ========================
