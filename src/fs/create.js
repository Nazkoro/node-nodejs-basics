import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url';
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const freshFile = path.join(dirname, 'files','fresh.txt');



const create = async () => {
    try {
        await fs.access(freshFile)
        throw new Error('FS operation failed');
    } catch (error) {
        if (error.code === 'ENOENT') {
            await fs.writeFile(freshFile , 'I am fresh and young');
          } else {
            console.error(error.message);
          }
    }
};

await create();