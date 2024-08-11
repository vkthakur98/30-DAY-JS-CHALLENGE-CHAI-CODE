let userdata = localStorage.getItem("suser")
let user = JSON.parse(userdata)
const edit_profile_overlay = document.querySelector(".edit-profile-overlay")
console.log(user)
function showProfileData()
{
    username.innerHTML = user.name
    h1_name.innerHTML = user.name
    e_uid.innerHTML = user.email
    email.innerHTML = user.email
}

edit_btn.addEventListener("click",()=>{
    edit_profile_overlay.style.display="flex"
    u_uid.value = user.name;
    u_email.value = user.email

})

save_btn.addEventListener("click",()=>{
    user.name =  u_uid.value;
    user.email = u_email.value;
    localStorage.setItem("suser",JSON.stringify(user))  
    edit_profile_overlay.style.display="none"
})

showProfileData()

window.addEventListener("click",(e)=>{
    if(e.target===edit_profile_overlay)
    {
        edit_profile_overlay.style.display="none"
    }
})