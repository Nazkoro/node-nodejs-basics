import {readdir} from 'node:fs/promises'
import {dirname, join} from 'node:path'
import { fileURLToPath } from 'node:url';
const fileName = fileURLToPath(import.meta.url)
const dirName = dirname(fileName)
const tagetDirName = join(dirName, 'files')



const list = async () => {
    try {
        const files = await readdir(tagetDirName)
        console.log("files",files)
    } catch (error) {
        throw new Error('FS operation failed')
    }
};

await list();