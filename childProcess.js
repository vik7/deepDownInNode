process.stdin.resume();
process.stdin.on('data', (data) => {
    try {
        console.log(data);
        let numberr = data;
        numberr += 1;
        process.stdout.write(numberr);
    }catch (err){
        process.stderr.write(err.message);
    }
});