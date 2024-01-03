const myArray =[ 376,"hello,", true,console.log ];

console.log(myArray);


const fruits= ['Apple' ,'orange', 'Banana','pineapple', 'lichi','mango'];

console.log(fruits);
//indexing

console.log(fruits[4]);
console.log(fruits[1]);

console.log(fruits.at(-3));

//slicing

console.log(fruits.slice(1,4));
console.log(fruits.slice(1,-2));
console.log(fruits.slice(1));
console.log(fruits.slice(1,50));
console.log(fruits.slice());

//adding elements to aaray
console.log("\n----------------\n");
console.log(fruits);
fruits.push('guava');  //aads elemnets at the end
fruits.unshift('cherry') //adds element at the beginning
console.log(fruits);

//removing elements from the end
fruits.pop(); //remove element from at the end
fruits.shift(); //remove element from the beginning
console.log(fruits);

//fruits.splice(1,2);   this will only remove elements
//fruits.splice(1,2,'strawberry', 'dragon','kiwi')  this will remove a 
fruits.splice(1,0,'strawberry', 'dragon','kiwi'); // this will insert element
console.log(fruits);   




