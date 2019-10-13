/**
 * Created by leonlin on 16/11/3.
 */
define([], function () {
  return function (data) {
    var psTopo = data.psTopo;
    return psTopo( data );
  };
});