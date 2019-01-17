let msg = "Hello World!";

console.log(msg.startsWith("Hello"));
console.log(msg.endsWith("!"));
console.log(msg.includes("o"));


console.log("4 - " + msg.startsWith("o"));
console.log("5 - " + msg.endsWith("World"));
console.log("6 - " + msg.includes("x"));

console.log("7 - " + msg.startsWith("o", 4));
console.log("8 - " + msg.endsWith("o", 8));
console.log("9 - " + msg.includes("o", 7));



console.log("x".repeat(3)); 