
   // gerando os numeros aleatorios 
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    
    
   // trocando a imagem

   var diceImg = "dice" + randomNumber1 + ".png";
   var scrImg = "/images/" + diceImg;

   // img

   var imagem1 = document.querySelectorAll("img")[0];

   imagem1.setAttribute("scr", scrImg);

    

    // gerando numero aleatorio 2
   var randomNumber2 = Math.floor(Math.random() * 6) + 1;

   // trocando a imagem2
   var scrImg2 = "/images/dice" + randomNumber2 + ".png";

   // img2

    document.querySelectorAll("img")[1].setAttribute("scr", scrImg2);;

