let a=parseInt(prompt("Enter a num1"))
let b=parseInt(prompt("Enter a num2"))
let c=parseInt(prompt("Enter a num3"))

let number1=new Promise((resolve,reject)=>{
	if(a){
		resolve(a)
	}
	else{
		reject(`error`)
	}
})

let number2=new Promise((resolve,reject)=>{
	if(b){
		resolve(b)
	}
	else{
		reject(`error`)
	}
})

let number3=new Promise((resolve,reject)=>{
	if(c){
		resolve(c)
	}
	else{
		reject(`error`)
	}
})

Promise.all([number1,number2,number3]).then((sum)=>{
	let c=0;
	sum.forEach((e)=>{
		c=c+e;
	})
console.log(`sum=${c}`)
	let d=c/3;
console.log(`average=${d}`);
}).catch((sum)=>{
	console.log(sum)
})