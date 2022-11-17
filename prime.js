//find prime no.

function isPrime(number){

for(let i=2;i<number;i++){
    if(number%i==0){
        return + number + "not a prime no."
    }
    
}

return + number + ":is a prime no."
}
console.log(isPrime(15));


