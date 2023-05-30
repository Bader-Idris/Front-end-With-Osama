/*
  []                                -->  "no one likes this"
  ["Peter"]                         -->  "Peter likes this"
  ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
  ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
  ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
*/

const likes = names => {
  if (names.length === 0) return "no one likes this"
  else if (names.length === 1) return `${names[0]} likes this`
  else if (names.length === 2) return `${names[0]} and ${names[1]} like this`
  else if (names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`
  else if (names.length > 3) return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
};

console.log(likes([]));//'no one likes this'
console.log(likes(['Peter']));//'Peter likes this'
console.log(likes(['Jacob', 'Alex']));//'Jacob and Alex like this'
console.log(likes(['Max', 'John', 'Mark']));//'Max, John and Mark like this'
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));//'Alex, Jacob and 2 others like this'

/*
  this boy is clever!


  function likes(names) {
  return {
    0: 'no one likes this',
    1: `${names[0]} likes this`, 
    2: `${names[0]} and ${names[1]} like this`, 
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
  }[Math.min(4, names.length)]
}
*/