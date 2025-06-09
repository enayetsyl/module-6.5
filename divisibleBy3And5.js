
const arr = Array.from({ length: 50 }, (_, i) => i + 1);
const newArray = []
for(i=0; i<50; i++){
  if(arr[i] % 3 ===0 || arr[i] % 5 === 0){
    newArray.push(arr[i])
  }
}
console.log(newArray);
