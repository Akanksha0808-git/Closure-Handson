//Q1----
    function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());


//Q2---
let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?
  }
  console.log(count); // What is logged?
})();

//Q3----------------------

for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
  }
  
  ///Q5----------------------
function calculateRectangleArea(length) {
    function innerFunction(breadth) {
      return length * breadth;
    }
  
    return innerFunction;
  }
  
  // output// 
  const RectangleArea = calculateRectangleArea(9); // Outer function is called with the length parameter
  const Area = RectangleArea(15); // Inner function is called with the breadth parameter
  console.log(Area);


  //Q6--------
  function counters() {
    let link = 0;
  
    function increaseCounter() {
      link++;
      console.log(`Counter increased: ${link}`);
    }
  
    return increaseCounter;
  }
  
  // Create an instance of the counter function
  const myCounters = counters();
  
  // Call the inner function multiple times to increase the counter
  myCounters(); // Counter increased: 1
  myCounters(); // Counter increased: 2
  myCounters(); // Counter increased: 3
  

  //Q7----------
  var a = 10;
  var x = (function () {
    var a = 12;
    return function () {
      alert(a);
    };
  })();
  x();
  
  //Q8----------

  var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);



// let B=20;
// function Abc(){
//     let a=10;
//     function Pqr(){
//         console.log(a);
//     }Pqr()
// }
// Abc();


// ///Q3--------------------
// let Count = 0;
// (function () {
//   if (Count === 0) {
//     let Count = 1;
//     console.log(Count); // What is logged?
//   }
//   console.log(Count); // What is logged?
// })();





// function Animal(name){
//     this.name=name}
//     Animal.prototype.intro=function(){
//         console.log("hello my name is"+this.name)
//     }
//     function dog(name,breed){
//         Animal.call(this,name)
//         this.breed=breed
//     }
    
//     dog.prototype=Object.create(Animal.prototype)
//      dog.prototype.breed=function(){
//         console.log("i am froom breed"+this.breed)
//      }
    
//     var animal = new Animal("mad")
//     console.log(animal)
//       var doggy = new dog("jackie","labrador")
//     console.log(doggy)


//     let b=20;
// function Abc(){
//     let a=10;
//     function Pqr(){
//         console.log(a);
//     }Pqr()
// }
// Abc()


// let count = 0;
// (function () {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged?
//   }
//   console.log(count); // What is logged?
// })();
// for (var i = 0; i < 3; i++) {
//   setTimeout(function log() {
//     console.log(i); // What is logged?
//   }, 1000);
// }
// function calculateRectangleArea(length) {
//     function innerFunction(breadth) {
//       return length * breadth;
//     }
  
//     return innerFunction;
//   }
  
//   // output// 
//   const rectangleArea = calculateRectangleArea(9); // Outer function is called with the length parameter
//   const area = rectangleArea(15); // Inner function is called with the breadth parameter
//   console.log(area);

// function Animal(name){
//     this.name=name}
//     Animal.prototype.intro=function(){
//         console.log("hello my name is"+this.name)
//     }
//     function dog(name,breed){
//         Animal.call(this,name)
//         this.breed=breed
//     }
    
//     dog.prototype=Object.create(Animal.prototype)
//      dog.prototype.breed=function(){
//         console.log("i am froom breed"+this.breed)
//     }
    
//     var animal = new Animal("mad")
//     console.log(animal)
//       var doggy = new dog("jackie","labrador")
//     console.log(doggy)





// // parent constructor 
// function Animal(name){
//     this.name=name;
// }
// //this  will create a function in parent constructor 
// Animal.prototype.intro= function (){
//     console.log("hello my name is "+this.name)
// }
// //child constructor 
// function Dog (name,breed){
//     Animal.call(this,name)
//     this.breed=breed
// }
// // inherit the prototype from parent
// Dog.prototype=Object.create(Animal.prototype)

// Dog.prototype.intro2 =function (){
//     console.log("i am a "+this.breed)
// }
// //making a parent object
// var animal =new Animal("Max")
// console.log(animal)
// animal.intro()
// // making a child object
// var dog= new Dog("Pluto","labrador")
// console.log(dog)
// dog.intro()
// dog.intro2()
