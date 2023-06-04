document.getElementById("theme-switch").addEventListener("change", function(event) {
  const body = document.body;

  if (event.target.checked) {
    body.classList.add("light-mode");
  } else {
    body.classList.remove("light-mode");
  }
});


document.getElementById("run-button").addEventListener("click", function() {
  var algorithm = document.getElementById("algorithm-selector").value;
  var pageRefString = document.getElementById("page-reference-string").value;
  var numFrames = document.getElementById("num-frames").value;
  
  console.log(`Algorithm: ${algorithm}`);
  console.log(`Page Reference String: ${pageRefString}`);
  console.log(`Number of Frames: ${numFrames}`);
});


// Let's assume you have a checkbox for your light mode slider with id "light-mode-slider" // FOR THE PAGE REPLACEMENT SECTION // 
document.getElementById('light-mode-slider').addEventListener('change', function() {
  var color, backgroundColor;
  if (this.checked) {
      color = '#0a192f';
      backgroundColor = '#abb2b93';
  } else {
      color = '#abb2b9';
      backgroundColor = '#0a192f';
  }

  var elements = document.querySelectorAll('select, input');
  for (var i = 0; i < elements.length; i++) {
      elements[i].style.color = color;  
      elements[i].style.backgroundColor = backgroundColor;
  }
});

// This script will switch the theme of your page when the checkbox is clicked

