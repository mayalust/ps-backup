/** 仪表板 : [ 我的首页[审核工作员-1级] ] - 542599013416093 **/
module.exports = {
  on: {
    repeat: function(event) {
      var target = event.target;
      var data = target.$repeatData;
      var css = data.css;
      target.setCss(css);
    },
    click: function(event) {
      var target = event.target;
      var data = target.$repeatData;
      if (data.index == 0) {
        $(".row.block").scrollTop(0);
        $(".table.dataTable:last > tbody > tr:first").removeClass("rowSelected");
        $(".table.dataTable:first > tbody > tr:first").addClass("rowSelected");
      } else if (data.index == 1) {
        $(".row.block").scrollTop($('#two').offset().top);
        $(".table.dataTable:last > tbody > tr:first").addClass("rowSelected");
        $(".table.dataTable:first > tbody > tr:first").removeClass("rowSelected");
      }
    }
  }
}