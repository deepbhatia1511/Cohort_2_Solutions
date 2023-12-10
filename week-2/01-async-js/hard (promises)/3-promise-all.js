// Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
// Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
// Print how long it took for all 3 promises to resolve.



function waitOneSecond() {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve("1st function resolved after 1️⃣  Second")
      }, 1000);
   })
}

function waitTwoSecond() {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve("2nd function resolved after 2️⃣  Seconds")
      }, 2000);
   })
}

function waitThreeSecond() {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve("3rd function resolved after 3️⃣  Seconds")
      }, 3000);
   })
}

function calculateTime() {
   let startTime = Date.now()
   
   let promise1 = waitOneSecond().then((mssg) => {console.log(mssg)})
   let promise2 = waitTwoSecond().then((mssg) => {console.log(mssg)})
   let promise3 = waitThreeSecond().then((mssg) => {console.log(mssg)})
   
   return Promise.all([promise1, promise2, promise3])
   .then(() => {
      let endTime = Date.now()
      let totalTime = endTime - startTime
      console.log(`Total time taken by 3 promises🤯: ${totalTime / 1000} Seconds🚀🚀`)
   })
}

calculateTime()
