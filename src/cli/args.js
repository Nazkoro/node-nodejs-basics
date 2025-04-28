const parseArgs = () => {
    const arg = process.argv.slice(2)
    let result = ''
    arg.forEach((item, i) => {
        if(i % 2 === 0){
            result = result + `${item.slice(2)} is ${arg[i + 1]}, `
        }
    })
    console.log(result)
};

parseArgs();