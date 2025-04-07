// 2) შექმენით ფუნქცია multiply, რომელიც იღებს ორი პარამეტრს და მთელ ტოპში აბრუნებს მათ ნამრავლს. 
// გადაეცით ეს ფუნქცია როგორც callback სხვა ფუნქციაში, რომელიც a და b-ის შედეგებს დააბრუნებს.



let a = 5
let b = 4

function multiply(x, y, callback){
	console.log(x,y)
  let sum = x*y
    callback(sum);
}

multiply(a,b, function(result){
	console.log(result)
})


//ქვემოთ არის ორი ვერსია, ერთი რომელიც ხელმეორედ ვცადე მექნა, მეორე რომელიც შენ დაწერე. ზემოთ 
//მოცემული დავალება არის ის თუ როგორ გავიგე მე პირობა სხვა არაფერ

/*
let a = 9 //prompt("insert number")
let b = 10//prompt("insert number")

function multiply(x,y){
	console.log(x*y)
}

function calling(x,y,callback){
	console.log(x,y)
}


calling(a,b,multiply(a,b))
*/

//შენი ვერსია

// let mult =0
// function multiply(a,b, callback){
// 	mult= a*b
//   	callback();
// }
// let a = 9 //prompt("insert number")
// let b = 10//prompt("insert number")
// multiply(a,b,function() {
// 	console.log("pausxia " + mult)
// })

