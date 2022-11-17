//print duplicate character-sheetal

function findDuplicates(name)
{
       
    for(let i=0;i<name.length-1;i++){
        
        for(let j=0;j<name.length-1;j++){

            if(name[i]===name[j]){
                console.log(name[i]);
            }
        }
    }
}

let n=[7,6,8,7,8,6,9,2,];
findDuplicates(n);