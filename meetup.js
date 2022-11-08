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
            name: "Sports",
            image: "Images/Sports.jpeg"
        },
        {
            name: "Fashion",
            image: "Images/Fashion.jpeg"
        },
        {
            name: "Fitness",
            image: "Images/Fitness.jpeg"
        },
        {
            name: "Movies",
            image: "Images/Movies.jpeg"
        },
        {
            name: "Adventure",
            image: "Images/Adventure.jpeg"
        },
        {
            name: "News",
            image: "Images/News.jpeg"
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
    btn1.innerHTML = "Join Now";
    btn1.onclick= function(){
        window.open('https://discord.gg/bDqAh5gn', '_blank');
    }
    maindiv.appendChild(item);
    item.appendChild(img);
    item.appendChild(ptag1);
    item.appendChild(btnsdiv);
    btnsdiv.appendChild(btn1);
    img.src=data.image;
    ptag1.innerHTML = data.name;
}