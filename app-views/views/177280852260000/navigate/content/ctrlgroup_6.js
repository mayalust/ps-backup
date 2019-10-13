/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;
      var global = event.global;
      //   var state = ["危险告警数","警告告警数","注意告警数","点检异常数"];

      var ctrlGroups = [
        [{
          type: "jquery",
          render: function() {

            //   第一个
            var wrap1 = $("<div></div>");


            //   wrap1.css("height", "16px");
            wrap1.css("width", "100%");
            wrap1.css("justify-content", "center");
            wrap1.css("align-items", "center");
            wrap1.css("display", "-webkit-flex");
            wrap1.css("margin", "0 auto");


            var sub1 = $("<div></div>");
            sub1.css("height", "16px");
            sub1.css("width", "33px");
            sub1.css("background-color", "#d20006");
            //   sub1.css("border", "1px solid rgba(250,250,250,.3)");
            sub1.css("margin-right", "5px");

            var sub2 = $("<div></div>");
            sub2.text("危险告警数");


            var sub3 = $("<div></div>");
            //   sub1.text("危险告警数");
            sub3.css("height", "16px");
            sub3.css("width", "33px");
            sub3.css("background-color", "#ee6b1c");
            //   sub3.css("border", "1px solid rgba(250,250,250,.3)");
            sub3.css("margin-left", "10px");
            sub3.css("margin-right", "5px");
            //   sub3.css("margin","0 auto");

            var sub4 = $("<div></div>");
            sub4.text("警告告警数");


            var sub5 = $("<div></div>");
            //   sub1.text("危险告警数");
            sub5.css("height", "16px");
            sub5.css("width", "33px");
            sub5.css("background-color", "#efd80b");
            //   sub5.css("border", "1px solid rgba(250,250,250,.3)");
            sub5.css("margin-left", "10px");
            sub5.css("margin-right", "5px");
            //   sub5.css("margin","0 auto");

            var sub6 = $("<div></div>");
            sub6.text("注意告警数");


            var sub7 = $("<div></div>");
            //   sub1.text("危险告警数");
            sub7.css("height", "16px");
            sub7.css("width", "33px");
            sub7.css("background-color", "#A355F9");
            //   sub7.css("border", "1px solid rgba(250,250,250,.3)");
            sub7.css("margin-left", "10px");
            sub7.css("margin-right", "5px");
            //   sub7.css("margin","0 auto");

            var sub8 = $("<div></div>");
            sub8.text("点检异常数");





            //   sub1.css("position", "absolute");
            //   sub.css("top", "30px");
            //   sub1.css("left", "40px");
            //   sub.css("color", "#aaa");
            //   sub.css("font-size", "10px");



            wrap1.append(sub1);
            wrap1.append(sub2);
            wrap1.append(sub3);
            wrap1.append(sub4);
            wrap1.append(sub5);
            wrap1.append(sub6);
            wrap1.append(sub7);
            wrap1.append(sub8);


            return wrap1;


          }
        }]
      ];
      target.render(ctrlGroups);


    }
  }
}