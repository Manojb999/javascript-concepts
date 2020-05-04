'use strict'
//=======Intro to this keyword=============//

//"this" is the object that the function is a property of.
//Confusing statement. Isn't it?

//Lets take an object
let obj = {
    property1:'property1',
    property2:'property2',
    myFunc(){
        console.log(this);
        // {
        //     property1: 'property1',
        //     property2: 'property2',
        //     myFunc: [Function: myFunc]
        //   }
        console.log('this === obj', this === obj);
        // this === obj true


        //Now the above statement makes sense.
        //"this" is the object("obj" in our case)that the function is a property of. 

        //Now if you want to access any property of the current object inside here
        //you can do something like this
        console.log('property1 -> ',this.property1);
    }
}

obj.myFunc();

//In case of browser, initially "this" points to the global "window" object
// To check run console.log(this) in browser console.