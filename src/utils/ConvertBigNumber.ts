export function convertBigNumber(number: number) {

  let tail_type = ["", "N", "Tr", "Tỉ", "N Tỉ"];
  let i = 0;

  while (number >= 1000) {
    number /= 1000;
    i++;
  }

  number = Math.round(number * 10) / 10;

  return number + `${tail_type[i]}`;
}
