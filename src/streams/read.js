import { createReadStream } from 'node:fs';

const read = async () => {
    const readStream = createReadStream(new URL('./files/fileToRead.txt', import.meta.url), 'utf8');
    readStream.pipe(process.stdout)
    readStream.on('end', () => {
      console.log('\n');
    });
};

await read();