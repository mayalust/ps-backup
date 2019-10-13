#!/usr/bin/env node
const filetree = require(`./filetree`),
  pathLib = require(`path`),
  curPath = process.cwd(),
  argvs = process.argv.slice(2),
  destination = argvs.pop() || "./dist",
  ins = filetree(pathLib.resolve(curPath, destination));
ins.on("start", (d)=>{
  console.dir(d);
})