let logInDocs = document.getElementById("loginButtonInPage")

let userIsLoggedIn = false
let redirectTextAfterLogIn = document.getElementById("h2LoginForm")
let userNameFnction = document.getElementById("userName").value
let passWordFnction = document.getElementById("passWord").value

function logInButtonOnclick() {
    logInDocs.onclick = redirectTextAfterLogIn.innerText = 'Redirecting...';
    const fetchFromZeo = fetch('https://www.zeoworks.com')
    console.log(fetchFromZeo)
    logInDocs.onclick = window.location.href = 'index.html'
}


function loginRedirect() {
    window.location.href = 'https://wowe.vercel.app/login.html'
}

function signUpRedirect() {
    window.location.href = 'https://wowe.vercel.app/signup.html'
}

const loginBtnInPage = document.getElementById("loginButtonInPage")

function redirectLoggedIn() {
    if(userNameFnction.value = null) {
        alert("Please provide a valid username.")
    }

    if(passWordFnction.value = null) {
        alert("Please provide a valid password.")
    }
    window.location.href = 'index.html'
}
