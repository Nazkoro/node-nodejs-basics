import crypto from 'crypto'
import fs from 'fs'

const calculateHash = async () => {
    const hash = crypto.createHash('sha256');
    const stream = fs.createReadStream(new URL('./files/fileToCalculateHashFor.txt', import.meta.url));
    
    stream.on('data', (chunk) => hash.update(chunk));
    stream.on('end', () => console.log(hash.digest('hex')));
};

await calculateHash();