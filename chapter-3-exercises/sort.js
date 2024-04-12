// Write a function to sort an array containing strings alphabetically 🙂

function sortedNames(arr) {
  // return arr.sort();
  return arr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
}

console.log(sortedNames(["mary", "Ernest", "david"]));
