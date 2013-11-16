// console.log("123");

var human = document.getElementById("humanScore");
var computer = document.getElementById("computerScore");
var rockBtn = document.getElementById("rock");
var paperBtn = document.getElementById("paper");
var scissorsBtn = document.getElementById("scissors");
var statusMsg = document.getElementById("status");
var userInput;

// # Get user input
rockBtn.onclick = rockIsClicked;
paperBtn.onclick = paperIsClicked;
scissorsBtn.onclick = scissorsIsClicked;

function rockIsClicked() {
	userInput = "rock";
	var robotInput = getRobotInput();
	compare(userInput, robotInput);
}

function paperIsClicked() {
	userInput = "paper";
	var robotInput = getRobotInput();
	compare(userInput, robotInput);
}

function scissorsIsClicked() {
	userInput = "scissors";
	var robotInput = getRobotInput();
	compare(userInput, robotInput);
}

// # Get robot input
function getRobotInput() {
	var choices = {
		1: "rock",
		2: "paper",
		3: "scissors"
	};

	var randomNumber = Math.ceil(Math.random() * 3);
	// console.log(randomNumber);
	// console.log(choices[randomNumber]);
	return choices[randomNumber];
}	

// Compare the inputs
function compare(userInput, computerInput) {
	console.log("user: " + userInput);
	console.log("computer: " + computerInput);

	if (
			(userInput == "scissors" && computerInput == "paper") ||
			(userInput == "rock" && computerInput == "scissors") ||
			(userInput == "paper" && computerInput == "rock")
		) {
		console.log("user win");
	} else if (
			(computerInput == "scissors" && userInput == "paper") ||
			(computerInput == "rock" && userInput == "scissors") ||
			(computerInput == "paper" && userInput == "rock")
		) {
		console.log("robot win");
	} else {
		console.log("draw")
	}
}



// $GAME_START


// user_choice = get_user_choice

// # Get robot input
// robot_choice = random(paper, scissors, stone)

// 1 = paper
// 2 = scissors
// 3 = stone

// # Setup the datastore
// results = initialize(10)

// # User win
// if (user_choice == scissors AND robot_choice == paper)
// or (user_choice == stone AND robot_choice == scissors)
// or (user_choice == paper AND robot_choice == stone)
//   say "YOU WIN"
//   save(results, "user")

// # User lose
// if (user_choice == paper AND robot_choice == scissors)
// or (user_choice == scissors AND robot_choice == stone)
// or (user_choice == stone AND robot_choice == paper)
//   say "YOU LOSE"
//   save(results, "robot")

// # Repeat if draw
// if (user_choice == robot_choice)
//   save(results, "draw")
//   GOTO $GAME_START
// else
//   say "GAME OVER"
//   # Display recent results
//   foreach(results as result)
//     say result