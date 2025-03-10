let score = {
  wins: 0,
  losses: 0,
  tie: 0,
};

function game(user) {
  let randommove = Math.random();
  randommove = Math.floor(randommove * 3) + 1;
  let computermove;
  if (randommove === 1) {
    computermove = "rock";
  } else if (randommove === 2) {
    computermove = "paper";
  } else {
    computermove = "scissors";
  }

  console.log(user);

  if (user === "paper") {
    document.querySelector(".userresult img").src = `Assets/images/paper.png`;
  } else if (user === "scissors") {
    document.querySelector(
      ".userresult img"
    ).src = `Assets/images/scissors.png`;
  } else if (user === "rock") {
    document.querySelector(".userresult img").src = `Assets/images/rock.png`;
  }

  if (computermove === "paper") {
    document.querySelector(".comresult img").src = `Assets/images/paper.png`;
  } else if (computermove === "scissors") {
    document.querySelector(".comresult img").src = `Assets/images/scissors.png`;
  } else if (computermove === "rock") {
    document.querySelector(".comresult img").src = `Assets/images/rock.png`;
  }

  if (computermove === user) {
    console.log("its a tie");
    
    score.tie = score.tie + 1;
    document.getElementById("ties").innerHTML = score.tie;
    document.getElementById("score-display").innerHTML = "Its a tie";
  } else if (
    (user === "rock" && computermove === "scissors") ||
    (user === "paper" && computermove == "rock") ||
    (user === "scissors" && computermove === "paper")
  ) {
    score.wins = score.wins + 1;
    console.log("win");
    document.getElementById("your-score").innerHTML = score.wins;
    document.getElementById("score-display").innerHTML = "You Won!";
  } else {
    console.log("you loose");
    score.losses = score.losses + 1;
    document.getElementById("computer-score").innerHTML = score.losses;
    document.getElementById("score-display").innerHTML = "You Lost";
  }
}
