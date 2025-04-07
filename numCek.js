/*
6)გამოიყენეთ forEach() მეთოდი,
რომ თითოეული ელემენტის შეამოწმოთ მასივში,
 თუ მისი მნიშვნელობა არის რიცხვი. თუ არა, დაბეჭდეთ 
 "Not a number" სხვაგვარად წაიკითხეთ რიცხვი.
*/

const arr = [8, 9, "car", -5, 0]

arr.forEach(numCheck => {
	if(typeof numCheck === "number"){
    	console.log(numCheck)
    }else{
    	console.log("Not a number")
    }
})

