const solution = st => st.split('').join() === st.split('').reverse().join() ? true : false;
console.log(solution('foo'));
console.log(solution('aabaa'));