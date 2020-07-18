$(function(){

let userinput;
let computerinput;
let win = 0;
let lose = 0;
let draw = 0;

var options = ["rock", "paper", "scissors"];
$("#rock").click(function(){
	userinput = 'rock';
	var computerinput = options[Math.floor(Math.random() * options.length)];//to get random array element
	$("#display").html('<span class="display-item">you:' + userinput + '</span>');
	$("#display1").html('<span class="display-item">computer:' + computerinput + '</span>');
	if (computerinput == 'rock') {
		$("#output").html('<span class="display-item-draw">' + '<b>it is draw</b>' + '</span>');
		draw++;
		$('#draw').html("draw="+draw);
	}
	else if (computerinput == 'paper') {
		$("#output").html('<span class="display-item-win">' + '</b>you win</b>' + '</span>');
		win++;
		$("#losser").html('win='+win);
	}
	else if (computerinput == 'scissors') {
		$("#output").html('<span class="display-item-lose">' + '<b>you lose</b>' + '</span>');
		lose++;
		$("#losser").html('lose='+lose);
	}
	else {
		$("#output").html('Something went wrong!!! Please try agian..');
	}
});




$("#paper").click(function paper() {
	var userinput = 'paper';
	var computerinput = options[Math.floor(Math.random() * options.length)];//to get random array element
	$('#display').html('<span class="display-item">you:' + userinput + '</span>');
	$('#display1').html('<span class="display-item">computer:' + computerinput + '</span>');
	if (computerinput == 'rock') {
		$('#output').html('<span class="display-item-win">' + "<b>you win</b>" + '</span>');
		win++;
		$('#winner').html('win=' + win);
	}
	else if (computerinput == 'paper') {
		$('#output').html('<span class="display-item-draw">' + '<b>it is draw</b>' + '</span>');
		draw++;
		$('#draw').html('draw=' + draw);
	}
	else if (computerinput == 'scissors') {
		$('#output').html('<span class="display-item-lose">' + '</b>you lose</b>' + '</span>');
		lose++;
		$('#losser').html('lose='+lose);
	}
	else {
		$('#output').html('Something went wrong!!Please try agian..');
	}
});

$("#scissors").click(function scissors() {
	userinput = 'scissors';
	var computerinput = options[Math.floor(Math.random() * options.length)];//to get random array element
	$('#display').html('<span class="display-item">you:' + userinput + '</span>');
	$('#display1').html('<span class="display-item">computer:' + computerinput + '</span>');
	if (computerinput =='rock') {
		$('#output').html('<span class="display-item-lose">' + "<b>you lose</b>" + '</span>');
		lose++;
		$('#losser').html('lose=' + lose);
	}
	else if (computerinput == 'paper') {
		$('#output').html('<span class="display-item-win">' + '<b>you win</b>' + '</span>');
		win++;
		$('#winner').html('win=' + win);
	}
	else if (computerinput == 'scissors') {
		$('#output').html('<span class="display-item-draw">' + '<b>it is draw</b>' + '</span>');
		draw++;
		$('#draw').html('draw=' + draw);
	}
	else {
		$('#output').html('Something went wrong!!Please try agian..');
	}
});


});