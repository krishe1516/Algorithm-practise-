//
function fibo(n){
let first=5;
let second=6;
let next;


for(let i=1;i<=n;i++){
    next=first+second;
    first=second;
    second=next;
    console.log(second);
}

}
fibo(4);
//let index=fibo(4);
return fibo;