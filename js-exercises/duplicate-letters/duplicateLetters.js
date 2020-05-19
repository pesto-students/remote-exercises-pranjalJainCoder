
function duplicateLetters(...args) {

  var grtCount=0;
  var count=0;
  var str=args[0]
  for(var i=0; i<str.length;i++){
    count=1;
    for(var j=0; j<str.length;j++){
        if(i!=j){
            if(str[i]==str[j]){
              count++;
            }
        }
    }

    if(count>grtCount){
      grtCount=count;
    }
  }
  return grtCount!=1?grtCount:false;
}

export {
  duplicateLetters,
};
