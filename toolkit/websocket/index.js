(function (global, factory) {
  if (typeof window == "undefined") {
    module.exports = factory();
  } else {
    this.webSocket = factory();
  }
})(this, function () {

})