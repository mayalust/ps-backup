import {attribute} from "ps-ultility";

let isType = (type, obj) => Object.prototype.toString.call(obj) === `[object ${type}]`;

let mergeObj = function () {
  let arr = Array.prototype.slice.call(arguments);
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] || {};
    for (let key in arr[i]) {
      obj[key] = arr[i][key];
    }
  }
  return obj;
};

function resolveRelate (from, relate) {
  let ret;
  if (isType('Object', relate)) {
    ret = {};
    ret['name'] = relate.name;
    ret['from'] = relate.from || from;
    ret['to'] = relate.to || 'id';
    ret['alias'] = relate.alias;
    //ret['label'] = relate.label || 'label';
    ret['parameter'] = relate.parameter || void 0;
  } else if (isType('String', relate)) {
    ret = {
      name: relate,
      from: from,
      to: "id"
      //label: "label"
    }
  }
  return ret;
}

function resolveFormat (format) {
  let ret;
  let StringFlag = isType('String', format);
  let ObjectFlag = isType('Object', format);
  if (StringFlag) {
    ret = {};
    let arr = format.split(',');
    arr.forEach(d => {
      let tempArr = [d.substring(0, d.indexOf(':')), d.substring(d.indexOf(':') + 1)];
      ret[tempArr[0]] = tempArr[1];
    });
  }
  if (ObjectFlag) {
    ret = format;
  }
  return ret;
}

function resolveAttributes (attrs) {
  let attributes = [];

  function _loopAttributes (attr) {
    let obj = {};
    if (isType('Array', attr)) {
      obj['key'] = attr[0];
      obj['label'] = attr[1];
      obj['relate'] = resolveRelate(attr[0], attr[2]);
      obj['format'] = resolveFormat(attr[3]);
    } else if (isType('Object', attr)) {
      obj = mergeObj({}, obj, attr);
      obj['relate'] = resolveRelate(obj['key'], attr['relate']);
      obj['format'] = resolveFormat(attr['format']);
    }
    return obj;
  }

  for (let key in attrs) {
    attributes.push(_loopAttributes(attrs[key]));
  }
  return attributes;
}

function resolveSearchAttributes (search, allAttributes) {
  let ret = [];
  if (search && search.body && search.body.length > 0) {
    ret = search.body.map(d => {
      let obj = {};
      if (isType('String', d)) {
        obj = allAttributes[d];
        obj['name'] = d;
        obj['searchType'] = obj.relate ? "select" : "input";
      }
      if (isType('Object', d)) {
        obj = mergeObj(allAttributes[d.name], d);
        obj.relate = resolveRelate(obj.name, obj.relate);
        obj['searchType'] = obj.searchType ? obj.searchType : (obj.relate ? "select" : "input");
        obj['config'] = obj.config;
        if (obj.format) {
          obj['format'] = resolveFormat(obj.format);
        } else if (obj['searchType'] === 'select') {
          obj['format'] = {
            id: obj.relate ? obj.relate.to : 'id',
            label: obj.relate ? obj.relate.label : 'label'
          };
        }
      }
      return obj;
    });
  }
  return ret;
}

function buildSearchBody (searchAttributes) {
  return searchAttributes.map(d => {
    let obj = {};
    obj['key'] = d.name;
    obj['label'] = d.label;
    obj['searchType'] = d.searchType;
    obj['config'] = d.config;
    d.options ? obj['options'] = d.options : obj['options'] = d.relate && d.relate.name ? d.relate.name : [];
    obj['optionsParam'] = d.relate && d.relate.parameter ? d.relate.parameter : {};
    obj['format'] = d.format;
    obj['searchAs'] = d.searchAs;
    d.upper ? obj['upper'] = d.upper : void 0;
    obj['watch'] = d.watch;
    return obj;
  });
}

function resolveGridAttributes (grid, allAttributes) {
  let ret = [];
  if (grid && grid.body && grid.body.length > 0) {
    ret = grid.body.map(d => {
      let obj = {};
      if (isType('String', d)) {
        obj = allAttributes[d];
        obj['name'] = d;
        obj['gridType'] = "text";
      }
      if (isType('Object', d)) {
        obj = mergeObj(allAttributes[d.name], d);
        obj.relate = resolveRelate(obj.name, obj.relate);
        obj['gridType'] = obj.gridType ? obj.gridType : "text";
        if (obj.format) {
          obj['format'] = resolveFormat(obj.format);
        }
        if (d.style) {
          obj.style = d.style;
        }
      }
      return obj;
    });
  }
  return ret;
}

function buildGridBody (gridAttributes) {
  let ret = {};
  gridAttributes.forEach(d => {
    ret[d.name] = {
      label: d.label,
      gridType: d.gridType,
      format: d.format,
      relate: d.relate,
      options: d.options,
      config: d.config || {}
    }
    if (d.style) {
      ret[d.name].style = d.style;
    }
    if (d.relate || d.bind) {
      ret[d.name]['bind'] = function (row) {
        let relation;
        let relateStr = '';
        if (d.format) {
          relation = row[`_$$${d.relate.alias || d.relate.name}`]//row.__get__ && row.__get__[d.relate.alias || d.relate.name];
          if (relation) {
            relateStr += relation.map(i => {
              return i[d.format.label || 'label'];
            }).join();
          }
          return typeof d.bind === 'function' ? d.bind(row, relateStr) : relateStr;
        } else {
          relateStr = attribute(row, d.name);
          return typeof d.bind === 'function' ? d.bind(row, relateStr) : relateStr;
        }
      }
    }
  });
  return ret;
}

function resolveFromAttributes (form, allAttributes) {
  let ret = [];
  if (form.length > 0) {
    ret = form.map(d => {
      let obj = {};
      if (isType('String', d)) {
        obj = allAttributes[d];
        obj['name'] = d;
        obj['formType'] = obj.relate ? "select" : "input";
      }
      if (isType('Object', d)) {
        obj = mergeObj(allAttributes[d.name], d);
        obj.relate = resolveRelate(obj.name, obj.relate);
        obj['formType'] = obj.formType ? obj.formType : (obj.relate ? "select" : "input");
        if (obj.format) {
          obj['format'] = resolveFormat(obj.format);
        }
      }
      return obj;
    });
  }
  return ret;
}

export default {
  resolveAttributes: resolveAttributes,
  resolveSearchAttributes: resolveSearchAttributes,
  resolveGridAttributes: resolveGridAttributes,
  resolveFromAttributes: resolveFromAttributes,
  resolveRelate: resolveRelate,
  resolveFormat: resolveFormat,

  buildSearchBody: buildSearchBody,
  buildGridBody: buildGridBody,

}

