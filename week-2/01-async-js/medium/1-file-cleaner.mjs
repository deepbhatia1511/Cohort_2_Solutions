// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// hello     world    my    name   is       raman

// After the program runs, the output should be
// hello world my name is raman

import { readFile, writeFile } from "fs"
let filePath = "index-medium.txt"

function fileReader(filePath) {
   return new Promise((resolve, reject) => {
      readFile(filePath, "utf-8", (error, data) => {
         console.log(data)
         console.log("🙏🙏Namaste Raman🙏🙏")
         resolve(data)
      })
   })
}

let modifiedSentence = ""
fileReader(filePath)
.then(function (sentence) {
   console.log("Yo😉😉 Let us remove spaces from ur line!!")
   modifiedSentence = sentence.split(/\s+/).filter(word => word !== '').join(' ')
   console.log(modifiedSentence)
   return modifiedSentence
})
.then(function fileWriter(modifiedSentence) {
   return new Promise((resolve, reject) => {
      writeFile(filePath, modifiedSentence, "utf-8", (error, data) => {
         console.log("File is modified!💯👍")
         resolve(data)
      })
   })
})
