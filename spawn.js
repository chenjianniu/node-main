const { spawn } = require('child_process');

async function setStdMsg({
  cwd,
  command,
  objectMap,
}) {
  return new Promise((resolve, rejects) => {
    const args = command.split(/\s+/);
    const child = spawn(args.shift(), args, {
      cwd,
      stdio: 'pipe',
    });
    child.stdout.setEncoding('utf8');
    child.stdout.on('data', data => {
      if (data.includes('?')) {
        for (const obj of objectMap) {
          if (data.includes(obj[0])) {
            if (obj[1]) {
              child.stdin.write(`${obj[1]}\n`);
            } else {
              child.stdin.write('\n');
            }
            objectMap.delete(obj[0]);
          }
        }
      }
    });
    child.on('exit', () => resolve(child));
    child.on('error', error => rejects(error));
    child.stderr.on('data', error => rejects(error));
  });
}

async function main(){
  await setStdMsg({
    cwd: '/Users/bj89073ml/jackson/tmp',
    command: 'npm init egg -- --type=simple',
    objectMap:  new Map([
      ['project name', 'Alinode'],
      ['project description', 'build for test'],
      ['project author', 'zhangsan'],
      ['cookie security keys'],
    ]),
  });
}

main();