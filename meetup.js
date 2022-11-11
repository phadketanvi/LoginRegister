//function for logout button , upon clicking on the logout button it will redirect the user back to the login page
let btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    localStorage.removeItem("user");
    window.location.href = "login.html";
});

var topicsList = [{
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

//we have defined a list of items we are showing on the cards for different topics to chat about and then first we are setting them to JSON data to string format and then fetching 
//each key from the entire list of topics we have defined. looping through the list and then adding those topic items inside our html elements.
window.addEventListener('load', () => {
    localStorage.setItem("topicsList", JSON.stringify(topicsList));
    let topic = JSON.parse(localStorage.getItem("topicsList"))
    for (let i = 0; i < topic.length; i++) {
        addTopics(topic[i]);
    }
});

// functions to display the topic cards shown on the meetup webpage for different pages upon clicking join now and showing in proper formats.
function addTopics(topic) {
    let item = document.createElement('div');
    let topicImage = document.createElement('img');
    let topicName = document.createElement('p');
    let topicBtn = document.createElement('button');
    let topicBtnDiv = document.createElement('div');
    let maindiv = document.getElementById("items");


    item.classList.add("item");


    topicBtn.innerHTML = "Join Now";
    if (topic.name == "Movies") {
        topicBtn.onclick = function() {
            window.location.href = "moviesChatbox.html";
        }
    } else if (topic.name == "Sports") {
        topicBtn.onclick = function() {
            window.location.href = "sportsChatbox.html";
        }
    } else if (topic.name == "Fashion") {
        topicBtn.onclick = function() {
            window.location.href = "fashionChatbox.html";
        }
    } else if (topic.name == "Fitness") {
        topicBtn.onclick = function() {
            window.location.href = "fitnessChatbox.html";
        }
    } else if (topic.name == "News") {
        topicBtn.onclick = function() {
            window.location.href = "newsChatbox.html";
        }
    } else if (topic.name == "Adventure") {
        topicBtn.onclick = function() {
            window.location.href = "adventureChatbox.html";
        }
    }

    maindiv.appendChild(item);
    item.appendChild(topicImage);
    item.appendChild(topicName);
    item.appendChild(topicBtnDiv);
    topicBtnDiv.appendChild(topicBtn);
    topicImage.src = topic.image;
    topicName.innerHTML = topic.name;
}