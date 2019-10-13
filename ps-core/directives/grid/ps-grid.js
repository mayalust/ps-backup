import PsGridPage from './ps-grid-page';
import requestUtil from './ps-grid-request';

const isType = type => {
  let _objectType = "[object ";
  return function (target) {
    return toString.call(target) == _objectType + type + "]";
  }
};
const isObject = isType("Object");
const isUndefined = isType("Undefined");
const isNull = isType("Null");
const isArray = isType("Array");
const isNullOrEmptyStringOrUndefined = val => {
  return isUndefined(val) || isNull(val) || val === '';
};
const findIndex = (arr, item) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == item) {
      return i;
    }
  }
  return -1;
};

class PsGrid {
  constructor (opt, data, gridScope) {
    this.init(opt, data, gridScope);
  }
  init (opt, data, gridScope) {
    Object.defineProperty(this, '$$INLINE_ADD_ROW', {
      enumerable: false,
      writable: true,
      value: {}
    });
    this.columns = opt.columns; // 所有列
    this.url = opt.url; // 表格数据接口url
    this.userParameter = opt.parameter;
    this.parameter = opt.parameter; // 表格数据接口的参数
    this.showSelector = opt.showSelector; // 是否显示checkbox
    this.multipleSelect = opt.multipleSelect; // 是否多选
    this.bodyButtons = opt.bodyButtons || []; // 表格的操作按钮
    this.outButtons = opt.outButtons || []; // 表格上方的操作按钮
    this.data = data || []; // 所有数据
    this.currentPageData = []; // 当前页数据
    this.pageInstance = new PsGridPage(); // 页码
    this.realPage = /WithPage$/.test(this.url); // 是否是真分页
    this.showIndex = typeof opt.showIndex === 'undefined' ? false : !!opt.showIndex;
    this.inlineEditConfirm = typeof opt.inlineEditConfirm === 'function' ? opt.inlineEditConfirm : null;
    this.inlineAddConfirm = typeof opt.inlineAddConfirm === 'function' ? opt.inlineAddConfirm : null;
    this.inlineEditCancel = typeof opt.inlineEditCancel === 'function' ? opt.inlineEditCancel : null;
    this.inlineAddCancel = typeof opt.inlineAddCancel === 'function' ? opt.inlineAddCancel : null;
    this.gridScope = gridScope;
    this.setRealPageDefaultParameter();
    this.deleteSign = 'delete';
    this.requestData();
  }
  buildRequestUrlArr () {
    let ret = [];
    ret.push({
      name: '_first',
      url: this.url,
      parameter: this.realPage ? [Object.assign({}, this.parameter, this.searchParameter), this.realPageDefaultParameter] : this.parameter
    });
    let arr = [];
    this.columns.forEach(column => {
      let relate = column.relate;
      if (relate) {
        arr.push({
          name: relate.name,
          url: relate.url,
          parameter: relate.parameter,
          dependency: {
            name: '_first',
            prev: relate.from,
            curr: relate.to
          }
        });
      }
    });
    ret.push(arr);
    return ret;
  }
  goSearch (parameter) {
    this.parameter = Object.assign({}, this.parameter, parameter);
    if (!parameter) {
      this.parameter = this.userParameter;
    }
    this.requestData();
  }
  requestData () {
    if (this.url) {
      requestUtil.request(this.buildRequestUrlArr()).then(d => {
        if (this.realPage) {
          this.data = d.data.data;
        } else {
          this.data = d.data;
        }
        this.pageInstance.setLength(typeof this.data.total === 'undefined' ? this.data.length : this.data.total);
        this.getCurrentPageData();
        this.gridScope.$apply();
        //typeof fn === 'function' && fn();
      });
    } else {
      this.pageInstance.setLength(this.data.length);
      this.getCurrentPageData();
      //typeof fn === 'function' && fn();
    }
  }
  refresh () {
    this.requestData(true);
  }
  setData (d) {
    this.data = d || [];
  }
  getData () {
    return this.data;
  }
  setSearchParameter (p = {}) {
    this.searchParameter = p;
  }
  setRealPageDefaultParameter () {
    this.realPageDefaultParameter = {
      start: this.pageInstance.getStartPoint(),
      length: this.pageInstance.getSize(),
      statCount: true
    };
    if (this.sortBy && this.sortBy.value && this.sortBy.direction) {
      this.realPageDefaultParameter.sort = this.sortBy.value;
      this.realPageDefaultParameter.sortType = this.sortBy.direction;
    }
  }
  hasButtons () {
    return isArray(this.bodyButtons) && this.bodyButtons.length > 0;
  }
  sort (head, key, fn) {
    if (this.sortBy.value != key) {
      this.sortBy.value = key;
      this.sortBy.direction = 'asc';
    } else {
      this.sortBy.direction = this.sortBy.direction === 'asc' ? 'desc' : 'asc';
    }
    this.pageInstance.moveTo(0);
    this.setRealPageDefaultParameter();
    this.requestData(this.realPage, fn);
  }
  moveTo (p, fn) {
    this.pageInstance.moveTo(p);
    this.setRealPageDefaultParameter();
    this.requestData(this.realPage, fn);
  }
  prevPage (fn) {
    this.pageInstance.prevPage();
    this.setRealPageDefaultParameter();
    this.requestData(this.realPage, fn);
  }
  nextPage (fn) {
    this.pageInstance.nextPage();
    this.setRealPageDefaultParameter();
    this.requestData(this.realPage, fn);
  }
  setPageSize (size, fn) {
    this.pageInstance.setSize(size);
    this.setRealPageDefaultParameter();
    this.requestData(this.realPage, fn);
  }
  getCurrentPageData () {
    this.currentPageData = [];
    if (!this.realPage) {
      for (let i = this.pageInstance.current * this.pageInstance.size;
           i <= (this.pageInstance.current + 1) * this.pageInstance.size - 1;
           i++) {
        if (i >= this.data.length) {
          break;
        }
        this.currentPageData.push(this.data[i]);
      }
    } else {
      this.data.forEach(d => {
        this.currentPageData.push(d);
      });
    }
    this.currentPageData = [...this.currentPageData];
    return this.currentPageData;
  }
  getSelected () {
    return this.currentPageData.filter(d => {
      return d.$$selected;
    });
  }
  addRow (r, boolean) {
    if (boolean) {
      this.data.unshift(r);
      this.currentPageData.unshift(r);
    } else {
      this.data.push(r);
      this.currentPageData.push(r);
    }
    this.pageInstance.setLength(this.pageInstance.length + 1);
  }
  deleteRow (r) {
    if (isObject(r)) {
      let dataIndex = findIndex(this.data, r);
      let currDataIndex = findIndex(this.currentPageData, r);
      if (dataIndex > -1) {
        this.data.splice(dataIndex, 1);
      }
      if (currDataIndex > -1) {
        this.currentPageData.splice(currDataIndex, 1);
      }
      this.pageInstance.setLength(this.pageInstance.length - 1);
    }
    if (isArray(r)) {
      r.forEach(item => {
        let dataIndex = findIndex(this.data, item);
        let currDataIndex = findIndex(this.currentPageData, item);
        if (dataIndex > -1) {
          this.data.splice(dataIndex, 1);
        }
        if (currDataIndex > -1) {
          this.currentPageData.splice(currDataIndex, 1);
        }
        this.pageInstance.setLength(this.pageInstance.length - 1);
      });
    }
    this.deleteSign = 'delete' + Math.uuid();
  }
}

export default PsGrid;
