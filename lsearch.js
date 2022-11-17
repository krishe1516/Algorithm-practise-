//linearsearch

 function findDuplicates(array)
 {
    for(let i=0;i<array.length;i++){
    for(let j=0;j<array.length;j++) 
    {
        if(array[i]===array[j])
        console.log(array[i]);
    }  
    }
 }
 let number=[10,8,77,66,55,8,8];
findDuplicates(number);