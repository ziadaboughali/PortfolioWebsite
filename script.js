document.getElementById("theme-switch").addEventListener("change", function(event) {
    const body = document.body;

    if (event.target.checked) {
      body.classList.add("light-mode");
    } else {
      body.classList.remove("light-mode");
    }
  });