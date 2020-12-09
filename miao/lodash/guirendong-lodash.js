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
  differenceBy:function(){

  },
  slice:function(ary,start,end){
    var start=(start==undefined?0:start);
    var end=(end==undefined?ary.length-1:end);
    if(ary instanceof Array){
      var result=[];
      if(start<0){
        start=ary.length-Math.abs(start);
      }
      for(var i=start;i<=end;i++){
        result.push(ary[i]);
      }
      return result;
    }else if(typeof(ary)=="string"){
      var str="";
      for( i=start;i<=end;i++){
        str+=ary[i];
      }
      return str;
    }
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

  },
  join:function(ary,symbol){
    var str="";
    for(var i=0;i<ary.length-1;i++){
      str=str + ary[i] + symbol;
    }
    return (str + ary[ary.length-1]);
  },
  last:function(ary){
    var ele=ary[ary.length-1];
    return ele;
  },
  lastIndexOf:function(ary,char,start){
    var start=(start==undefined?ary.length-1:start);
    for(var i=start;i>=0;i--){
      var temp=ary[i];
      if(temp==char){
        return i;
      }
    }
  },
  fill:function(ary,char,start,end){
    var start=(start==undefined?0:start);
    var end=(end==undefined?ary.length:end);
    for(var i=start;i<end;i++){
      ary[i]=char;
    }
    return ary;
  },
  findIndex:function(ary,obj){
    if(obj==null){
      return -1;
    }
    if(typeof(obj)=="string"){
      for(var i=0;i<ary.length;i++){
        if(obj in ary[i]){
          return i;
        }
      }
    }
    if(obj instanceof Array){
      for(var i=0;i<ary.length;i++){
        if(ary[i][obj[0]]&&ary[i][obj[0]]==obj[1]){
          return i;
        }
      }
    }
    if(obj instanceof Function){
      for(var i=0;i<ary.length;i++){
        if(obj(ary[i])){
          return i;
        }
      }
    }
    if(obj instanceof Object){
      for(var i=0;i<ary.length;i++){
        if(ary[i] in obj){
          return i;
        }
      }
    }
  },
  flatten:function (ary) {
    var result=[];
    for(var i=0;i<ary.length;i++){
      if(ary[i] instanceof Array){
        for(var j=0;j<ary[i].length;j++){
          result.push(ary[i][j]);
        }
      }else{
        result.push(ary[i]);
      }
    }
    return result;
  },
}
