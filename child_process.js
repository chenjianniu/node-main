
const { exec } = require('child_process');

const child = exec('npm init egg -- --type=simple',{
  cwd: '/Users/bj89073ml/jackson/tmp',
  stdio: 'pipe',
  encoding: 'utf8',
});

child.stdout.on('data',data => {
  console.log(`data: ${data}`);
  if (data.includes('project name')){
    child.stdin.write('Alinode\n');
  }
});