const { exec } = require('child_process');

async function setStdMsg({
  cwd,
  command,
  objectMap,
}) {
  return new Promise(resolve => {
    const child = exec(command, {
      cwd,
      stdio: 'pipe',
      encoding: 'utf8',
    });
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
  });
}

async function main(){
  await setStdMsg({
    cwd: '/Users/bj89073ml/jackson/tmp',
    command: 'npm init bybit-egg --registry=https://npm.ffe390afd658c19dcbf707e0597b846d.de -- --package=@bynode/bybit-bff-boilerplate',
    objectMap:  new Map([
      ['project name', 'Alinode'],
      ['project description', 'build for test'],
      ['project author', 'zhangsan'],
      ['cookie security keys'],
    ]),
  });
}

main();