//8)დაწერეთ ფუნქცია, რომელიც გამოიყენებს every() მეთოდს, რომ ამოიცნოს, თუ ყველა 
// ელემენტი მასივში არის დადებითი რიცხვი
// 9)გამოიყენეთ some() მეთოდი, რათა შეამოწმოთ, თუ მასივში არსებობს რომელიმე ნული.

const arr = [32, 33, 16, 40, 0];

console.log(arr.every(checkArr=>checkArr>=0))
console.log(arr.some(zerArr=>zerArr===0))