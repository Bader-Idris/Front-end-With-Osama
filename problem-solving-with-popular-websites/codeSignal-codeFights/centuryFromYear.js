// century Function
const solution = (year) => {
  let sliced = parseInt(year.toString().slice(0, -2))
  if (year < 100) return 1;
  else if (year.toString().slice(-1) != 0) return sliced + 1;
  else return sliced
}
console.log(solution(5))//1
console.log(solution(500))//5
console.log(solution(501))//6
console.log(solution(2050))//20
console.log(solution(1905))//20