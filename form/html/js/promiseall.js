// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(resolve("First"),1000);
// })
// let p2 = new Promise((resolve,reject)=>{
//     setTimeout(resolve("second"),2000);
// })
// let p3 = new Promise((resolve,reject)=>{
//     setTimeout(resolve("third"),3000);
// })
// Promise.all([p1,p2,p3])
// .then((value)=>{
//     console.log(value)
// })
// .catch((error)=>{
//     console.log(error)
// })

// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(reject("First"),1000);
// })
// let p2 = new Promise((resolve,reject)=>{
//     setTimeout(reject("second"),2000);
// })
// let p3 = new Promise((resolve,reject)=>{
//     setTimeout(reject("third"),3000);
//    })
// Promise.allSettled([p1,p2,p3])
// .then((value)=>{
//     console.log(value)
// })
// .catch((error)=>{
//     console.log(error)
// })

//  Promise.any([p1,p2,p3])
// .then((value)=>{
//     console.log(value)
//  })
//  .catch((error)=>{
//     console.log(error)
//  })

// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(reject("First"),1000);
// })
// let p2 = new Promise((resolve,reject)=>{
//     setTimeout(resolve("second"),2000);
// })
// let p3 = new Promise((resolve,reject)=>{
//     setTimeout(resolve("third"),3000);
// })
// Promise.any([p1,p2,p3])
// .then((value)=>{
//     console.log(value)
//  })
//  .catch((error)=>{
//     console.log(error)
//  })


let p1 = new Promise((resolve,reject)=>{
    setTimeout(reject("First"),1000);
})
let p2 = new Promise((resolve,reject)=>{
    setTimeout(resolve("second"),2000);
})
let p3 = new Promise((resolve,reject)=>{
    setTimeout(reject("third"),3000);
})
Promise.race([p1,p2,p3])
.then((value)=>{
    console.log(value)
 })
 .catch((error)=>{
    console.log(error)
 })

