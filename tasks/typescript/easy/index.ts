// Greet a user in TS with very basic logic
function greet(name: string): string {
   
    let greeting = "Hello, " + name + "!"
    return greeting
}

let user: string = 'John Doe';

console.log(greet(user));
