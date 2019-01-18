/*Exercises for Practice: (optional)
Exercise 1:

Create a new String with the text “Join the ‘Happy Learning’ Team in slack”

Check if the string starts with “Join”?
Check if the string starts with “Happy”?
Check if the string ends with “Learning” ?
Check if the string ends with “slack” ?
Check if the string includes “Join Now” ?
Check if the string includes “Happy Learning”?
Check if the string starts with “Happy” starting with position 10?
Check if the string ends with “Learning” starting with position 10?
Check if the string includes “Happy Learning” starting with position 4?
*/
const string = `Join the 'Happy Learning' Team in slack`

string.startsWith('Join');
string.startsWith('Happy');
string.endsWith('Learning');
string.endsWith('slack');
string.includes('Join Now');
string.includes('Happy Learning');
string.startsWith('Happy', 10);
string.includes('Happy Learning', 10);





/*
Exercise 2:

Create a text output as “Hello…How..are…you..you….you???” using the repeat() method. You can create and use these constants.

<em>const hello = “Hello”;
 const how = “How”
 const dot = “.”;
 const are = “are”;
 const you = “you”;
 const question = “?”;</em>

*/



const hello = `Hello`;
const how = `How`;
const dot = `.`;
const are = `are`;
const you = `you`;
const question = `?`;


let output = hello + dot.repeat(3) + how + dot.repeat(2) + are + dot.repeat(3) + you + dot.repeat(2) + you + dot.repeat(3) + you + question ;


console.log(output)