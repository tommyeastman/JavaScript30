window.addEventListener('keydown', function(e){
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  if (!audio) return;
  //every time key is pressed, restart audio file to beginning.
  //otherwise, js waits until audio clip is done playing to restart.
  audio.currentTime = 0;
  audio.play();
  //console.log(audio);
});
