// ## Write to a file

// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

import { writeFile } from "fs"

function fileWriter(filePath) {
   writeFile(filePath, "Today is a very Sunny day🌻😎😎", "utf-8", (error, data) => {
      console.log("file modified succesfully!💯👍")
   })
}

fileWriter("index-easy.txt")
