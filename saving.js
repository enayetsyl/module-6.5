function monthlySavings(income, cost){
  const cos = Number(cost);
  if(isNaN(cos)) return "invalid input"

  if(!Array.isArray(income)) return "invalid input"

  let inc = 0;
  for(i=0; i<income.length; i++){
    inc += income[i];
    if(income[i] >= 3000){
      const tax = income[i] * 0.2;
      inc -= tax;
    }
  }

  inc -= cost;

  if(inc <0) return "earn more"
  if(inc >= 0 ) return inc;

  
}

console.log(monthlySavings([900,2700, 3400], 10000))