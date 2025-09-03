
function gradeSystem(c) {
    if (c > 30) {
        message('failed 😂');

    } else if (c <= 40) {
        message("very bad");

    } else if (c <=55) {
        message('Good👍');

    } else if(c <= 75) {
        message("very good😁");

    } else if(c <= 85) {
        message('Excellent 😘');

    } else if(c <= 100) {
        message("perfecr ❤");
1
    } else {
        message("invalid value");
    }

    // return `you entered: ${c}`;
    return message;

}

// const userInput = prompt("Enter your grade (30-100)");
// const schoolGrade = gradeSystem(parseInt(userInput));
// message(schoolGrade);

// let signin = document.getElementById('sign');
// let text = document.getElementById('text'); 

// signin.addEventListener("click",() => {// });


window.addElementListener('DOMContentLoaded', function () 
    const form = document.getElementById("gradeform");
    const input = document.getElementById("inputField");
    const result = document.getElementById("graderesult");


    if (!form || !input || !result) return;

    form.addElement
)