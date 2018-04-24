const addTogether = list => {
  return list.reduce((acc, num) => acc+num, 0);
};

const concatenateStringsWithSpaces = list => {
  return list.reduce((acc, string) => acc + string + " ", "");
};

const squaresAndSubtracts = list => {
  return list
    .map( num => num*num )
    .reduce( (accumulator, num) => accumulator-num );
};

const myReduce = (list, fn, seed) => {
  let answer = seed;
  for (let i = 0; i < list.length; i++) {
    answer = fn(answer, list[i]);
  }
  return answer;
};