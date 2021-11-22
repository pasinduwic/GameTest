
document.querySelector(".btn-play").addEventListener("click", play);

function play(){

    //Generate random number
    var RandomNumber1 = Math.floor(Math.random()*6) + 1;
    var RandomNumber2 = Math.floor(Math.random()*6) + 1;
    var RandomImage1 = "images/" + RandomNumber1 + ".png";
    var RandomImage2 = "images/" + RandomNumber2 + ".png";

    //Set images
    document.querySelector(".player1").setAttribute("src",RandomImage1);
    document.querySelector(".player2").setAttribute("src",RandomImage2);

    //Choose winner
    var over = document.querySelector(".choice-over").checked ;
    var lesser = document.querySelector(".choice-lesser").checked ;

    if(over === false && lesser === false){

        document.querySelector("h1").textContent = "Please Make a Choice";

    }
    else if((RandomNumber1 > RandomNumber2 && lesser) || RandomNumber2 > RandomNumber1 && over){

        document.querySelector("h1").textContent = "You Won";


    }else if(RandomNumber2 === RandomNumber1){

        document.querySelector("h1").textContent = "Draw";
        var audio = new Audio("sounds/FUCK YOU.mp3");
        audio.play();

    }else{

        document.querySelector("h1").textContent = "Pasindu won";

    }

}