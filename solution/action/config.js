define({
  "facility" : {
    "options" : [{
      "label" : "新增加",
      "url" : function(e){
        return "emcsView/" + e.id;
      },
      "filter" : function(e){
        return e.label.length < 3
      }
    }]
  }
})