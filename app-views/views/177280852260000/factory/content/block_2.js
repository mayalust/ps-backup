/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;



      var workObj = target.getParameter("id");
      var filter = {
        "layer": 3,
        "modelId": 300,
        "domains": workObj
      };

      target.getDomainsByFilter(filter, function(domaintree) {

        if (domaintree[0].id == 405827723900011) {

          target.setInvisible(false);

        } else {
          target.setInvisible(true);
        }
      })

    }
  }
}