// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

function counter(maxNum) {
   let i = 0
   console.log("Your timer⌚⌚ starts now..")
   setInterval(function() {
      if (i != maxNum+1) {
         console.log(i)
         i++
      } else {
         return
      }
   }, 1000);
}

counter(9)
