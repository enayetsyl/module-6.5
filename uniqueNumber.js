var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

const uniqueNumbers = []

for(i = 0; i<numbers.length; i++ ){
  let available = 0;
  for(j=0; j<uniqueNumbers.length; j++){
    if(numbers[i] === uniqueNumbers[j]) available = 1;
  }
  if (available === 0) uniqueNumbers.push(numbers[i])
}

console.log(uniqueNumbers)