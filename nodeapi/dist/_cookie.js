var _splitter = "; ";
function extend(a, b){
  for(var i in b){
    a[i] = b[i];
  }
}
function cookie(str){
  return new cookie.init(str);
};
cookie.init = function(str){
  str = str || "";
  console.assert(typeof str == "string", typeof str + "is not allowed");
  var attrs = str.split(_splitter)
  attrs = attrs.filter(function(e){
    if(!e) return false;
    return e != "undefined"
  });
  for(var i in attrs){
    var equal = attrs[i];
    var e = equal.split("=");
    var attr = e[0];
    var value = e[1];
    this[attr] = value;
  }
  console.dir(this);
}
function getValue(attr){
  return this[attr];
}

function setValue(attr, value){
  if(value){
    this[attr] = value;
  };
}
function toString(){
  var str = "";
  for(var i in this){
    if(i){
      str += _splitter;
    }
    str += i + "=" + this[i]
  }
  return str;
}
extend(cookie.init.prototype, {
  setValue : setValue,
  getValue : getValue,
  toString : toString
});
for(var i in cookie.init.prototype){
  console.log(i)
  Object.defineProperty(cookie.init.prototype, i, {
    enumerable : false
  })
}
module.exports = cookie;