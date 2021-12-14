let square = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19, 20]
];
function unroll(square) {
  result = [];

  while (square.length) {
    //grab first row remove from array
  
    result.push(...square.shift());

    //grab all last elements pop from array
   
    square.map((row) => {
      result.push(row.pop());
    });
    //grab last row reverse order pop from squareArray
    if (square.length > 0){
        result.push(...square.pop().reverse());
    }
    

    //grab all first elements shift off
  
    let tempArr = [];
    square.map((row) => {
      tempArr.push(row.shift());
    });
    result.push(...tempArr.reverse());
    //repeat
  }
  result = result.filter(x => x !== undefined)
  console.log(result);
  return result;
}

unroll(square);
module.exports = unroll;
