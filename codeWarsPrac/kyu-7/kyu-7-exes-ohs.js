// Completed

function XO(str) {
  let ocount = 0;
  let xcount = 0;
  
  for(let i = 0; i < str.length; i++) {
    if (str[i] === 'o' || str[i] === 'O' ) {
      ocount++;
    } else if(str[i] === 'x' || str[i] === 'X' ) {
      xcount++;
    }
  }
  
  if ( ocount === xcount) {
    return true
  } else {
    return false
  }
}