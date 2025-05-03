// SWITCH - can be an efficient replacement to many else if statements

let testScore = 33
let letterGrade;

switch(testScore){
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    default:
        letterGrade = "FAIL";
        break;
};

console.log(letterGrade);