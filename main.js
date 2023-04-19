let dataArr = [
  8, 79, 14, 94, 33, 31, 2, 74, 46, 72, 75, 40, 5, 1, 48, 81, 99, 4, 43, 68, 90,
  23, 97, 10, 55, 11, 20, 50, 70, 83, 47, 25, 86, 30, 60, 96, 76, 22, 67, 77,
];

function isPrime(num) {
  if (num == 2 || num == 3) return true;
  if (num <= 1 || num % 2 == 0 || num % 3 == 0) return false;
  for (let i = 5; i * i <= num; i += 6)
    if (num % i == 0 || num % (i + 2) == 0) return false;
  return true;
}
class BaseNumber{
  constructor(number) {
    this.number = number
  }
  getNumber(){
    return this.number()
  }
  get GNumber(){
    return this.number
  }
  set GNumber(num){
    return this.number = num
  }
}

class NumberBucket extends BaseNumber{
  constructor() {
    super();
  }
}

class PrimeBucket extends BaseNumber{
  constructor() {
    super();
  }
}
// Go through the data array, and for each number, create either a NumberBucket object, or a PrimeBucket object.
//     Store all these objects in an "numbers" array.
//
//     Go through this "numbers" array, and call .getNumber() for all the objects there, and print out the result.
let nBucket = {}
let nPrimeBucket = {}
numbers = []
  for (let i = 0; i < dataArr.length; i++) {
      nPrimeBucket[i] = dataArr[i]
      nBucket[i] = dataArr[i]
  }
// numbers.push( nBucket)
// numbers.push(nPrimeBucket)
// for (const number of numbers) {
//   console.log(number)
// }

numbers.push(nPrimeBucket)
for (const number of numbers) {
  for (const key in number) {
    if(isPrime(number[key])){
    console.log('nPrimeBucket: ' + number[key])
    }
    else {
      console.log('nBucket: ' + number[key])
    }
  }
}
