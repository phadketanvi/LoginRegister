const btn = document.getElementById("btn");

let show_err = document.querySelector(".show-err");

btn.addEventListener('click', function(e) {
    e.preventDefault();
    let email = document.querySelectorAll('input')[0].value.trim();
    let password  = document.querySelectorAll('input')[1].value.trim();
    let checkUser = JSON.parse(localStorage.getItem("userData"));
    let success_tracker = [];
    if(checkUser == null) {
        show_err.innerHTML = "You don't have an account. Please Sign Up.";
    } else {
        for(let i = 0; i < checkUser.length; i++){
            if(checkUser[i].email == email && checkUser[i].password == password){
                success_tracker.push(checkUser[i].name, email, password);
                break;
            }
        }
        if(success_tracker.length > 0){
            let userDetail = {
            'name' : success_tracker[0],
            'email' : success_tracker[1]
            }

            localStorage.setItem("user", JSON.stringify(userDetail));
            window.location.href = "index.html";
        }else{
            show_err.innerHTML = "You don't have an account. Please Sign Up.";
            document.querySelectorAll('input')[0].value = "";
            document.querySelectorAll('input')[1].value = "";
        }
    }
})