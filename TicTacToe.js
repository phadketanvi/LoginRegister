// Function called whenever user taps on any box
function createGrid() {

	var but1, but2, but3, but4, but5, but6, but7, but8, but9;
	but1 = document.getElementById("but1").value;
	but2 = document.getElementById("but2").value;
	but3 = document.getElementById("but3").value;
	but4 = document.getElementById("but4").value;
	but5 = document.getElementById("but5").value;
	but6 = document.getElementById("but6").value;
	but7 = document.getElementById("but7").value;
	but8 = document.getElementById("but8").value;
	but9 = document.getElementById("but9").value;

	// These if else conditions will check whether Player X or Player O won based on the given inputs
	if ((but1 == 'x' || but1 == 'X') && (but2 == 'x' || but2 == 'X') && (but3 == 'x' || but3 == 'X')) {
		document.getElementById('playerTurnPrint')
			.innerHTML = "Player X won";
		document.getElementById("but4").disabled = true;
		document.getElementById("but5").disabled = true;
		document.getElementById("but6").disabled = true;
		document.getElementById("but7").disabled = true;
		document.getElementById("but8").disabled = true;
		document.getElementById("but9").disabled = true;
		window.alert('Player X won');
	}
	else if ((but1 == 'x' || but1 == 'X') && (but4 == 'x' || but4 == 'X') && (but7 == 'x' || but7 == 'X')) {
		document.getElementById('playerTurnPrint')
			.innerHTML = "Player X won";
		document.getElementById("but2").disabled = true;
		document.getElementById("but3").disabled = true;
		document.getElementById("but5").disabled = true;
		document.getElementById("but6").disabled = true;
		document.getElementById("but8").disabled = true;
		document.getElementById("but9").disabled = true;

		window.alert('Player X won');
	}
	else if ((but7 == 'x' || but7 == 'X') && (but8 == 'x' || but8 == 'X') && (but9 == 'x' || but9 == 'X')) {
		document.getElementById('playerTurnPrint')
			.innerHTML = "Player X won";
		document.getElementById("but1").disabled = true;
		document.getElementById("but2").disabled = true;
		document.getElementById("but3").disabled = true;
		document.getElementById("but4").disabled = true;
		document.getElementById("but5").disabled = true;
		document.getElementById("but6").disabled = true;
		window.alert('Player X won');
	}
	else if ((but3 == 'x' || but3 == 'X') && (but6 == 'x' || but6 == 'X') && (but9 == 'x' || but9 == 'X')) {
		document.getElementById('playerTurnPrint')
			.innerHTML = "Player X won";
		document.getElementById("but1").disabled = true;
		document.getElementById("but2").disabled = true;
		document.getElementById("but4").disabled = true;
		document.getElementById("but5").disabled = true;
		document.getElementById("but7").disabled = true;
		document.getElementById("but8").disabled = true;
		window.alert('Player X won');
	}
	else if ((but1 == 'x' || but1 == 'X') && (but5 == 'x' || but5 == 'X') && (but9 == 'x' || but9 == 'X')) {
		document.getElementById('playerTurnPrint')
			.innerHTML = "Player X won";
		document.getElementById("but2").disabled = true;
		document.getElementById("but3").disabled = true;
		document.getElementById("but4").disabled = true;
		document.getElementById("but6").disabled = true;
		document.getElementById("but7").disabled = true;
		document.getElementById("but8").disabled = true;
		window.alert('Player X won');
	}
	else if ((but3 == 'x' || but3 == 'X') && (but5 == 'x' || but5 == 'X') && (but7 == 'x' || but7 == 'X')) {
		document.getElementById('playerTurnPrint')
			.innerHTML = "Player X won";
		document.getElementById("but1").disabled = true;
		document.getElementById("but2").disabled = true;
		document.getElementById("but4").disabled = true;
		document.getElementById("but6").disabled = true;
		document.getElementById("but8").disabled = true;
		document.getElementById("but9").disabled = true;
		window.alert('Player X won');
	}
	else if ((but2 == 'x' || but2 == 'X') && (but5 == 'x' || but5 == 'X') && (but8 == 'x' || but8 == 'X')) {
		document.getElementById('playerTurnPrint')
			.innerHTML = "Player X won";
		document.getElementById("but1").disabled = true;
		document.getElementById("but3").disabled = true;
		document.getElementById("but4").disabled = true;
		document.getElementById("but6").disabled = true;
		document.getElementById("but7").disabled = true;
		document.getElementById("but9").disabled = true;
		window.alert('Player X won');
	}
	else if ((but4 == 'x' || but4 == 'X') && (but5 == 'x' || but5 == 'X') && (but6 == 'x' || but6 == 'X')) {
		document.getElementById('playerTurnPrint')
			.innerHTML = "Player X won";
		document.getElementById("but1").disabled = true;
		document.getElementById("but2").disabled = true;
		document.getElementById("but3").disabled = true;
		document.getElementById("but7").disabled = true;
		document.getElementById("but8").disabled = true;
		document.getElementById("but9").disabled = true;
		window.alert('Player X won');
	}

	else if ((but1 == '0' || but1 == '0') && (but2 == '0' || but2 == '0') && (but3 == '0' || but3 == '0')) {
		document.getElementById('playerTurnPrint')
			.innerHTML = "Player 0 won";
		document.getElementById("but4").disabled = true;
		document.getElementById("but5").disabled = true;
		document.getElementById("but6").disabled = true;
		document.getElementById("but7").disabled = true;
		document.getElementById("but8").disabled = true;
		document.getElementById("but9").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((but1 == '0' || but1 == '0') && (but4 == '0' || but4 == '0') && (but7 == '0' || but7 == '0')) {
		document.getElementById('playerTurnPrint')
			.innerHTML = "Player 0 won";
		document.getElementById("but2").disabled = true;
		document.getElementById("but3").disabled = true;
		document.getElementById("but5").disabled = true;
		document.getElementById("but6").disabled = true;
		document.getElementById("but8").disabled = true;
		document.getElementById("but9").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((but7 == '0' || but7 == '0') && (but8 == '0' || but8 == '0') && (but9 == '0' || but9 == '0')) {
		document.getElementById('playerTurnPrint')
			.innerHTML = "Player 0 won";
		document.getElementById("but1").disabled = true;
		document.getElementById("but2").disabled = true;
		document.getElementById("but3").disabled = true;
		document.getElementById("but4").disabled = true;
		document.getElementById("but5").disabled = true;
		document.getElementById("but6").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((but3 == '0' || but3 == '0') && (but6 == '0' || but6 == '0') && (but9 == '0' || but9 == '0')) {
		document.getElementById('playerTurnPrint')
			.innerHTML = "Player 0 won";
		document.getElementById("but1").disabled = true;
		document.getElementById("but2").disabled = true;
		document.getElementById("but4").disabled = true;
		document.getElementById("but5").disabled = true;
		document.getElementById("but7").disabled = true;
		document.getElementById("but8").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((but1 == '0' || but1 == '0') && (but5 == '0' || but5 == '0') && (but9 == '0' || but9 == '0')) {
		document.getElementById('playerTurnPrint')
			.innerHTML = "Player 0 won";
		document.getElementById("but2").disabled = true;
		document.getElementById("but3").disabled = true;
		document.getElementById("but4").disabled = true;
		document.getElementById("but6").disabled = true;
		document.getElementById("but7").disabled = true;
		document.getElementById("but8").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((but3 == '0' || but3 == '0') && (but5 == '0' || but5 == '0') && (but7 == '0' || but7 == '0')) {
		document.getElementById('playerTurnPrint')
			.innerHTML = "Player 0 won";
		document.getElementById("but1").disabled = true;
		document.getElementById("but2").disabled = true;
		document.getElementById("but4").disabled = true;
		document.getElementById("but6").disabled = true;
		document.getElementById("but8").disabled = true;
		document.getElementById("but9").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((but2 == '0' || but2 == '0') && (but5 == '0' || but5 == '0') && (but8 == '0' || but8 == '0')) {
		document.getElementById('playerTurnPrint')
			.innerHTML = "Player 0 won";
		document.getElementById("but1").disabled = true;
		document.getElementById("but3").disabled = true;
		document.getElementById("but4").disabled = true;
		document.getElementById("but6").disabled = true;
		document.getElementById("but7").disabled = true;
		document.getElementById("but9").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((but4 == '0' || but4 == '0') && (but5 == '0' || but5 == '0') && (but6 == '0' || bu6 == '0')) {
		document.getElementById('playerTurnPrint')
			.innerHTML = "Player 0 won";
		document.getElementById("but1").disabled = true;
		document.getElementById("but2").disabled = true;
		document.getElementById("but3").disabled = true;
		document.getElementById("but7").disabled = true;
		document.getElementById("but8").disabled = true;
		document.getElementById("but9").disabled = true;
		window.alert('Player 0 won');
	}

	else if ((but1 == 'X' || but1 == '0') && (but2 == 'X'
		|| but2 == '0') && (but3 == 'X' || but3 == '0') &&
		(but4 == 'X' || but4 == '0') && (but5 == 'X' ||
		but5 == '0') && (but6 == 'X' || but6 == '0') &&
		(but7 == 'X' || but7 == '0') && (but8 == 'X' ||
		but8 == '0') && (but9 == 'X' || but9 == '0')) {
			document.getElementById('playerTurnPrint')
				.innerHTML = "Match Tie";
			window.alert('Match Tie');
	}
	else {

		// We will now print the result generated from the above conditions
		if (flag == 1) {
			document.getElementById('playerTurnPrint')
				.innerHTML = "Player X Turn";
		}
		else {
			document.getElementById('playerTurnPrint')
				.innerHTML = "Player 0 Turn";
		}
	}
}

// Reset button functionality
function resetFunction() {
	location.reload();
	document.getElementById('but1').value = '';
	document.getElementById("but2").value = '';
	document.getElementById("but3").value = '';
	document.getElementById("but4").value = '';
	document.getElementById("but5").value = '';
	document.getElementById("but6").value = '';
	document.getElementById("but7").value = '';
	document.getElementById("but8").value = '';
	document.getElementById("but9").value = '';

}

flag = 1;
function winnerFuntion1() {
	if (flag == 1) {
		document.getElementById("but1").value = "X";
		document.getElementById("but1").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("but1").value = "0";
		document.getElementById("but1").disabled = true;
		flag = 1;
	}
}

function winnerFuntion2() {
	if (flag == 1) {
		document.getElementById("but2").value = "X";
		document.getElementById("but2").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("but2").value = "0";
		document.getElementById("but2").disabled = true;
		flag = 1;
	}
}

function winnerFuntion3() {
	if (flag == 1) {
		document.getElementById("but3").value = "X";
		document.getElementById("but3").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("but3").value = "0";
		document.getElementById("but3").disabled = true;
		flag = 1;
	}
}

function winnerFuntion4() {
	if (flag == 1) {
		document.getElementById("but4").value = "X";
		document.getElementById("but4").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("but4").value = "0";
		document.getElementById("but4").disabled = true;
		flag = 1;
	}
}

function winnerFuntion5() {
	if (flag == 1) {
		document.getElementById("but5").value = "X";
		document.getElementById("but5").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("but5").value = "0";
		document.getElementById("but5").disabled = true;
		flag = 1;
	}
}

function winnerFuntion6() {
	if (flag == 1) {
		document.getElementById("but6").value = "X";
		document.getElementById("but6").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("but6").value = "0";
		document.getElementById("but6").disabled = true;
		flag = 1;
	}
}

function winnerFuntion7() {
	if (flag == 1) {
		document.getElementById("but7").value = "X";
		document.getElementById("but7").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("but7").value = "0";
		document.getElementById("but7").disabled = true;
		flag = 1;
	}
}

function winnerFuntion8() {
	if (flag == 1) {
		document.getElementById("but8").value = "X";
		document.getElementById("but8").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("but8").value = "0";
		document.getElementById("but8").disabled = true;
		flag = 1;
	}
}

function winnerFuntion9() {
	if (flag == 1) {
		document.getElementById("but9").value = "X";
		document.getElementById("but9").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("but9").value = "0";
		document.getElementById("but9").disabled = true;
		flag = 1;
	}
}