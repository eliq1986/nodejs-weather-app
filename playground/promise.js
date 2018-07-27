const asyncAdd = (a , b) => {
   return new Promise((resolve, reject)=> {
        if ()

   })

}

const somePromise = new Promise((resolve, reject) => {
setTimeout(()=> {
    //resolve("Hey, it worked");
    reject("Unable to fulfill promise");
}, 2500)




})

somePromise.then((res)=> {
   console.log(res)
}, (error) => {
    console.log(error)
})
