//playSound describes what to do in response to an event, e :
  // - play audio with key code corresponding to e
function playSound(e){
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  //end function if key is pressed other than the ones that have sounds
  if (!audio) return;
  //every time key is pressed, restart audio file to beginning.
  //otherwise, js waits until audio clip is done playing to restart.
  audio.currentTime = 0;
  audio.play();
}

//transitionBoxes describes what to do in response to an event, e :
  // - change element with 1.CSS class key and 2.key code corresponding to e
  //   to CSS class "playing"
function transitionBoxes(e){
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
  key.classList.add("playing");
}

//removeTransition describes what to do in response to an event, e :
// - remove CSS class playing
function removeTransition(e){
  //e is the CSS properties which transition for every element with CSS class key
  //each element has many properties which transition.
  //take only the "transform" (fade) property because it takes the longest.
  if(e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

//When key is pressed, play sound and make box bigger for that key
window.addEventListener('keydown', playSound);
window.addEventListener('keydown', transitionBoxes);

//For elements of CSS class key (boxes), listen for any transition that has ended.
//Once it has, run removeTransition to make boxes smaller.
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
