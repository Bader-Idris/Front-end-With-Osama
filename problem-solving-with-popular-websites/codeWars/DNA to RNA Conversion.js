// turn every t into u
function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  // return dna.split('').forEach((e,ind, arr) => {

  // });
  let test = [...dna].map((e,ind, arr) => {
    e == 'T' || e == 't' ? e = 'U' : e;
  }).join('');
  return test
}
console.log(DNAtoRNA('BaderHanady'));