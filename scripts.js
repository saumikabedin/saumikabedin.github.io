function toggleMusic() {
    var audio = document.getElementById("background-music");
    var button = document.querySelector("#audio-player button");
    if (audio.paused) {
      audio.play();
      button.innerHTML = "&#9616;&#9616;"; // Pause symbol
    } else {
      audio.pause();
      button.innerHTML = "&#9658;"; // Play symbol
    }
  }
  
  // Add this function to set the initial appearance of the button
  function setInitialButtonAppearance() {
    var audio = document.getElementById("background-music");
    var button = document.querySelector("#audio-player button");
    if (audio.paused) {
      button.innerHTML = "&#9658;"; // Play symbol
    } else {
      button.innerHTML = "&#9616;&#9616;"; // Pause symbol
    }
  }
  
  function changeVolume(volume) {
    var audio = document.getElementById("background-music");
    audio.volume = volume / 100; // Volume ranges from 0 to 1, so divide by 100
}

  // Call the function to set the initial appearance of the button when the page loads
  window.onload = setInitialButtonAppearance;
  
  // Haha No Peeking
  document.onmousedown = disableclick;
  var status = "Haha No Peeking";
  function disableclick(e) {
    if (e.button == 2) {
      alert(status);
      return false; 
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const cursor = document.querySelector(".custom-cursor");

  document.addEventListener("mousemove", function(e) {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
  });
});
  