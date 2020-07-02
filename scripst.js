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
    console.log('Hello, ${name}!');
}
getGreetingTo("Mark");

//For loops and arrays

//Exercise 1


//Exercise 2


