define(function(){
  return [{
    name : "_userLoginUIService",
    injector : ["userLoginUIService"],
    service : function(uls){
      uls.test = function(){
         
      }
      return uls;
    }
  }]
})