// learn this syntax for arrow function will make your life easier in react
var reflect = value => value; // this is equivelant to the other reflect function.
var reflect = function(value) {
  return value;
}

var sum = (num1, num2) => num1+num2;
// this is equivelant to the other reflect function.
var sum = function(num1, num2) {
  return num1 + num2;
}
var getName = () => "Abhay";
var getName = function () {
    return "Abhay";
};

var doNothing = function() {};
// this is equivelant to the other reflect function.
var doNothing = () => {}

var getTempItem = id => ({id: id, name: "temp"});
// this is equivelant to the other reflect function.
var getTempItem = function(id) {
  return {
    id: id,
    name: "Temp",

  };
};


