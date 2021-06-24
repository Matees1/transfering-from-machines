


let question = function(){
    let yearBornIn;
    yearBornIn = prompt("What year were you born in?");
    let days = (2021 - yearBornIn) * 365;
    document.getElementById('result').innerHTML = "You have been alive for " + days + " days!";
    console.log("The amount of days that you have been alive are ", days);
}

let reset = function(){
    document.getElementById('result').innerHTML = '';
    
}

document.getElementById("reset").addEventListener("click", reset);
document.getElementById("click-me").addEventListener("click", question);

