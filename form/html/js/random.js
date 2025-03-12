const mypromise = new Promise((resolve,reject)=>{
const randomNum = Math.random();
if(randomNum>0.5){
    resolve("Number greater")
}else{
 reject("smaller")
}
})
mypromise
.then((value)=>{
    console.log(value)
    return"Hello world"
   
})
.then(mess=>{
    console.log(mess)
})
.catch((error)=>{
    console.log(error)
})