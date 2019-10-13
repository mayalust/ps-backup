function stringify( str ){
  let a;
  try{
    a = JSON.stringify(str);
  } catch(e){
    throw new Error( e );
    return;
  }
  return a;
}
function parse( str ){
  let rs;
  try {
    rs = JSON.parse( str );
  } catch( e ) {
    return;
  }
  return rs;
}
class FakeApi{
  constructor( app ){
    this.app = app;
    this.basename = "/api/mock/post/";
  }
  post( path, fn ){
    this.app.post(this.basename + path.split(".").join("/"), (req, res) => {
      let str = "";
      req.on("data", d => {
        str += d;
      });
      req.on("end", () => {
        let params = parse( str ),
          next = function( d ){
            let a = stringify({
              code : 0,
              data : d,
              message : null
            });
            res.setHeader("Content-Type", "text/plain;charset=utf-8");
            if( a ){
              res.write( a );
              res.end();
            }
            next = function(){
              console.error("process already finished, next function will not be executed twice");
            }
          }, rs = fn( params, next );
        if(typeof rs !== "undefined"){
          next( rs );
        }
      })
    });
  }
}
module.exports = FakeApi;