
function findDuplicates(array)
{
    for(let i=0;i<array.length;i++){
       for(let j=0;j<array.length;j++){

        if(array[i]===array[j]){
            console.log(array[i]);
        }


       } 
    }
}
let num=[1,5,5,3,9,0];
findDuplicates(num);
