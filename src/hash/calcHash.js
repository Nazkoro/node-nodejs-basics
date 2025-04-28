import crypto from 'crypto'
import fs from 'fs'

const calculateHash = async () => {
    try {
        const data =  fs.readFileSync(new URL('./files/fileToCalculateHashFor.txt', import.meta.url))
        console.log(crypto.createHash('sha256').update(data).digest('hex'))
    } catch (error) {
        console.log(error)
    }
   
};

await calculateHash();