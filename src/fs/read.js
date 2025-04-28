import {readFile} from 'node:fs/promises'
import {dirname, join} from 'node:path'
import { fileURLToPath } from 'node:url';
const fileName = fileURLToPath(import.meta.url)
const dirName = dirname(fileName)
const tagetFileName = join(dirName, 'files', 'fileToRead.txt')

const read = async () => {
    try {
        const content = await readFile(tagetFileName, 'utf-8')
        console.log(content)
    } catch (error) {
        throw new Error('FS operation failed')
    }
};

await read();