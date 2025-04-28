import fs from 'fs';
import zlib from 'zlib';
const decompress = async () => {
    const readableStream = fs.createReadStream( new URL('./files/archive.gz', import.meta.url));
    const writeableStream = fs.createWriteStream(new URL('./files/fileToCompress.txt', import.meta.url));
    const gunzip = zlib.createGunzip();
    readableStream.pipe(gunzip).pipe(writeableStream);
};

await decompress();