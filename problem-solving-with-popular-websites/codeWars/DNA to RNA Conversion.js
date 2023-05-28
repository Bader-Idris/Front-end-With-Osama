// turn every t into u
// function DNAtoRNA(dna) {
//   // create a function which returns an RNA sequence from the given DNA sequence
//   let result = '';
//   for (let i = 0; i < dna.length; i++) {
//     if (dna[i] == 't' || dna[i] == 'T') result += 'U';
//     else result += dna[i];
//   }
//   return result.toUpperCase()
// }
const DNAtoRNA = dna =>
  dna.replace(/t|T/g, 'U').toUpperCase();
console.log(DNAtoRNA('BaderHanady y tt T t T '));
//! this regExp is awesome, by Bito aid