let textArea = document.querySelector(".textArea");
let buttonToBeAnimated = document.querySelector(".numberButton");

function animate() {
  // if ($(".numberButton").hasClass(".numberButtonActive")) {
  //   $(".numberButton").removeClass(".numberButtonActive");
  // } else {
  //   $(".numberButton").addClass("numberButtonActive");
  // }
}

function animateOnKeyUp(e) {
  // if (e.key === "a") {
  //   animate();
  // }
}

let animateButtonOnKeyboardClicks = () => {
  textArea.addEventListener("keydown", (e) => {
    console.log(`Key ${e.key} pressed [event: keydown]`);
    buttonToBeAnimated.classList.add(".numberButtonActive");

    buttonToBeAnimated.classList.remove(".numberButtonActive");
  });
};

export { animate, animateOnKeyUp, animateButtonOnKeyboardClicks };
