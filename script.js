var typed = new Typed('.autotype1', {
  strings: ['Pranav <i class="in">.CVO</I>', 'The Bored Company ', 'also', 'A proud sports captain.'],
  typeSpeed: 100,
  backSpeed: 120,
  loop: true,
  startDelay: 3000,
  faceOut: true,
});

var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
})



