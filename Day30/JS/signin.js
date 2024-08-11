let reg_user = localStorage.getItem("suser")
let current_user = JSON.parse(reg_user)


function showSideNotification(emsg)
{
    msg.innerHTML = emsg;
    document.querySelector(".notify-dialog-box").style.display="block"
    setTimeout(()=>{document.querySelector(".notify-dialog-box").style.display="none"
    },5000)
    
}

function signIn()
{
    user = {}
    user.username = current_user.name
    user.password = password.value
    localStorage.setItem("user",JSON.stringify(user))
    location.href ="index.html"
       
}


signin_form.addEventListener("submit",(e)=>{
    e.preventDefault()
    if(email.value == '')
        {
            showSideNotification("Please enter a valid email")
        }
        else if(password.value == '')
        {
           showSideNotification("Please enter a vaild password") 
        }
        else{

            signIn()
        }
    }) 


