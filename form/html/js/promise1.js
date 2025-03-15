// function fetchUserData(){
//     return new Promise((resolve) =>{
//       setTimeout(() => resolve('User data recevied'),1000);
//     });

// }
// function fetchPosts(){
//     return new Promise((resolve) =>{
//       setTimeout(() => resolve('Posts data recevied'),500);
//     });

// }


fetchUserData()
   .then((userData) => {
    console.log(userData);
    return fetch.Posts();
   })
   .then((postsDataMess) =>{
    console.log(postsData);
   })
   .catch((error)=>{
    console.log(error);
   })

async function asyncFunction() {
    try{
        let data = await fetchUserData()
        console.log(fetchUserData)
    }catch(error){
        console.log(error)
    }
}
asyncFunction()
