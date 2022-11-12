window.addEventListener('load', function() {
    let getOnLoad = JSON.parse(localStorage.getItem("userData"));
        if(getOnLoad != null) { 
            localStorage.setItem("reLoad", JSON.stringify(getOnLoad));
            let checkUser = JSON.parse(localStorage.getItem("reLoad"));
            checkUser.forEach(function(item, index) {
                users.push(item)
            })
            localStorage.removeItem("reLoad")

        }
})


users = [];
const submit = document.getElementById("btn");
submit.addEventListener('click', function(e) {
    e.preventDefault();
    
    let name = document.querySelectorAll('input')[0].value.trim();
    let email = document.querySelectorAll('input')[1].value.trim();
    let password = document.querySelectorAll('input')[2].value.trim();


    let errors = [];
    
    if(name.length == 0) {
        errors.push("Please Enter Your Name");
    }
    if(email.length == 0) {
        errors.push("Please Enter Your Email");
    }
    if(password.length == 0) {
        errors.push("Please Enter Your Password");
    }
    if(password.length <8) {
        alert('Please enter password with more than 8 characters!');
    }

    let show_err = document.querySelector(".show-err");
    
    if(errors.length != 0) {
        for(let i = 0; i < errors.length; i++) {

           show_err.innerHTML =  errors.join("<br>");
        }
    }
    
    if(errors.length == 0 ) {
        
        let makeUserNull = JSON.parse(localStorage.getItem("userData"));

        if(makeUserNull == null) {

            let person = {
                'name' : name,
                'email' : email,
                'password' : password
            }

            users.push(person);

            localStorage.setItem("userData", JSON.stringify(users));

            show_err.innerHTML = "Registered Successfully.";
            document.querySelectorAll('input')[0].value = "";
            document.querySelectorAll('input')[1].value = "";
            document.querySelectorAll('input')[2].value = "";
        } else {

            let success_tracker = [];

            for(let i = 0; i < makeUserNull.length; i++){

				if(makeUserNull[i].email == email){
					success_tracker.push(makeUserNull[i].email);
					break;
				}
			}

            if(success_tracker.length > 0){

                show_err.innerHTML = `User with the ${email} Already Exit.`;
                document.querySelectorAll('input')[0].value = "";
                document.querySelectorAll('input')[1].value = "";
                document.querySelectorAll('input')[2].value = "";

			}else{
				let person = {
                    'name' : name,
                    'email' : email,
                    'password' : password
                }
    
                users.push(person);
    
                localStorage.setItem("userData", JSON.stringify(users));
    
                show_err.innerHTML = "Registered Succesfully";
                document.querySelectorAll('input')[0].value = "";
                document.querySelectorAll('input')[1].value = "";
                document.querySelectorAll('input')[2].value = "";

                return true;

			}
            
        }

    }
    


})