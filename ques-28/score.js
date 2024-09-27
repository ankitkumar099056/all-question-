function gradeEvaluation(score){
    switch(true){
        case(score>=90 && score<=100):
        console.log("A");
        break;
        case(score>=80 && score<=89):
        console.log("B");
        break;
        case(score>=70 && score<=79):
        console.log("C");
        break;
        case(score>=60 && score<=69):
        console.log("D");
        break;
        default:
            console.log("F");

    }
  return;
}

let user=prompt("please put the score");
gradeEvaluation(user);
