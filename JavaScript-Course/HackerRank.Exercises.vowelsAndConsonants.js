

// Cooled Loops, I faild using 'em correctly. at the Time 5:10 PM 1/25/2023

function vowelsAndConsonants(s) {
  let vowels = [];
  for (let i = 0; i < s.length; i++) {
    if (
      s[i] == "a" ||
      s[i] == "e" ||
      s[i] == "i" ||
      s[i] == "o" ||
      s[i] == "u"
    ) {
      console.log(`A vowel I am|: ${s[i]}`);
    } else {
      s.push(vowels);
      console.log(`Iam ${vowels[i]}not a vowel`);
      if (s.length >= 15) break;
    }
  }
}
vowelsAndConsonants(["a", "e", "i", "o", "u", "s", "c"]);

// ************ 🔽 without without using Prettier formatting 
function vowelsAndConsonants(s) {
  let vowels = [];
  for (let i = 0; i < s.length; i++) {
   if(s[i] == 'a' ||s[i] ==  'e' ||s[i] ==  'i'||s[i] ==  'o'|| s[i] == 'u'){
       
       console.log(`A vowel I am|: ${s[i]}`)
   } else {
       s.push(vowels)
       console.log(`Iam ${vowels[i]}not a vowel`)
       if(s.length >= 15) break;
   }
  }
  
}
vowelsAndConsonants(["a","e","i","o","u","s","c"])

