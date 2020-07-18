let userinput;
let computerinput;
let win = 0;
let lose = 0;
let draw = 0;

var options = ["rock", "paper", "scissors"];
function rock() {
	userinput = 'rock';
	var computerinput = options[Math.floor(Math.random() * options.length)];//to get random array element
	document.getElementById('display').innerHTML = '<span class="display-item">you:' + userinput + '</span>';
	document.getElementById('display1').innerHTML = '<span class="display-item">computer:' + computerinput + '</span>';
	if (computerinput == 'rock') {
		document.getElementById('output').innerHTML = '<span class="display-item">' + "it is draw" + '</span>';
		draw++;
		document.getElementById('draw').innerHTML = 'draw=' + draw;
	}
	else if (computerinput == 'paper') {
		document.getElementById('output').innerHTML = '<span class="display-item">' + 'you lose' + '</span>';
		lose++;
		document.getElementById('losser').innerHTML = 'lose=' + lose;
	}
	else if (computerinput == 'scissors') {
		document.getElementById('output').innerHTML = '<span class="display-item">' + 'you win' + '</span>';
		win++;
		document.getElementById('winner').innerHTML = 'win=' + win;
	}
	else {
		document.getElementById('output').innerHTML = 'Something went wrong!!! Please try agian..';
	}
}
function paper() {
	var userinput = 'paper';
	var computerinput = options[Math.floor(Math.random() * options.length)];//to get random array element
	document.getElementById('display').innerHTML = '<span class="display-item">you:' + userinput + '</span>';
	document.getElementById('display1').innerHTML = '<span class="display-item">computer:' + computerinput + '</span>';
	if (computerinput == 'rock') {
		document.getElementById('output').innerHTML = '<span class="display-item">' + "you win" + '</span>';
		win++;
		document.getElementById('winner').innerHTML = 'win=' + win;
	}
	else if (computerinput == 'paper') {
		document.getElementById('output').innerHTML = '<span class="display-item">' + 'it is draw' + '</span>';
		draw++;
		document.getElementById('draw').innerHTML = 'draw=' + draw;
	}
	else if (computerinput == 'scissors') {
		document.getElementById('output').innerHTML = '<span class="display-item">' + 'you lose' + '</span>';
		lose++;
		document.getElementById('losser').innerHTML = 'lose=' + lose;
	}
	else {
		document.getElementById('output').innerHTML = 'Something went wrong!!Please try agian..';
	}
}
function scissors() {
	userinput = 'scissors';
	var computerinput = options[Math.floor(Math.random() * options.length)];//to get random array element
	document.getElementById('display').innerHTML = '<span class="display-item">you:' + userinput + '</span>';
	document.getElementById('display1').innerHTML = '<span class="display-item">computer:' + computerinput + '</span>';
	if (computerinput == 'rock') {
		document.getElementById('output').innerHTML = '<span class="display-item">' + "you lose" + '</span>';
		lose++;
		document.getElementById('losser').innerHTML = 'lose=' + lose;
	}
	else if (computerinput == 'paper') {
		document.getElementById('output').innerHTML = '<span class="display-item">' + 'you win' + '</span>';
		win++;
		document.getElementById('winner').innerHTML = 'win=' + win;
	}
	else if (computerinput == 'scissors') {
		document.getElementById('output').innerHTML = '<span class="display-item">' + 'it is draw' + '</span>';
		draw++;
		document.getElementById('draw').innerHTML = 'draw=' + draw;
	}
	else {
		document.getElementById('output').innerHTML = 'Something went wrong!!Please try agian..';
	}
}
