//factorial example
function factorial(n)
{
    let sum=1;
   if(n<=1){
    console.log('invalid number');
    return -1;
   }
   for(let i=1;i<=n;i++){
   
   sum=i*sum;
   }
   return sum;
}

result=factorial(0);
console.log(result);