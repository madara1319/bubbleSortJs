let correctArray;
//gotta fix function to look for incorrect inputs inside array
let stringToNumberArray = (array) => {
  if (array[0] === "[") {
    let numberOutputArray = [];
    let stringInputArray = array;
    stringInputArray = stringInputArray.slice(1);
    stringInputArray = stringInputArray.slice(0, stringInputArray.length - 1);
    // console.log(
    //   `pierwszy znak stringInputArray ${stringInputArray[0]} a ostatni to ${
    //     stringInputArray[stringInputArray.length - 1]
    //   }`
    // );
    // console.log(`array wyglada jak ${stringInputArray}`);
    let tempArray = stringInputArray.split(",").map(Number);
    for (let i = 0; i < numberOutputArray.length; i++) {
      if (Number.isInteger(parseInt(tempArray[i]))) {
        numberOutputArray.push(parseInt(tempArray[i]));
        // console.log(array[i]);
        correctArray = true;
      } else {
        correctArray = false;
      }
    }
    // correctArray = true;
    return numberOutputArray;
  } else if (Number.isInteger(parseInt(array[0]))) {
    let numberOutputArray = array.split(",").map(Number);
    for (let i = 0; i < numberOutputArray.length; i++) {
      if (Number.isInteger(numberOutputArray[i])) {
        correctArray = true;
      } else {
        correctArray = false;
        break;
      }
    }
    // correctArray = true;
    return numberOutputArray;
  } else {
    correctArray = false;
  }
};

export { correctArray, stringToNumberArray };
