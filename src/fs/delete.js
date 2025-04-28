import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url';
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const targetFile = path.join(dirname, 'files','fileToRemove.txt');

const remove = async () => {
   try  {
    await fs.unlink(targetFile)
   } catch(error){
    throw new Error('FS operation failed')
   }
};

await remove();