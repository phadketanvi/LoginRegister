window.addEventListener('load', function() {
    let span1 = document.getElementById("username");
    const user = JSON.parse(localStorage.getItem("user"));
    const name = user.name;
    span1.innerHTML = " " + name + " ...!";
});


let btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    localStorage.removeItem("user");
    window.location.href = "login.html";
});

var productlist = 
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

window.addEventListener('load', ()=>{
    localStorage.setItem("productlist", JSON.stringify(productlist));
    let data = JSON.parse(localStorage.getItem("productlist"))

    console.log(data);
    
    for(let i = 0; i<data.length; i++){
        additems(data[i]);
    }
});

function addbtn(data, btn1){
    
    if (data.name == "Tic Tac Toe") {
        btn1.onclick= function(){
            window.location.href = "TicTacToe.html";
        }
    } 
    else if (data.name == "Bingo") {
        btn1.onclick= function(){
            window.location.href = "bingo.html";
        }
    }  
    else if (data.name == "Quiz") {
        btn1.onclick= function(){
            window.location.href = "quiz.html";
        }
    }  
    else if (data.name == "Sudoku") {
        btn1.onclick= function(){
            window.location.href= "sudoku.html";
        }
    }   
}


function additems(data){
    let item = document.createElement('div');
    let img = document.createElement('img');
    let ptag1 = document.createElement('p');
    let btnsdiv = document.createElement('div');
    let btn1 = document.createElement('button');
    item.classList.add("item");
    img.classList.add("product-img");
    ptag1.classList.add("nameofproduct");
    let maindiv = document.getElementById("items");
    
    addbtn(data, btn1);
    btn1.innerHTML = "Join Now";
    btn1.onclick= function(){
        addbtn(data, btn1);
    }
    maindiv.appendChild(item);
    item.appendChild(img);
    item.appendChild(ptag1);
    item.appendChild(btnsdiv);
    btnsdiv.appendChild(btn1);
    img.src=data.image;
    ptag1.innerHTML = data.name;
}