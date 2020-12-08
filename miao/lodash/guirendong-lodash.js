var guirendong={
  chunk:function(ary,size){
    var result=[];
    var temp=[];
    for(var i=0;i<ary.length;i++){
      temp.push(ary[i]);
      if((i+1)%size==0||i==ary.length-1){
        result.push(temp);
        temp=[];
      }
    }
    return result;
  },
  compact:function(ary){
    var result=[];
    for(var i=0;i<ary.length;i++){
      if(ary[i]){
        result.push(ary[i]);
      }
    }
    return result;
  },
  concat:function(){
    var result=[];
    for(var i=0;i<arguments.length;i++){
      if(arguments[i] instanceof Array){
        for(var j=0;j<arguments[i].length;j++){
          result.push(arguments[i][j]);
        }
      }else if(arguments[i] instanceof Object){
        for(var key in arguments[i]){
          result.push(arguments[i][key]);
        }
      }else{
        result.push(arguments[i]);
      }
    }
    return result;
  },
  sort:function(ary){
    for(var i=0;i<ary.length;i++){
      for(var j=i+1;j<ary.length;j++){
        if(ary[i]>ary[j]){
          var min=ary[i];
          ary[i]=ary[j];
          ary[j]=min;
        }
      }
    }
    return ary;
  },
  removeDuplicates:function(ary){
    this.sort(ary);
    var result=[ary[0]];
    for(var i=1;i<ary.length;i++){
      if(ary[i]==ary[i-1]){
        continue;
      }else{
        result.push(ary[i]);
      }
    }
    return result;
  },
  difference:function(){
    var result=[];
    var combin=arguments[1];
    for(var i=2;i<arguments.length;i++){
      combin=this.concat(combin,arguments[i]);
    }
    combin=this.removeDuplicates(combin);
    for(var j=0;j<arguments[0].length;j++){
      for(var k=0;k<combin.length;k++){
        if(arguments[0][j]==combin[k]){
          var repeat=true;
          break;
        }else if(combin[k]>arguments[0][j]){
          var repeat=false;
          break;
        }else{
          var repeat=false;
        }
      }
      if(!repeat){
        result.push(arguments[0][j]);
      }
    }
    return result;
  },
  slice:function(ary,start,end){
    var start=(start==undefined?0:start);
    var end=(end==undefined?ary.length-1:end);
    var result=[];
    if(start<0){
      start=ary.length-Math.abs(start);
    }
    for(var i=start;i<=end;i++){
      result.push(ary[i]);
    }
    return result;
  },
  drop:function(ary,n){
    var n=n==undefined?1:n;
    var result=this.slice(ary,n);
    return result;
  },
  dropRight:function(ary,n){
    var n=n==undefined?1:n;
    var result=this.slice(ary,0,ary.length-1-n);
    return result;
  },
  dropRightWhile:function(ary,){

  }
}
