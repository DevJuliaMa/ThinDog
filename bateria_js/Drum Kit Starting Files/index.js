// pegando a quantidade de botão do HTML.
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

//percorrer todos os botões e executar a função anonima.
for(var i = 0; i < numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        // add o som dentro do HTML
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    
    });
}

    // função com callbeck
    document.addEventListener("keypress", function(event){

        makeSound(event.key);
        buttonAnimation(event.key);
    });


    // sons
    function makeSound(key){
        
        switch (key){
            case "w":
                var crash = new Audio("sounds/crash.mp3");
                crash.play()
                break;
    
            case "a": 
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play()
                break;
    
            case "s":
                var snare = new Audio("sounds/snare.mp3");
                snare.play()
                break;
    
            case "d":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play()
                break;
    
            case "j":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play()
                break;
    
            case "k":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play()
                break;
    
            case "l":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play()
                break;
    
            default: console.log(buttonInnerHTML);
           };
    };

    // add animação
    function buttonAnimation(currentKey){
        var activeButton = document.querySelector("." + currentKey);

        //add classe
        activeButton.classList.add("pressed");

        //remove

        setTimeout(function(){
            activeButton.classList.remove("pressed");
        }, 100);

        

        
    }

 //colocando o som
 //var audio = new Audio("sounds/crash.mp3")
 //audio.play();

 // keydownevent listener 