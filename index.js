var l = document.querySelectorAll(".drum").length
function key_c(fkey) {                              //c stands for check  fkey stands for function key
  switch (fkey){
    case "w":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;

     case "a":
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
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
    console.log(fkey);
    
  }
}
// l is for number of buttons
for (let i = 0; i <l; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click",function(){
var biH = this.innerHTML;
//  bih is buttonInnerHTML
 
  key_c(biH);
});}
//e is for event
    document.addEventListener("keydown",function(e){
       key_c(e.key);
    });