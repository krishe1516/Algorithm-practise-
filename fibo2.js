function fibo(num)
{
    let i,present,previous,nextTerm;
    i=0;
    present=0;
    while(i<=num){
        nextTerm=present+previous;
        present=previous;
        previous=nextTerm;
        i=i+1;
        console.log("the fibonacci number for",i,"is",nextTerm)
    }
    
}

