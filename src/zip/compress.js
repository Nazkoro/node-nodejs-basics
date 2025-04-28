import fs from 'fs'
import zlib from 'zlib'
const compress = async () => {
    const readableStream = fs.createReadStream(new URL('./files/fileToCompress.txt', import.meta.url))
    const writeableStream = fs.createWriteStream(new URL('./files/archive.gz', import.meta.url))
    const gzip = zlib.createGzip()
    readableStream.pipe(gzip).pipe(writeableStream)
};

await compress();