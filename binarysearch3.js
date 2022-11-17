 function binarySearch(array,item)
 {
    let left=0;
    let right=array.length-1;
    while(left<=right){
    let mid=Math.floor((left+right)/2);
    if(array[mid]===item){
        return mid;
    }
    if(array[mid]<=item){
      return left=mid+1;
    }
    else{
        return right=mid-1;
    }
    }
return -1;
 }

 array=[10,20,30,40,50,60,70,80,90];
 item=100;
 let index=binarySearch(array,item);
 console.log(index);