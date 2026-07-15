console.log("Test")

let loginButton = document.getElementById('login-button');
loginButton.addEventListener('click', handle_login);

function handle_login(){
    let password_input = document.querySelector("#password-input").value;
    let real_password = 'TwinkleTwinkle';
    if(real_password === password_input);{
        alert("OH YEAHHHHHHHHHH");
    }
}