//sorting example
function bubbleSorting(array)
{
  let swapped;

  do{
    swapped=false;
    for(i=0;i<array.length-1;i++){

        if(array[i]<array[i+1]){
            let temp=array[i];
            array[i]=array[i+1];
            array[i+1]=temp;
            swapped=true;
        }
    }
  }while(swapped)
}
let array=[2,4,1,3];
bubbleSorting(array);
console.log(array);