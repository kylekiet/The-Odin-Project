function sumOfTripledEvens(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      // Step 1: If the element is an even number
      if (array[i] % 2 === 0) {
        // Step 2: Multiply this number by three
        const tripleEvenNumber = array[i] * 3;
  
        // Step 3: Add the new number to the total
        sum += tripleEvenNumber;
      }
    }
    return sum;
  }

function mapSumOfTripledEvens(array) {
    let total = 0;
    array.map((num) => {
        if (num % 2 === 0) {
            total += num * 3;
        }
    })
    return total;
}

function filterSumOfTripledEvens(array) {
    let total = 0;
    array.filter((nums) => {
        if (nums % 2 === 0) {
            total += nums * 3;
        } 
    })
    return total;
}


  
//          0,9,15,18,24,3
let input = [0,3,5,6,8,1];
//console.log(sumOfTripledEvens(input));
//console.log(mapSumOfTripledEvens(input));
//console.log(filterSumOfTripledEvens(input));

let reduceSumOfTripledEvens = input.reduce((total,curr) => {
    if (curr % 2 == 0) {
        return total += curr * 3;
    } else { return total;}
})

console.log(reduceSumOfTripledEvens);