//This is the function which is first called when body of the html page is load. Here after checking the condition for storing key values we are setting the values and 
//saving it to the appropriate function and then mapping that to local storage

function beginOfficeBingo() {
    if (storageKeyVal()) {
        save = function(key, value) {
            localStorage.setItem(key, value);
        };
        load = function(key) {
            return localStorage.getItem(key);
        };
    }

    var bingocell = load("officeBingoFun.grid");
    if (bingocell) {
        var officeBingoCell = document.getElementById("grid");
        officeBingoCell.innerHTML = bingocell;
        loadGameState();
    }
}

// We have taken localstorage for storing the information (local storage works similar to the session)
function storageKeyVal() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}

// This function is creating 5*5 grid and checking the current states of the bingo cards we are showing if its highlighted or not with help of html elements and cells
function loadGameState() {
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++) {
            var bingoOfficeId = 'cell_' + j + '_' + i;
            var checkBingo = document.getElementById("chk-" + bingoOfficeId);
            checkBingo.checked = (load("officeBingoFun." + bingoOfficeId) == 'true');
            var bingoValue = document.getElementById(bingoOfficeId);
            bingoValue.className = (checkBingo.checked) ? "highlight" : "";
        }
    }
}

// Here we have defined for regenerating the bingo cards grid after user selects few option
// and if they want to reset the bingo game then they can do it by clicking on the regenerate button. with the help of html element we are giving the alert 
//and we are using the loops to see if user has checked the box or not and based on the condition it will update the bingo cards. 
//Here we have taken help of table for checking each cell.

function generateOfficeBingo() {
    var usedBingoCard = [];

    var officeBingoCell = document.getElementById("grid");

    if (officeBingoCell.innerHTML && !confirm("Do you really want to reset the Bingo Cards?"))
        return;

    var html = '<table border="2">';
    for (var i = 0; i < 5; i++) {
        html += "<tr style='outline: thin solid'>"
        for (var j = 0; j < 5; j++) {
            do {
                var temp = Math.round(Math.random() * (bingoCards.length - 1));
                var bingoCard = bingoCards[temp];
            } while (usedBingoCard.indexOf(bingoCard) >= 0);
            usedBingoCard.push(bingoCard);
            html += '<td id="cell_' + j + '_' + i + '"><label><input id="chk-cell_' + j + '_' + i + '" type="checkbox" onclick="officeBingoCardClicked(\'cell_' + j + '_' + i + "')\">" + bingoCard + "</label></td>";
        }
        html += "</tr>"
    }
    html += "</table>";
    officeBingoCell.innerHTML = html;
    save("officeBingoFun.grid", html);
    officeBingoGame();
}

// This function is used inside generate game to create 5*5 grid and save it to the local storage with given file name with help of various local variables.
function officeBingoGame() {
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++) {
            var gridBingoId = 'cell_' + j + '_' + i;
            var bingoCheckId = document.getElementById("chk-" + gridBingoId);
            save("officeBingoFun." + gridBingoId, bingoCheckId.checked);
        }
    }
}

//On click event inside generate office bingo game, when the user click on a card this function checks by mapping to the loop we have used 
//inside generate function and call this function to highlight the bingo card selected.

function officeBingoCardClicked(id) {
    var bingoCheckId = document.getElementById("chk-" + id);
    var getbingoId = document.getElementById(id);
    getbingoId.className = (bingoCheckId.checked) ? "highlight" : "";
    officeBingoGame();
}


//This is the function which is first called when body of the html page is load. Here after checking the condition for storing key values we are setting the values and 
//saving it to the appropriate function and then mapping that to local storage

bingoCards = [
    "Google your office building's address.",
    "Slack a coworker who is 5 feet away.",
    "Wore PJ bottoms while attending a conference.",
    "Celebrated a teammate's birthday virtually.",
    "Slept in and started work late.",
    "Shared a virtual lunch with a colleague.",
    "Worked from the sofa.",
    "Forgot the attachment while sending an email.",
    "Had a meeting interrupted by a pet or a family member.",
    "Showed up late to a virtual meeting.",
    "Took a break to play an online game.",
    "Did chair yoga.",
    "Created a work day playlist.",
    "Said 'My internet is down' during a video call.",
    "Did eye strain relief excercises.",
    "Have more food than tools on the desk.",
    "Said or heard 'Can you hear me now'.",
    "Worked from another place other than home.",
    "Had power/ internet cutout during a zoom call.",
    "Didn't shower before starting a work day.",
    "The boss tells an unfunny joke.",
    "The boss laughs at his/ her own joke.",
    "Your office buddy asks for a quick 'meeting' to gossip.",
    "Someone hangs up on a client by mistake.",
    "Has worked here for 3+ years.",
    "Prefers tea over coffee.",
    "Born in the same month as team manager.",
    "Sent a GIF to a coworker.",
    "Attended a campus or company wide meeting.",
    "Felt overwhelmed and watched a mental health video to cope with the work stress."
];