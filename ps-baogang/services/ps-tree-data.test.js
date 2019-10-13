/**** test case 1: *****/


function recursive( arr, callback ){
  let createItem = ( node, index, level, parent, parentlist ) => {
      return {
        node,
        index,
        level,
        parent,
        parentlist
      }
    },
    queue = arr.map(( d, i ) => {
      return createItem( d, i, 0, null, arr)
    }), item;
  while( item = queue.shift()){
    let { node, index, level, parent, parentlist } = item,
      children = node.children || [];
    callback( node, index, level, parent, parentlist );
    [].push.apply(queue, children.map(( d, i ) => {
      return createItem( d, i, item.level + 1, node, children )
    }));
  }
}
let item = [{
  id : 1,
  children : [{
    id : 2
  }]
}]
recursive( item, ( n,i,l,p,pl) => {
   
})


/**** test case 2: *****/

function insertMethod( a, b ){
  let num1 = ( a.values && a.values.number ) + "" - 0,
    num2 = ( b.values && b.values.number ) + "" - 0,
    title1 = format(a.label),
    title2 = format(b.label);
  function addZero( num ) {
    let rs = "";
    for(let i = 0; i < ( 9 - num.length ); i++ ){
      rs += "0";
    }
    return rs + num;
  }
  function format( str ){
    let rs = "", match;
    while( match = /\d+/.exec( str )){
      rs += str.slice( 0, match.index ) + addZero( match[0] );
      str = str.slice( match.index + match[0].length )
    }
    return rs + str;
  }
  if( num1 === num1 || num2 === num2 ) {
    num1 = num1 === num1 ? num1 : 1/0;
    num2 = num2 === num2 ? num2 : 1/0;
    return num1 < num2 ? -1 : 1;
  }
  return title1 < title2 ? -1 : 1;
}

let arr = [{
  label : "abc13bbb31"
},{
  label : "abc13bbb3"
}]
arr.sort( insertMethod );
 