
import fs from "fs"

let readStream=fs.createReadStream("input.txt")
let writeStream=fs.createWriteStream("output.txt")

readStream.pipe(writeStream)


export const upOrDown=(source,dest)=>{
    let readStream=fs.createReadStream(source)
    let writeStream=fs.createWriteStream(dest)
    try{
        readStream.pipe(writeStream)
    }catch(err){
        console.log("error on moving file");
    }
}