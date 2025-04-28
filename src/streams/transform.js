import { pipeline, Transform } from 'stream';

const transform = async () => {

    const transform = new Transform({
        transform(chunk, _, cb) {
          const result = chunk.toString().split('').reverse().join('');
          cb(null, result + '\n');
        }
      });

      console.log('Введите текст (для выхода Ctrl+С)');

       pipeline(
        process.stdin,
        transform,
        process.stdout,
        (err)=>{}
      );
};

await transform();