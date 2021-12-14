const unroll = require("./unroll");

describe("#unroll", function () {
  let squareOne = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
    [17, 18, 19, 20],
  ];
  let squareTwo = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
    [17, 18, 19, 20],
    [21, 22, 23, 24],
  ];
  let squareThree = [
    [1, 2, 3, 4, 0],
    [5, 6, 7, 8, 0],
    [9, 10, 11, 12, 0],
    [13, 14, 15, 16, 0],
    [17, 18, 19, 20, 0],
  ];
  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });
  it("is works", function () {
    expect(unroll(squareOne)).toEqual([
      1, 2, 3, 4, 8, 12, 16, 20, 19, 18, 17, 13, 9, 5, 6, 7, 11, 15, 14, 10,
    ]);
  });
  it("is works more rows", function () {
    expect(unroll(squareTwo)).toEqual([
      1, 2, 3, 4, 8, 12, 16, 20, 24, 23, 22, 21, 17, 13, 9, 5, 6, 7, 11, 15, 19,
      18, 14, 10,
    ]);
  });
  it("is works more columns", function () {
    expect(unroll(squareThree)).toEqual([
      1, 2, 3, 4, 0, 0, 0, 0, 0, 20, 19, 18, 17, 13, 9, 5, 6, 7, 8, 12, 16, 15,
      14, 10, 11,
    ]);
  });
});
