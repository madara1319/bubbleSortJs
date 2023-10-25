const animateButton = document.querySelector(".fourthSection");

export { animateButton };

function animate() {
  if ($(".numberButton").hasClass("activate")) {
    $(".numberButton").removeClass("activate");
    //   $('.numberButton').addClass('close');
  } else {
    //   $('.numberButton').removeClass('close');
    $(".numberButton").addClass("activate");
  }
}

function animateOnKeyUp(e) {
  if (e.key === "a") {
    animate();
  }
}
