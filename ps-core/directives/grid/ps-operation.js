import resolveAttr from "./resolve-attribute";

const isType = type => {
    let _objectType = "[object ";
    return function (target) {
      return toString.call(target) == _objectType + type + "]";
    }
  },
  isUndefined = isType("Undefined"),
  isNull = isType("Null"),
  isArray = isType("Array"),
  isNullOrEmptyStringOrUndefined = val => {
    return isUndefined(val) || isNull(val) || val === '';
  };

class PsOperation {
  constructor (grid, search) {
    this.buttons = grid.buttons;
    this.search = search;
  }
}

export default PsOperation;