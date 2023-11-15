
    // signup 
    let inp_username = document.getElementById("username");
    let inp_email = document.getElementById("email");
    let inp_psw = document.getElementById("psw");
    let inp_psw_repeat = document.getElementById("psw-repeat");
    let signupbtn = document.getElementById("signupbtn");
    let text_user = document.getElementById("text-user");
    let text_email = document.getElementById("text-email");
    let text_psw = document.getElementById("text-psw");
    let text_psw_repeat = document.getElementById("text-psw-repeat");
    let result = document.getElementById("result")

    
    
    
    function validate() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (inp_username.value.length < 6) {
            text_user.innerText = "Username must be at least 6 characters long. Please try again.";
        }else {
            text_user.innerText = "";
        }

        if (!emailRegex.test(inp_email.value)) {
            text_email.innerText = "Invalid email format. Please enter a valid email address.";
        } else {
            text_email.innerText = "";
        }
    
        if (inp_psw.value.length < 9) {
            text_psw.innerText = "Password must be at least 9 characters long. Please try again.";
        } else {
            text_psw.innerText = "";
        }
    
        if (inp_psw.value !== inp_psw_repeat.value) {
            text_psw_repeat.innerText = "Passwords are different. Please try again.";
        } else {
            text_psw_repeat.innerText = "";
        }
    
        return (
            inp_username.value.length >= 6 &&
            emailRegex.test(inp_email.value) &&
            inp_psw.value.length >= 9 &&
            inp_psw.value === inp_psw_repeat.value
        );
    }
    
    // POST - Sign up 
    function apiFunPost() {
        signupbtn.addEventListener("click", () => {
            if (validate()) {
                let username = inp_username.value;
                let email = inp_email.value;
                let psw = inp_psw.value;
    
                fetch("https://655267bd5c69a7790329fff9.mockapi.io/sign", {
                    method: 'POST',
                    body: JSON.stringify({
                        username,
                        email,
                        psw
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    result.innerHTML ='Creating account successful!';
                        result.style.color="#335F42"
                        window.location.href = 'login.html';
    
                })
                .catch((error) => {
                    console.error('Error:', error);
                    result.innerHTML ='Error creating account. Please try again.';
                    result.style.color="#960724"
                });
            }
        });
    }
    apiFunPost();