var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

let longName = ''

for(i =0; i< friends.length; i++){
  if(friends[i].length > longName.length) longName = friends[i];
}

console.log(longName)