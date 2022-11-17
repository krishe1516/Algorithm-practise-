//print element x is present at index 6

function search(arr,x)
{
   for(let i=0;i<arr.length;i++){
   
    if(arr[i]==x){
        return i;
    }
    
   }
   return -1;
}

let arr=[10,20,30,40,50,80,110,90,70];
let x=110;

let result=search(arr,x);

console.log(+x , "Element is present at index = " + result);