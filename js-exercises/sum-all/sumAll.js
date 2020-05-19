function sumAll(...num) {
  var args=num[0];
  if(args[0]>args[1]){
      var temp=args[1];
      args[1]=args[0];
      args[0]=temp;
  }
    
  var sum=0;
  for(var i=args[0];i<=args[1];i++){
      sum=sum+i;
  }

  return sum;

}

export {
  sumAll,
};
