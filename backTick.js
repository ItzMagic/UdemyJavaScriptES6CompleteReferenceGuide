var message = `Hello World`;

console.log(message);
console.log(typeof message);
console.log(message.length);

message = `\`Hello\`World!`;

console.log(message);
console.log(typeof message);
console.log(message.length);

message = `multiline
      string`;

console.log(message);
// the white space is accounted for in the back ticks
console.log(message.length);


var html = `
<div>
  <h1>Hello</h1>
</div>`.trim();


console.log(html);

var name = "Abhay",
  message = `Hello, ${name}`;

  console.log(message);

var count = 10,
    price = 0.25,
    message = `${count} items cost $${(count * price).toFixed(2)}`;


console.log(message);

var name = "Abhay",
    message = `Hello, ${
      `my name is ${name}`
      }.`;


      console.log(message);