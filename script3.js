//login
let get_data = document.getElementById("get-data")
let inp_username = document.getElementById("username");
let inp_email = document.getElementById("email");
let inp_psw = document.getElementById("psw");
let inp_psw_repeat = document.getElementById("psw-repeat");
let login = document.getElementById("login");
let text_user = document.getElementById("text-user");
let text_email = document.getElementById("text-email");
let text_psw = document.getElementById("text-psw");
let text_psw_repeat = document.getElementById("text-psw-repeat");
let result = document.getElementById("result")

function apiFunGet() {
    login.addEventListener("click", () => {
        let enteredUsername = inp_username.value ;
        let enteredEmail = inp_email.value ;
        let enteredPsw = inp_psw.value;

        // localStorage.clear()
        localStorage.setItem("username",inp_username.value);
        fetch('https://655267bd5c69a7790329fff9.mockapi.io/sign', {
                method: "get"
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                for (let i = 0; i < data.length; i++) {
                    if (enteredUsername === data[i].username  && enteredPsw === data[i].psw && enteredEmail === data[i].email  ) {
                        result.innerHTML ='Login successful!';
                        result.style.color="#335F42"
                        window.location.href = 'books.html';
                    }
                    else {
                        result.innerHTML ='Invalid credentials. Please try again.';
                        result.style.color="#960724"

                      }
                      if( enteredUsername === "Admin" && enteredPsw === "Admin123"){
                        result.innerHTML ='Login successful!';
                        result.style.color="#335F42"
                        window.location.href = 'books.html';

                      }
                }
            })
            .catch((err) => console.log(`The error is ${err}`));
    });
}
 apiFunGet();