window.addEventListener('load', function() {
    let var1 = document.getElementById("username");
    const user = JSON.parse(localStorage.getItem("user"));
    const name = user.name;
    var1.innerHTML = " " + name + " ...!";
});


let btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    localStorage.removeItem("user");
    window.location.href = "login.html";
});

var productlist = 
    [
        {
            name: "Meditation: At Home",
            image: "Images/mentalhealth.jpg"
        },
        {
            name: "Performing Yoga",
            image: "Images/yoga.jpg"
        },
        {
            name: "Healthy Items Cooking Tutorials",
            image: "Images/easy_cooking.jpg"
        },
		 {
            name: "Following Proper Food Diet",
            image: "Images/diet.jpg"
        }, 
		{
            name: "Refreshing Music",
            image: "Images/music.jpg"
        }, 
		{
            name: "Having a Perfect Sleep",
            image: "Images/sleep.jpg"
        }, 
		{
            name: "Standup Laughter Show",
            image: "Images/standup.jpg"
        },
		{
            name: "Avoid Depression",
            image: "Images/depression.jpg"
        }
    ];

window.addEventListener('load', ()=>{
    localStorage.setItem("productlist", JSON.stringify(productlist));
    let data = JSON.parse(localStorage.getItem("productlist"))
    console.log(data);
    for(let i = 0; i<data.length; i++){
        itadd(data[i]);
    }
});


function itadd(data){
    let item = document.createElement('div');
    let img = document.createElement('img');
    let taggingp = document.createElement('p');
    let maindivbutton = document.createElement('div');
    let btn1 = document.createElement('button');

    item.classList.add("item");
    img.classList.add("product-img");
    taggingp.classList.add("nameofproduct");
    let maindiv = document.getElementById("items");
    btn1.innerHTML = "View";
    if (data.name == "Meditation: At Home")
    {
        btn1.onclick= function(){
            window.location.href= "https://podcasts.google.com/feed/aHR0cDovL3RhcmFicmFjaC5saWJzeW4uY29tL3Jzcw/episode/YjZjMmU3MzQtMzY1ZS00ODFiLWE4OGEtNDM5MmQ1NmMzOThl?sa=X&ved=0CAgQuIEEahcKEwiAwMzrr6L7AhUAAAAAHQAAAAAQKQ";
        }
    }
    else if (data.name == "Performing Yoga")
    {
        btn1.onclick= function(){
            window.location.href= "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8xMDkxYjA0NC9wb2RjYXN0L3Jzcw/episode/NWIwMGI0YjcwODUxNDQyNGIyMDcwMzc3MmM2NzExMWQ?sa=X&ved=0CAgQuIEEahcKEwiAwMzrr6L7AhUAAAAAHQAAAAAQIQ";
        }
    }
    else if (data.name == "Healthy Items Cooking Tutorials")
    {
        btn1.onclick= function(){
            window.location.href= "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS8yMzk0MjUucnNz?sa=X&ved=0CBsQ27cFahcKEwiAwMzrr6L7AhUAAAAAHQAAAAAQFg";
        }
    }
	else if (data.name == "Following Proper Food Diet")
    {
        btn1.onclick= function(){
            window.location.href= "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkLnBvZGJlYW4uY29tL3N1cHBvcnQ4OS9mZWVkLnhtbA/episode/ZTFjNzc2NmQtYzRmZS00OWY0LTlmNzMtMDVhZDVkNWVmMjRh?sa=X&ved=0CAgQuIEEahcKEwiAwMzrr6L7AhUAAAAAHQAAAAAQCA";
        }
    }
	else if (data.name == "Refreshing Music")
    {
        btn1.onclick= function(){
            window.location.href= "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5odWJob3BwZXIuY29tLzA4YmFiZTc3NGYyNDc4MGZkNzFiY2E3NTFiMjAzYzY1LnJzcw/episode/OWZiMGEzYjE5MGYxNjRmM2Q4YzhkMGIxMzcxNWVmNjY?sa=X&ved=0CAgQuIEEahcKEwiAwMzrr6L7AhUAAAAAHQAAAAAQMA";
        }
    }
	else if (data.name == "Having a Perfect Sleep")
    {
        btn1.onclick= function(){
            window.location.href= "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8xMzFmNTBjOC9wb2RjYXN0L3Jzcw/episode/NWU2OGY0NzEtMWZkNy00ZWFhLTk3NzktNzhmMjg4Zjc2ODY4?sa=X&ved=0CAgQuIEEahcKEwiAwMzrr6L7AhUAAAAAHQAAAAAQNg";
        }
    }
	else if (data.name == "Standup Laughter Show")
    {
        btn1.onclick= function(){
            window.location.href= "https://podcasts.google.com/feed/aHR0cHM6Ly93d3cuc3ByZWFrZXIuY29tL3Nob3cvNDgzNjE0Mi9lcGlzb2Rlcy9mZWVk?sa=X&ved=0CAcQrrcFahcKEwiAwMzrr6L7AhUAAAAAHQAAAAAQPA";
        }
    }
	else if (data.name == "Avoid Depression")
    {
        btn1.onclick= function(){
            window.location.href= "https://podcasts.google.com/search/how%20to%20avoid%20depression";
        }
    }
    maindiv.appendChild(item);
    item.appendChild(img);
    item.appendChild(taggingp);
    maindivbutton.appendChild(btn1);
    item.appendChild(maindivbutton);
    img.src=data.image;
    taggingp.innerHTML = data.name;
}

function funcdone() {
    var var6, var4, a, i, var5;
    var6 = document.getElementById("myInput");
    var4 = var6.value.toUpperCase();
    maindiv = document.getElementById("items");
    var3 = document.getElementsByClassName("item");
    console.log(var3)
    for (i = 0; i < var3.length; i++) {
        a = var3[i].getElementsByTagName("p")[0];
        var5 = a.innerText;
        console.log(var5)
        if (var5.toUpperCase().indexOf(var4) > -1) {
            var3[i].style.display = "";
        } else {
            var3[i].style.display = "none";
        }
    }
}