let reachA = new Promise ((resolve,reject) => {
	let reached=true
	if(reached)
		setTimeout(resolve, 28, "A reached")
	else
		reject("A Not reached")
})

let reachB = new Promise ((resolve,reject) => {
	let reached=false
	if(reached)
		setTimeout(resolve, 8, "B reached")
	else
		reject("B Not reached")
})

let reachC = new Promise ((resolve,reject) => {
	let reached=true
	if(reached)
		setTimeout(resolve, 12, "C reached")
	else
		reject("C Not reached")
})


Promise.any([reachA, reachB, reachC])
.then((message) => console.log(message))
.catch((message) => console.log(message))