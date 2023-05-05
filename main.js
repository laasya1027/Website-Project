//Website Project by Laasya Mehta

//btn Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);
function btnClicked() {
  // Input
  let Smurfanswer = document.getElementById("answer1").value.toUpperCase();
  let Beananswer = document.getElementById("answer2").value.toUpperCase();
  let Disgustanswer = document.getElementById("answer3").value.toUpperCase();
  let Dobbyanswer = document.getElementById("answer4").value.toUpperCase();
  let Gruanswer = document.getElementById("answer5").value.toUpperCase();

  //Score Variable
  let score = 0;

  //Process
  if (Smurfanswer === "PAPA SMURF") {
    document.getElementById("comment1").innerHTML = `<p> Correct! </p>`;
    score = score + 1;
  } else {
    document.getElementById("comment1").innerHTML = `<p> Incorrect :( </p>`;
  }
  if (Beananswer === "1955") {
    document.getElementById("comment2").innerHTML = `<p> Correct! </p>`;
    score = score + 1;
  } else {
    document.getElementById("comment2").innerHTML = `<p> Incorrect :( </p>`;
  }
  if (Disgustanswer === "MINDY KALING") {
    document.getElementById("comment3").innerHTML = `<p> Correct! </p>`;
    score = score + 1;
  } else {
    document.getElementById("comment3").innerHTML = `<p> Incorrect :( </p>`;
  }
  if (
    Dobbyanswer === "PUNISH HIMSELF" ||
    Dobbyanswer === "ALWAYS STAY DEVOTED"
  ) {
    document.getElementById("comment4").innerHTML = `<p> Correct! </p>`;
    score = score + 1;
  } else {
    document.getElementById("comment4").innerHTML = `<p> Incorrect :( </p>`;
  }
  if (Gruanswer === "3") {
    document.getElementById("comment5").innerHTML = `<p> Correct! </p>`;
    score = score + 1;
  } else {
    document.getElementById("comment5").innerHTML = `<p> Incorrect :( </p>`;
  }

  // score+feedback

  let percentage = (score / 5) * 100;
  document.getElementById("percentage").innerHTML = percentage;
  document.getElementById("Score").innerHTML = score;
  if (score === 5) {
    document.getElementById(
      "message"
    ).innerHTML = `<p>Congratulations on your perfect score!<p/>`;
  } else if (score === 3 || score === 4) {
    document.getElementById(
      "message"
    ).innerHTML = `<p>You did very well! Keep trying.<p/>`;
  } else {
    document.getElementById("message").innerHTML = `<p>Keep learning >_< <p/>`;
  }
}
