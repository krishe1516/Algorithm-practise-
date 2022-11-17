//is it palindrome

function isPalimdrome(str)
{
    let reverseStr='';

    for(let i=str.length-1;i>=0;i--)
    {
        reverseStr+=str[i];
    }
        if(str===reverseStr){
            console.log('it is a palindrome')
        }
        else{
            console.log('it is not a palindrome')
        }

}
isPalimdrome('madam');