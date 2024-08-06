// The previous chapter introduced the standard function Math.min that returns
// its smallest argument. We can build something like that now. Write a function
// min that takes two arguments and returns their minimum.

const min = function (a, b) {
  return Math.min(a, b);
};

console.log(min(56, 42));
