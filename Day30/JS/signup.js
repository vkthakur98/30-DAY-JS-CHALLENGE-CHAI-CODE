function showSideNotification(emsg)
{
    msg.innerHTML = emsg;
    document.querySelector(".notify-dialog-box").style.display="block"
    setTimeout(()=>{document.querySelector(".notify-dialog-box").style.display="none"
    },3000)
    
}

document.querySelector("button").addEventListener("click",(e)=>{
    e.preventDefault()
    if(fname.value == '')
    {
        showSideNotification("Please enter a name!")
    }
    else if(email.value == '')
    {
        showSideNotification("Please enter your email!")
    }
    else if(password.value == '')
    {
        showSideNotification("Please enter a valid password!")
    }

    if(password.value !== r_password.value)
    {
        showSideNotification("Please confirm your password!")
    }

    let user = {}
    user.name = fname.value;
    user.email = email.value;
    user.password = password.value;
    localStorage.setItem("suser",JSON.stringify(user))
    console.log(user)

})
