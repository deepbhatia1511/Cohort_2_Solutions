// Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
// Write a function that sequentially calls all 3 of these functions in order.
// Print out the time it takes to complete the entire operation.
// Compare it with the results from 3-promise-all.js


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
   
   // Promise Chaining...
   waitOneSecond()
   .then((mssg) => {
      console.log(mssg)
      return waitTwoSecond()
   })
   .then((mssg) => {
      console.log(mssg)
      return waitThreeSecond()
   })
   .then((mssg) => {
      console.log(mssg)
   })
   .then(() => {
      let endTime = Date.now()
      let totalTime = endTime - startTime
      console.log(`Total time taken by 3 promises🤯: ${totalTime / 1000} Seconds🚀🚀`)
   })
}

calculateTime()
