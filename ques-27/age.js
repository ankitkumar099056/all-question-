function agegroup(age){
    if(age>0 && age<=12){
        console.log("child");
    }else if(age>=12 && age<=19){
        console.log("teenager");
    }else if(age>=20 && age<=64){
        console.log("adult");
    }else{
        console.log("senior");
    } 


}
let giveage=prompt("please put the age");
agegroup(giveage);