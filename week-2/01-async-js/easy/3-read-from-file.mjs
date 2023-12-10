// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

import { readFile } from "fs"

function fileReader(filePath) {
   readFile(filePath, "utf-8", (error, data) => {
      console.log(data)
      console.log("your file has been read💯🔥🔥")
   })
}


let num = 0
console.log("now entering an expensive loop😨😨..")
for(let i=1; i<=10000000000; i++) {
   num = num + i
}
console.log(num)


fileReader("index-easy.txt")
