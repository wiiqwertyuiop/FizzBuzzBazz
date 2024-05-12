const input = 105;
const output: string[] = [];

const fizzBuzzMap = [{numb: 3, text: "Fizz"}, {numb: 5, text: "Buzz"}, {numb: 7, text: "Bazz"}];

for (let i = 1; i <= input; i++) {
  const result = fizzBuzzMap.reduce((accum, cur) => i%cur.numb ? accum : accum + cur.text, '');
  output.push(result ? result : i.toString());
}

console.log(output);
