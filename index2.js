// creating object 
let rectangle = {
    length: 1,
    breadth : 2,     //length and breadth are its properties

    draw: function() {                   //creating a draw function that prints draw
        console.log('drawing reactangle');          //function created inside an object is called method
    }
}

 // -------------------------------factory  function--------------------------------------

function createRectagle() {
        return rectangle = {
        length: 1,
        breadth : 2,                                  //function with predefined values
    
        draw: function() {                 
            console.log('drawing reactangle');  
        }  
    }
  }
  rectangle.draw();

let rectangle1 = createRectagle();

// function createRectagle(length, breadth) {
//     return rectangle = {
//     length,
//     breadth,                                  //function with self inserted values

//     draw: function() {                 
//         console.log('drawing reactangle');  
//     }  
// }
// }
// rectangle.draw();

// let rectangle1 = createRectagle(4,8);

// -------------------------------constructor function - Pascal Notation: first letter of every word is capital: NumberOfStudent ------------------------
function Rectangle(len,bre){
    this.length = len;
    this.breadth = bre;
    this.draw = function(){
        console.log('drawing');
    }
}
//object creation using constructor function
let rectangleObject = new Rectangle(4,6);

rectangleObject.color = "Yellow";
console.log(rectangleObject);

delete rectangleObject.color;
console.log(rectangleObject);

// Creating a constructor object correctly
let rectangle1 = new function() {
    this.length = 5;
    this.breadth = 3;
    this.draw = function () {
        console.log('drawing');
    };
};

console.log(rectangle1);
