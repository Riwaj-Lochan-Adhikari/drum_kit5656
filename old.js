function key(word) {
 switch (buttonInnerHTML) {
       case "w":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
     
        case "a":
        var kickBass = new Audio("sounds/kick-bass.mp3");
        kickBass.play();
        break;

        case "s":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;


      case "d":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

      case "j":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

      case "k":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

      case "l":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

  
    

      
      default:
        console.log("Key not recognized: " + buttonInnerHTML);
    }
  
}
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML; // This line stores the HTML content inside the clicked element into a variable.

    this.style.color = "white";

    switch (buttonInnerHTML) {
       case "w":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
     
        case "a":
        var kickBass = new Audio("sounds/kick-bass.mp3");
        kickBass.play();
        break;

        case "s":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;


      case "d":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

      case "j":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

      case "k":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

      case "l":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

  
    

      
      default:
        console.log("Key not recognized: " + buttonInnerHTML);
    }
  });
}




document.addEventListener("keydown",function(event){ // (E we added event listener to entire document E)
  console.log(event);
});




switch (key) {
  case value:
    
    break;

  default:
    break;
}