import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url';
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const oldFileName = path.join(dirname, 'files', 'wrongFilename.txt')
const newFileName = path.join(dirname, 'files', 'properFilename.md')
const rename = async () => {
    try {
        await fs.access(newFileName)
        throw new Error('FS operation failed')
    } catch (error) {
        if(error.code === 'ENOENT'){
            try {
                await fs.access(oldFileName)
                await fs.rename(oldFileName, newFileName) 
            } catch (error) {
                throw new Error('FS operation failed')
            }
            
        }  else{
            console.error(error.message);
        }
    }
};

await rename();