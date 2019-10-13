/** script npm run filetree ./dist */

const filetree = require(`./dist/filetree`),
  pathLib = require(`path`),
  curPath = process.cwd(),
  ins = filetree(pathLib.resolve(curPath, `./dist`));
ins.on(`start`, (d)=>{
  console.dir(d);
});