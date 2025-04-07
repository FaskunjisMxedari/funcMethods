/*
7)შექმენით ფუნქცია, რომელიც map() მეთოდით გადაუვლის სტრინგების მასივს და დააბრუნებს მათ სიგრძეს. 
მასივი შეიძლება იყოს რამე როგორიცაა: ["apple", "banana", "kiwi"].
*/


const arr = ["apple", "banana", "kiwi"]
let counter = arr.map(lngth => lngth.length)
let afinder = arr.some(find => find[0]==="a")
console.log(counter, afinder)