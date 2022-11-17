//find odd number
function fiboOdd(num){
   
    let first=0;
    let second=1;
    let next;

   for(i=1;i<num;i++){
    next=first+second;
    first=second;
    second=next;
    console.log("fibo series=" +next);
   }
}

fiboOdd(6);

return fiboOdd;