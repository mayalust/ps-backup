function extend(a, b){
  for(var i in b){
    a[i] = b[i];
  }
}
function global(){
  return new global.init();
};
global.init = function(){};
function setValue(attr, value){
  this[attr] = value;
}
function getValue(attr){
  return this[attr];
}
extend(global.init.prototype, {
  setValue : setValue,
  getValue : getValue
})
module.exports = new global();