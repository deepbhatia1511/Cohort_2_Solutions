// Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.


function wait(n) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve(`Promise resolved after ${n/1000} Seconds🥳🥳🥳`)
      }, n);
   })
}

wait(5000)
.then((mssg) => {
   console.log(mssg)
})