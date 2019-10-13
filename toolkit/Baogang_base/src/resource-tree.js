class AjaxService {
  constructor(name) {
    this.name = name;
  }
  post(method) {

  }
}
class Ajax {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }
  service(service) {
    return new AjaxService(this.baseURL + service);
  }
}
const ajax = new Ajax;
class DevicesGetter {
  constructor() {
    this.service = ajax.service("resourceUIService");
  }
  getAll(callback) {
    this.service.post("getDeviceByCondition", {}, callback);
  }
}
class ResourceTree {
  constructor() {
    this.root = null;
    this.devicesGetter = new DevicesGetter;
  }
  init(callback) {
    this.devicesGetter.getAll(devices => {

    })
  }
}
const singletonResourceTree = () => {
  let val = null;
  return () => {
    val = val || new ResourceTree;

    return val;
  }
}
module.exports = singletonResourceTree;