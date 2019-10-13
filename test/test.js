const { TreeNode } = require("../ps-vue-baogang/src/tools/utils.js"),
  getId = ({ value: { id } }) => {
    return id;
  };
require("chai");
let ins = new TreeNode([{
  id: 0,
  value: "a",
  children: [{
    id: 1,
    value: "b",
    children: [{
      id: 3,
      value: "d"
    }, {
      id: 2,
      value: "c"
    }]
  }]
}], (a, b) => {
  return a.id - b.id;
});
let a = ins.search((node, parents, item) => {
  return node.id == 2;
});
console.log(ins.data[0].firsts.map(getId).join(","));