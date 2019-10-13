import resolveAttr from './resolve-attribute';
import PsGrid from './ps-grid';
import PsOperation from './ps-operation';

class PsTable {
  constructor (opt) {
    this.init(opt);
  }
  init (opt) {
    this.allAttributes = resolveAttr.resolveAttributes(opt.attributes);
    this.gridInstance = new PsGrid(opt.grid, this.allAttributes);
    this.operationInstance = new PsOperation(this.gridInstance, this.searchInstance);
    Object.defineProperties(this.operationInstance, {
      '$$tableInstance': {
        writable: false,
        enumerable: false,
        value: this
      },
      '$$searchInstance': {
        writable: false,
        enumerable: false,
        value: this.searchInstance
      },
      '$$gridInstance': {
        writable: false,
        enumerable: false,
        value: this.gridInstance
      }
    });
    Object.defineProperties(this.gridInstance, {
      '$$tableInstance': {
        writable: false,
        enumerable: false,
        value: this
      },
      '$$searchInstance': {
        writable: false,
        enumerable: false,
        value: this.searchInstance
      },
      '$$operationInstance': {
        writable: false,
        enumerable: false,
        value: this.operationInstance
      }
    });
  }
  add (data, isFirst) {
    this.gridInstance.addData(data, isFirst);
  }
}

export default PsTable;