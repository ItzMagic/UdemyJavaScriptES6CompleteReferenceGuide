function doSomething() {
    // ...
  }
  
  var doAnotherThing = function() {
    //. ..
  }
  
  console.log(doSomething.name);
  console.log(doAnotherThing.name);
  
  var doMyThing = function doMyThingAgain() {
    //... 
  }
    console.log(doMyThing.name);
  
    var person = {
      get firstName(){
        return "Abhay";
      },
      sayName: function() {
        console.log(this.name);
      }
    }
  
    console.log(person.sayName.name)
  
  var description = Object.getOwnPropertyDescriptor(person, "firstName");
  
  console.log(description.get.name);
  
  console.log(doAnotherThing.bind().name)
  