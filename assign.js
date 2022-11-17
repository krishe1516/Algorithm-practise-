//
function findlocation(array,item){
     for(let i=0;i<=array.length;i++){
        if(array[i]===item){
            return i;
        }
     }
     return -1;
    
}
let array=[1,4,6,8,9];
let result=findlocation(array,4);
console.log(result);