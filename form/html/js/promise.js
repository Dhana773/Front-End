 const mypromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
           resolve("Hello")
    },2000)
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