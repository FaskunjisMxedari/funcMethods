/*


11)იუზერს შეამოყვანინეთ ორი პარამეტრი ასაკი და სახელი, გადაეცით ეს ორი პარამეტრი ფუნქციას რომელიც დაბეჭდავს, 
ჩემი სახელია [name], ჩემი ასაკია [age].



*/

let firstName = prompt("what is your name?")
let lastName = prompt("what is your last name?")
let age = prompt("what is your age?")

function greeting(a,b,c){
	return "my name is " + a + ", my last name is " + b + ", my age is " + c ;
}

console.log(greeting(firstName,lastName,age))