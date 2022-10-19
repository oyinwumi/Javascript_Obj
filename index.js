//I want you to create an address object with three properties, street, city, and zip code using the object literal syntax. When you do that, then create a function called showAddress that takes an address object and displays all the properties of this object along with their value.
console.log('qestion 1')
 let address = {
    street : 'Bembo',
    city : 'Ibadan',
   zipCode : 211098,
 }
 function showAddress () {
    return address ;
 }
 console.log(showAddress (address));

//  I want you to initialize an address object, first using a factory function and then using a constructor function. So your exercise is to write two different functions, one is a factory function, the other is a constructor function, to initialize an address object. 

// factory function
console.log('qestion 2')
function address1 (street, city , zipCode){
    return {
     street ,
    city ,
    zipCode , 
    showAddress(){
        console.log(showAddress)
        // return this.street + ' ' + this.city + ' ' +this. zipCode;
    } 
    }
   
}

let  addresses1 =  address1('Peace Road' , 'Lagos' , 289110);
console.log(addresses1);
// console.log( addresses1.showAddress());

// constructor function
function Address2 (street, city , zipCode){
    this.street = street;
    this.city = city;
    this. zipCode = zipCode;
    this.showAddress = function (){
        console.log(showAddress)
        // return this.street + ' ' + this.city + ' ' +this. zipCode; 
    }
    return this
}

// console.log(Addresses2);
// console.log(Addresses2.city)

console.log('qestion 3')
const Addresses2 = new Address2('Aladun Ave', 'oyo' , 200112)
const Addresses3 = new Address2('Ajoke Ave', 'osun' , 233112)

function areEqual (a, b){

    console.log(Object.keys( Addresses2))
    
    console.log(Object.keys( Addresses3))
    return JSON.stringify(Object.keys(Addresses2)) === JSON.stringify(Object.keys(Addresses3))
    // return false
    
}

console.log(areEqual (Addresses2, Addresses3));

function areSame (a, b){
    console.log(Addresses2)
    console.log(Addresses3)
 return   Addresses2 === Addresses3 ? true: false

}
areSame (Addresses2, Addresses3)

// I want you to create a blog post object with these properties. title, body, author, views, which represents the number of times this post has been viewed. Comments, now each comment should have a couple properties, author and body. And finally, another property, that each post should have is isLive. Now that can be either true or false. So once again you should use the object literal syntax to create and initialize a blog post. Give each property some value, the actual value doesn't really matter. I just want you to get comfortable with the object literal syntax.

console.log('qestion 4')
let blogPost = {
    title : "Anikulapo",
    body :  "A recent noolywood movie",
    author : "Kunle Afolayan",
    views : 19000,
    comment : [
        {
            body :  "very interesting",
            author : "Sumbo",  
        },
        {
            body :  "waooo",
            author : "Oyin",  
        },
    ],
   isLive :true
}
console.log(blogPost)

for(let key in blogPost)
console.log(key)
// for(let key in Object.keys (blogPost))
// console.log(key)

//For each of the exercises below, assume you are starting with the following programming object.
// let programming = {
//     languages: ["JavaScript", "Python", "Ruby"],
//     isChallenging: true,
//     isRewarding: true,
//     difficulty: 8,
//     jokes:"http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
// };

// Write the command to add the language "Go" to the end of the languages array.
// Change the difficulty to the value of 7.
// Using the delete keyword, write the command to remove the jokes key from the programming object.
// Write the command to add a new key called isFun and a value of true to the programming object.
// Using a loop, iterate through the languages array and console.log all of the languages.
// Using a loop, console.log all of the keys in the programming object.
// Using a loop, console.log all of the values in the programming object.


console.log('qestion 5')
function questions1 (){
    let programming = {
        languages: ["JavaScript", "Python", "Ruby"],
        isChallenging: true,
        isRewarding: true,
        difficulty: 8,
        jokes:"http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
    };

programming.languages.push('Go')
programming.difficulty = 7
delete programming.jokes
programming.isFun = true 
console.log(1)
for(let key of programming.languages){
    console.log(key)
}
console.log(2)
for (let key of Object.keys(programming)){
    console.log(key)
}
console.log(3)
for (let key in programming){
    console.log(programming[key])
}
console.log(programming) 
}
questions1 ()