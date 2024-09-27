function cheack(num){
    if(num%2==0){
        console.log( num," is Even number")
    }else
    if(num%2!=0){
        console.log(num,"odd number");
    }
    return;
}
let cheacknumber=prompt("please put the number");
cheack(cheacknumber);
