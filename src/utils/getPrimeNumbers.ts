export default function getPrimeNumbers(num: number) {
  let nums: number[] = [];
  for (let i = 2; i <= num; i++) {
    nums.push(i);
  }

  const primeNums = nums.filter((num) => {
    for (let j = 2; j < num; j++) {
      if (num % j === 0) return false;
    }
    return true;
  });

  return primeNums;
}
