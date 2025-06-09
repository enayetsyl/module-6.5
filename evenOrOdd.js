const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter the number. ', (num) => {
  const number = Number(num);
  if(isNaN(number)){
    console.log("Entered input is not a valid number")
  } else{
    if(number % 2 === 0){
      console.log("This is an even number")
    } else {
      console.log("This is a odd number")
    }
  }
  rl.close();
});
