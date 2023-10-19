///////////////////////////////////// NOTES  ///////////////////////////////////////////////////////

// maybe use array with numbers for random output not math floor & random
// fix the problem with small dices that the number 1 is shown too often

/////////////////////////////////////  TEST FUNCTION  //////////////////////////////////////////////

//function for testing
function test() {
  // alert("test");

  // generating number
  var result = Math.floor(1 + Math.random() * 4);

  // changing input field
  document.getElementById("d4").value = result;

  // array with options
  var message_option = ["Critical failure!", "Critical success!", "Crit!", ""];

  // check result with if

  // if (result == 1) {
  //   document.getElementById("if_crit").value = message_option[0];
  //   document.getElementById("if_crit").style.display = "inline-block";
  //   document.getElementById("if_crit").style.color = "red";
  // } else if (result == 4) {
  //   document.getElementById("if_crit").value = message_option[1];
  //   document.getElementById("if_crit").style.display = "inline-block";
  //   document.getElementById("if_crit").style.color = "green";
  // } else if (result == 6) {
  //   document.getElementById("if_crit").value = message_option[1];
  //   document.getElementById("if_crit").style.display = "inline-block";
  //   document.getElementById("if_crit").style.color = "green";
  // } else if (result == 12) {
  //   document.getElementById("if_crit").value = message_option[1];
  //   document.getElementById("if_crit").style.display = "inline-block";
  //   document.getElementById("if_crit").style.color = "green";
  // } else if (result == 20) {
  //   document.getElementById("if_crit").value = message_option[1];
  //   document.getElementById("if_crit").style.display = "inline-block";
  //   document.getElementById("if_crit").style.color = "green";
  // } else if (result == 100) {
  //   document.getElementById("if_crit").value = message_option[1];
  //   document.getElementById("if_crit").style.display = "inline-block";
  //   document.getElementById("if_crit").style.color = "green";
  // } else {
  //   document.getElementById("if_crit").value = message_option[3];
  //   document.getElementById("if_crit").style.display = "none";
  // }

  // check result with switch

  switch (result) {
    case 1:
      document.getElementById("if_crit").value = message_option[2];
      document.getElementById("if_crit").style.display = "inline-block";
      document.getElementById("if_crit").style.color = "red";
      break;
    case 4:
      document.getElementById("if_crit").value = message_option[1];
      document.getElementById("if_crit").style.display = "inline-block";
      document.getElementById("if_crit").style.color = "green";
      break;
    default:
      document.getElementById("if_crit").value = message_option[3];
      document.getElementById("if_crit").style.display = "none";
  }
}

/////////////////////////////////////  FUNCTIONS  /////////////////////////////////////////////////

//function that rolls a d4 (number range: 1 to 4)
function d4() {
  // generating number
  var result = Math.floor(1 + Math.random() * 4);

  // changing input field
  document.getElementById("d4").value = result;

  // array with options
  var message_option = ["Critical failure!", "Critical success!", "Crit!", ""];

  // check result; switch should be also possible
  switch (result) {
    case 1:
      document.getElementById("if_crit").value = message_option[2];
      document.getElementById("if_crit").style.display = "inline-block";
      document.getElementById("if_crit").style.color = "red";
      break;
    case 4:
      document.getElementById("if_crit").value = message_option[1];
      document.getElementById("if_crit").style.display = "inline-block";
      document.getElementById("if_crit").style.color = "green";
      break;
    default:
      document.getElementById("if_crit").value = message_option[3];
      document.getElementById("if_crit").style.display = "none";
  }
}

//function that rolls a d6 (number range: 1 to 6)
function d6() {
  // generating number
  var result = Math.floor(1 + Math.random() * 6);

  // changing input field
  document.getElementById("d6").value = result;

  // array with options
  var message_option = ["Critical failure!", "Critical success!", "Crit!", ""];

  // check result; switch should be also possible
  switch (result) {
    case 1:
      document.getElementById("if_crit").value = message_option[2];
      document.getElementById("if_crit").style.display = "inline-block";
      document.getElementById("if_crit").style.color = "red";
      break;
    case 6:
      document.getElementById("if_crit").value = message_option[1];
      document.getElementById("if_crit").style.display = "inline-block";
      document.getElementById("if_crit").style.color = "green";
      break;
    default:
      document.getElementById("if_crit").value = message_option[3];
      document.getElementById("if_crit").style.display = "none";
  }
}

//function that rolls a d8 (number range: 1 to 8)
function d8() {
  // generating number
  var result = Math.floor(1 + Math.random() * 8);

  // changing input field
  document.getElementById("d8").value = result;

  // array with options
  var message_option = ["Critical failure!", "Critical success!", "Crit!", ""];

  // check result; switch should be also possible
  switch (result) {
    case 1:
      document.getElementById("if_crit").value = message_option[2];
      document.getElementById("if_crit").style.display = "inline-block";
      document.getElementById("if_crit").style.color = "red";
      break;
    case 8:
      document.getElementById("if_crit").value = message_option[1];
      document.getElementById("if_crit").style.display = "inline-block";
      document.getElementById("if_crit").style.color = "green";
      break;
    default:
      document.getElementById("if_crit").value = message_option[3];
      document.getElementById("if_crit").style.display = "none";
  }
}

//function that rolls a d10 (number range: 1 to 10)
function d10() {
  // generating number
  var result = Math.floor(1 + Math.random() * 10);

  // changing input field
  document.getElementById("d10").value = result;

  // array with options
  var message_option = ["Critical failure!", "Critical success!", "Crit!", ""];

  // check result; switch should be also possible
  switch (result) {
    case 1:
      document.getElementById("if_crit").value = message_option[2];
      document.getElementById("if_crit").style.display = "inline-block";
      document.getElementById("if_crit").style.color = "red";
      break;
    case 10:
      document.getElementById("if_crit").value = message_option[1];
      document.getElementById("if_crit").style.display = "inline-block";
      document.getElementById("if_crit").style.color = "green";
      break;
    default:
      document.getElementById("if_crit").value = message_option[3];
      document.getElementById("if_crit").style.display = "none";
  }
}

//function that rolls a d12 (number range: 1 to 12)
function d12() {
  // generating number
  var result = Math.floor(1 + Math.random() * 12);

  // changing input field
  document.getElementById("d12").value = result;

  // array with options
  var message_option = ["Critical failure!", "Critical success!", "Crit!", ""];

  // check result; switch should be also possible
  switch (result) {
    case 1:
      document.getElementById("if_crit").value = message_option[2];
      document.getElementById("if_crit").style.display = "inline-block";
      document.getElementById("if_crit").style.color = "red";
      break;
    case 12:
      document.getElementById("if_crit").value = message_option[1];
      document.getElementById("if_crit").style.display = "inline-block";
      document.getElementById("if_crit").style.color = "green";
      break;
    default:
      document.getElementById("if_crit").value = message_option[3];
      document.getElementById("if_crit").style.display = "none";
  }
}

//function that rolls a d20 (number range: 1 to 20)
function d20() {
  // generating number
  var result = Math.floor(1 + Math.random() * 20);

  // changing input field
  document.getElementById("d20").value = result;

  // array with options
  var message_option = ["Critical failure!", "Critical success!", "Crit!", ""];

  // check result; switch should be also possible
  switch (result) {
    case 1:
      document.getElementById("if_crit").value = message_option[0];
      document.getElementById("if_crit").style.display = "inline-block";
      document.getElementById("if_crit").style.color = "red";
      break;
    case 20:
      document.getElementById("if_crit").value = message_option[1];
      document.getElementById("if_crit").style.display = "inline-block";
      document.getElementById("if_crit").style.color = "green";
      break;
    default:
      document.getElementById("if_crit").value = message_option[3];
      document.getElementById("if_crit").style.display = "none";
  }
}

//function that rolls a d100 (number range: 1 to 100)
function d100() {
  // generating number
  var result = Math.floor(1 + Math.random() * 100);

  // changing input field
  document.getElementById("d100").value = result;

  // array with options
  var message_option = ["Critical failure!", "Critical success!", "Crit!", ""];

  // check result; switch should be also possible
  switch (result) {
    case 1:
      document.getElementById("if_crit").value = message_option[0];
      document.getElementById("if_crit").style.display = "inline-block";
      document.getElementById("if_crit").style.color = "red";
      break;
    case 100:
      document.getElementById("if_crit").value = message_option[1];
      document.getElementById("if_crit").style.display = "inline-block";
      document.getElementById("if_crit").style.color = "green";
      break;
    default:
      document.getElementById("if_crit").value = message_option[3];
      document.getElementById("if_crit").style.display = "none";
  }
}
