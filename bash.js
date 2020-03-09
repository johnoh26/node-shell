const pwd = require('./pwd');
const ls = require('./ls');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    if (cmd !== 'pwd' && cmd !== 'ls') {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt >');
    } else if (cmd === 'pwd') {
        pwd();

    } else if (cmd === 'ls') {
        ls();
        console.log(ls);
    }
});

