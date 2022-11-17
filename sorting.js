
function bubbleSorting(array){
 let swapped,temp;
    do{
        swapped=false;

    for(i=0;i<array.length-1;i++){
       if(array[i]>array[i+1]){
        temp=array[i];
        array[i]=array[i+1];
        array[i+1]=temp;
        swapped=true;
       }
    }    

    }while(swapped)

}

let array=[1,0,3,5,2];
bubbleSorting(array);
console.log(array);