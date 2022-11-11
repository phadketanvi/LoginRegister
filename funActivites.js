// Functionality for logout button
let btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    localStorage.removeItem("user");
    window.location.href = "login.html";
});

//List of various activities for user to choose from
var activitylist = 
    [
        {
            name: "Tic Tac Toe",
            image: "Images/TicTacToe.jpeg"
        },
        {
            name: "Bingo",
            image: "Images/bingo.jpeg"
        },
        {
            name: "Quiz",
            image: "Images/quiz.jpeg"
        },
        {
            name: "Sudoku",
            image: "Images/sudoku.jpeg"
        }
    ];

// Function to load all the activities available
window.addEventListener('load', ()=>{
    localStorage.setItem("activitylist", JSON.stringify(activitylist));
    let activity = JSON.parse(localStorage.getItem("activitylist"))
    for(let i = 0; i<activity.length; i++){
        addActivities(activity[i]);
    }
});

// Function to add buttons for all activities
function addbtn(activity, activityBtn){    
    if (activity.name == "Tic Tac Toe") {
        activityBtn.onclick= function(){
            window.location.href = "TicTacToe.html";
        }
    } 
    else if (activity.name == "Bingo") {
        activityBtn.onclick= function(){
            window.location.href = "bingo.html";
        }
    }  
    else if (activity.name == "Quiz") {
        activityBtn.onclick= function(){
            window.location.href = "quiz.html";
        }
    }  
    else if (activity.name == "Sudoku") {
        activityBtn.onclick= function(){
            window.location.href= "sudoku.html";
        }
    }   
}

// Function to create various activity cards
function addActivities(activity){
    let activityName = document.createElement('p');
    let activityImage = document.createElement('img'); 
    let activityBtn = document.createElement('button');
    let activityBtnDiv = document.createElement('div');
    let item = document.createElement('div');
    let maindiv = document.getElementById("items");
    item.classList.add("item");
   
    addbtn(activity, activityBtn);
    activityBtn.innerHTML = "Join Now";
    activityBtn.onclick= function(){
        addbtn(activity, activityBtn);
    }
    maindiv.appendChild(item);
    item.appendChild(activityImage);
    item.appendChild(activityName);
    item.appendChild(activityBtnDiv);
    activityBtnDiv.appendChild(activityBtn);
    activityImage.src=activity.image;
    activityName.innerHTML = activity.name;
}