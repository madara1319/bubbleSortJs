const animateButton = document.querySelector(".fourthSection");

function animate() {
  // if ($(".numberButton").hasClass("activate")) {
  //   $(".numberButton").removeClass("activate");
  //   //   $('.numberButton').addClass('close');
  // } else {
  //   //   $('.numberButton').removeClass('close');
  //   $(".numberButton").addClass("activate");
  // }
}

function animateOnKeyUp(e) {
  // if (e.key === "a") {
  //   animate();
  // }
}

let animateButtonOnKeyboardClicks = () => {
  let keyboardButtonArray = [];
  for (let i = 1; i < 10; i++) {
    keyboardButtonArray[i] = document.querySelector(`.numberButton${i}`);
    keyboardButtonArray[i].addEventListener("keypress", (e) => {
      for (let i = 1; i < 10; i++) {
        if (e.key === `${i}`) {
          e.preventDefault();
          localStorage.setItem("clickedValue", i);
          entryInputForm.value += localStorage.getItem("clickedValue");
          keyboardButtonArray[i].addClass(".numberButton:active");
        }
      }
    });
  }
};

export {
  animateButton,
  animate,
  animateOnKeyUp,
  animateButtonOnKeyboardClicks,
};
