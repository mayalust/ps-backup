import axios from 'axios';

const generateUrl = url => {
  let baseUrl = window.location.origin;
  let u = url.replace(/\./g, '/');
  return `${baseUrl}/api/rest/post/${u}`;
};

const defineUnenuerableAndUnwriteableProperty = (object, property, value) => {
  Object.defineProperty(object, property, {
    enumerable: false,
    writable: false,
    value: value
  });
};

const doResolveData = (resourceData, conditionData, item) => {
  defineUnenuerableAndUnwriteableProperty(conditionData, '_$$' + item.name, resourceData.filter(o => {
    if (Array.isArray(item.dependency.prev)) {
      let flag = true;
      item.dependency.prev.forEach((j, ind) => {
        if (j.indexOf('_$$') === 0) {
          flag = flag && o[item.dependency.curr[ind]] === j.split('_$$')[1];
        } else {
          flag = flag && o[item.dependency.curr[ind]] === conditionData[j];
        }
      });
      return flag;
    } else {
      if (Array.isArray(conditionData[item.dependency.prev]) && conditionData[item.dependency.prev].indexOf(o[item.dependency.curr]) > -1) {
        return true;
      }
      return o[item.dependency.curr] === conditionData[item.dependency.prev];
    }
  }));
};

const createWorkPromise = (arr, prevRequestRet) => {
  let prevRequestRetData = [];
  if (prevRequestRet.data || prevRequestRet.total) {
    prevRequestRetData = prevRequestRet.data || [];
    prevRequestRetData.total = prevRequestRet.total;
  } else {
    prevRequestRetData = prevRequestRet;
  }
  return arr.map(h => {
    return new Promise(resolve => {
      let par = typeof h.parameter === 'function' ? (function (aItem) {
        return aItem.parameter(prevRequestRetData);
      })(h) : h.parameter;
      axios.post(generateUrl(h.url), par).then(obj => {
        defineUnenuerableAndUnwriteableProperty(obj.data.data, '$$prevName', h.name);
        // prevRequestRet: 上一次请求的结果
        prevRequestRetData.forEach(prevRequestItem => {
          if (Array.isArray(prevRequestItem)) {
            if (prevRequestItem.$$prevName === h.dependency.name) {
              prevRequestItem.forEach(m => {
                doResolveData(obj.data.data, m, h);
              });
            }
          } else {
            doResolveData(obj.data.data, prevRequestItem, h);
          }
        });
        resolve(obj.data);
      });
    });
  });
};

const request = (arr) => {
  let pipePromise;
  let promise = new Promise(resolve => {
    axios.post(generateUrl(arr[0].url), arr[0].parameter).then(d => {
      let newRequestArr = arr.slice(1);
      pipePromise = Promise.resolve(d.data);
      newRequestArr.forEach(n => {
        pipePromise = pipePromise.then(ret => {
          return Promise.all(createWorkPromise(n, ret.data));
        });
      });
      pipePromise.then(() => {
        resolve(d.data);
      });
    });
  });
  return promise;
};

export default {
  request: request
};
