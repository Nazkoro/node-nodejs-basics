import { createWriteStream } from 'node:fs';
import { pipeline } from 'stream';
const write = async () => {
    const writableStream = createWriteStream(new URL('./files/fileToWrite.txt', import.meta.url), 'utf8');

    console.log('Введите текст (для выхода Ctrl+С)');
    
         pipeline(
            process.stdin,
            writableStream,
            (err)=>{}
        );
    
};

await write();