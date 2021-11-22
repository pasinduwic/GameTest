
var notSelectCount = 0;
document.querySelector(".btn-play").addEventListener("click", play);

function play(){

    //Choose winner
    var over = document.querySelector(".choice-over").checked ;
    var lesser = document.querySelector(".choice-lesser").checked ;
    var middle = document.querySelector(".choice-middle").checked ;
    
    if(over === false && lesser === false && middle === false && notSelectCount < 1){

        document.querySelector("h1").textContent = "Please Make a Choice";
        notSelectCount ++;
        console.log(notSelectCount);

    }else if(over === false && lesser === false && middle === false && notSelectCount === 1){

        document.querySelector("h1").classList.add("worning");
        notSelectCount ++;
        console.log(notSelectCount);

    }else if(over === false && lesser === false && middle === false && notSelectCount > 1){

        var audio = new Audio("sounds/FUCK YOU.mp3");
        audio.play();
        notSelectCount ++;
        console.log(notSelectCount);

    }
    else{

    document.querySelector("h1").classList.remove("worning");
    //Generate random number
    var RandomNumber1 = Math.floor(Math.random()*6) + 1;
    var RandomNumber2 = Math.floor(Math.random()*6) + 1;
    var RandomImage1 = "images/" + RandomNumber1 + ".png";
    var RandomImage2 = "images/" + RandomNumber2 + ".png";
    var total = RandomNumber1 + RandomNumber2;

    //Set images
    document.querySelector(".player1").setAttribute("src",RandomImage1);
    document.querySelector(".player2").setAttribute("src",RandomImage2);

    if((total < 7 && lesser) || (total > 7 && over) || (total === 7 && middle)){

        document.querySelector("h1").textContent = "You Won";


    }else{

        document.querySelector("h1").textContent = "You Lost";
        var audio = new Audio("sounds/FUCK YOU.mp3");
        audio.play();

    }

    }
    

}