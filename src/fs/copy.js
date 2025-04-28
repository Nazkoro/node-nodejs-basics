import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url';
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const tagetSourceDirName = path.join(dirname, 'files');
const tagetDistDirName = path.join(dirname, 'files_copy');

const copy = async () => {
    try {
        await fs.access(tagetSourceDirName)
        await fs.cp(tagetSourceDirName, tagetDistDirName, {recursive: true  , errorOnExist: true, force: false})
       
    } catch (error) {
        throw new Error('FS operation failed')
    }
};

await copy();
