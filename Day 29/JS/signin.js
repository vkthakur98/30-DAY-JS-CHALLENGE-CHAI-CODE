function signIn()
{
    user = {}
    user.username = email.value
    user.password = password.value
    localStorage.setItem("user",JSON.stringify(user))
    location.href ="index.html"   
}


document.getElementById("signin_form").onsubmit = (e)=>{
e.preventDefault()
signIn()
}


