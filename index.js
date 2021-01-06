var allButtons = document.querySelectorAll(".set button");

for (var i = 0; i < allButtons.length; i++) {
  document.querySelectorAll(".set button")[i].addEventListener("click", function() {

    var contains = this.innerHTML;

    makeSound(contains);
    buttonAnimation(contains);



  });
}

document.addEventListener("keypress", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key){

  switch (key) {

    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    default:
      alert(contains);

  }


}

function buttonAnimation (activeButton){
  var buttonClick = document.querySelector("." + activeButton);

  buttonClick.classList.add("pressed");

  setTimeout(function(){
    buttonClick.classList.remove("pressed");
  }, 100);
}
