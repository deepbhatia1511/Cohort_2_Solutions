// Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
// During this time the thread should not be able to do anything else.


function sleep (milliSeconds) {
   console.log("Inside Sleep fx💤💤💤")
   let interval = milliSeconds/1000
   let startTime = new Date().getSeconds()
   for(; new Date().getSeconds() - startTime < interval; ) {
   }
   console.log(`Message printed after ${milliSeconds / 1000} Seconds⌚⌚`)
}

sleep(4000)
console.log("Person wokeup from sleep😯😯")
