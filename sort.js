
function bubbleSorting(array)
{
  let swapped;    
do{
    swapped=false; 
   for(let i=0;i<array.length-1;i++){
 
    if(array[i]>array[i+1])
    {
        let temp=array[i];
      array[i]=array[i+1];
      array[i+1]=temp;
      swapped=true;

    }

   } 
}while(swapped)


}

let array=[1,4,6,3];
bubbleSorting(array);
console.log("After sorting the array elements are:-" +array);