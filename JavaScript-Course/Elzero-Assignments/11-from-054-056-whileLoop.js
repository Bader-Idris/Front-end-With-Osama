

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while (index < friends.length) {
  index++;
  if (index == friends.length) break;/* Must be here, not downwards */
  if (typeof friends[index] === 'number'){
    continue;
  } else if (!friends[index].startsWith("A")){
    counter ++;
    console.log(`${counter} => ${friends[index]}`);
  }
}
/*
  Output

  "1 => Sayed"
  "2 => Mahmoud"
*/