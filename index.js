// Write your solution here!

const pet = ["Milo", "Otis", "Garfield"];
const append = [...pet];
const prepend = [...pet];
const removeLast = [...pet];
const removeFirst = [...pet];

append.push("Odie");
prepend.unshift("Odie");
removeFirst.shift();
removeLast.pop();
