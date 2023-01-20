var climbStairs = function(n) {
  const mem=[1,1,2];
  for (let i = 3; i <= n; i++) {
    mem[i]=mem[i-1]+mem[i-2];
  }
  return mem[n];
};