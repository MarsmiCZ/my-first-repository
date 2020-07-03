console.log("JavaScript is working!");

let bookCount = 10;

for (let i = 0; i < bookCount; i++) {
    console.log(i);
}

for (let i = 1; i < bookCount+1; i++) {
    console.log(i);
}

for (let i = 0; i < 21; i++) {
    if (i === 0) {
       console.log(i);   
      }
    else if (i % 2 === 0) {
        console.log(i);
    }
}


//Functions

//Exercise 1
let printNumbersTill = (number) => {
    for (let i = 1; i < number+1; i++) {
        console.log(i);
    }
}

printNumbersTill(15);

//Exercise 2
let getGreetingTo = name => {
    return `Hello, ${name}!`;
}
getGreetingTo("Mark"); // Should not print to the console
console.log(getGreetingTo('Mark')); // Should print 'Hello Mark!'

//For loops and arrays

//Exercise 1
let printValues = (array) => {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  };

  printValues([0, 3, 6, 7, 9]);

//Exercise 2
let  printValues2 = [0, 3, 6, 7, 9];
printValues2.forEach((array) => {
      console.log(array);
  });
 
