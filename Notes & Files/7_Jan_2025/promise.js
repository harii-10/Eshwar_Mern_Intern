let thatkal_booking = new Promise ((resolve, reject) =>{
	let booking = true
	if(booking)
		resolve(2000)
	else
		reject()
})

thatkal_booking.then ((amt)=>console.log(`Okayy kaas vanthuruchu ${amt} 😊👍🏼`))
.catch(()=>console.log("Kaas varala 😭😭"))



// function success(){
// 	console.log("Nandri Bro, Kass anupuree 😊👍🏼")
// }
// function failure(){
// 	console.log("😭😭😭")
// }
