const spawn = require('child_process').spawn;

const child = spawn('node', ['childProcess.js']);

setInterval(() => {
    const number = Math.floor(Math.random() * 10000);
    child.stdin.write(number);
    child.stdout.once('data', (data) => {
        console.log({number: data})
    });
    child.stderr.on('data', (data) => {
        process.stdout.write(data);
    });
}, 1000);