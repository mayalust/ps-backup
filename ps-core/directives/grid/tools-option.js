const keyPattern = str => {
  return `FREEBOARD_____VALUE_____${str}`;
};

class ToolsOption {
  constructor (type, key, options = [], config = {}) {
    this.init(type, key, config, options);
  }
  init (type, key, config, options) {
    this.type = type;
    this.key = key;
    this.config = config;
    this.options = options;
  }
  getModelValue () {
    return this[keyPattern(this.key)];
  }
  setModelValue (value) {
    this[keyPattern(this.key)] = value;
  }
  getKey () {
    return this.key;
  }
  getRenderObject () {
    return {
      type: this.type,
      'ng-model': keyPattern(this.key),
      'data-config': 'config',
      'data-options': keyPattern("options")
    };
  }
}

export default ToolsOption;