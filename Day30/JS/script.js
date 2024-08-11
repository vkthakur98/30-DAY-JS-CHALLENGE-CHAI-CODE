let posts_data = localStorage.getItem("posts")
let posts = JSON.parse(posts_data)
let prev_img_src;
console.log(posts)
const create_post_overlay = document.querySelectorAll(".create-post-overlay")
let nf_data = localStorage.getItem("notifications")
let notifications = JSON.parse(nf_data)
let user;
function setUser()
{
    let userdata = localStorage.getItem("user")
    user = JSON.parse(userdata)
    username.innerHTML = user.username;
}
setUser()


function openComments(i)
{
    document.getElementsByClassName("create-post-overlay")[1].style.display="flex"
    comment_img.src = posts[i].image
    comment_btn.setAttribute("c_count",i)
}

comment_btn.addEventListener("click",(e)=>{
    let c = comment.value;
    let ind = e.target.getAttribute("c_count")
    posts[ind].comments.push(c)
    localStorage.setItem("posts",JSON.stringify(posts))
    let notification = {}
    notification.user = user.username;
    notification.content = user.username+" comented on your post"
    notifications.push(notification)
    localStorage.setItem("notifications",JSON.stringify(notifications))
    showComments()
    generateNotifications()
})

function generateNotifications()
{
    const notification_parent = document.querySelector(".all-notifications")
    notification_parent.innerHTML = ''
    notifications.forEach((note)=>{
        let notification  = document.createElement("div");
        notification.innerHTML = `<div class="nf">
                    <div class="ui">
                        <img src="https://img.freepik.com/premium-vector/people-profile-graphic_24911-21373.jpg?w=740" alt="User Avatar">
                    </div>
                    <div>
                        <span>${note.content}</span>
                    </div>
                </div><br>`               
        notification_parent.append(notification)
    })
}

generateNotifications()

function likePost(i)
{
    posts[i].likes += 1;
    console.log(posts[i].likes)
    localStorage.setItem("posts",JSON.stringify(posts))
    let notification = {}
    notification.user = user.username;
    notification.content = user.username+" liked your post"
    notifications.push(notification)
    localStorage.setItem("notifications",JSON.stringify(notifications))
    renderPosts()
    generateNotifications()
}

document.querySelector(".status-update").addEventListener("click",()=>{
    create_post_overlay[0].style.display="flex"
    setUser()
})

post_btn.addEventListener("click",(e)=>{
    let post = {}
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let time = hours+":"+minutes
    post.username = username.innerHTML;
    post.post_caption = post_caption.value;
    post.image = prev_img_src;
    post.timestamp = time;
    post.likes = 0;
    post.comments = [];
    post.caption = post_caption.value
    posts.push(post)
    create_post_overlay[0].style.display="none"
    localStorage.setItem("posts",JSON.stringify(posts))    
    renderPosts()
})

document.getElementById('image').addEventListener('change', function(event) {
    const file = event.target.files[0]; // Get the selected file

    if (file) {
        const reader = new FileReader();
        const img = document.createElement("img");
        img.setAttribute("height",100)
        img.setAttribute("width",100)
        document.getElementsByClassName("image-upload-file")[0].appendChild(img)
        reader.onload = function(e) {
            img.src = e.target.result; // Set the src attribute of the img element to the file's content
            prev_img_src = img.src
        };

       reader.readAsDataURL(file)
    }
});

    function showComments()
    {
        const comment_parent = document.getElementsByClassName("comments_data")[0]
        comment_parent.innerHTML  = ''
        posts.forEach((post,inde)=>{        
                post.comments.forEach((comment,index)=>{
                    const comment_element = document.createElement("div")
                    comment_element.innerHTML = 
                   ` <div class="single-comment">
                        <strong><span>${post.username}</span></strong><br>
                        <span>${post.comments[index]}</span>
                    </div>` 
                    comment_parent.appendChild(comment_element)              
                 })
        })
    }

    showComments()

function renderPosts() {
    const postsContainer = document.getElementsByClassName('posts')[0];
    postsContainer.innerHTML = '';


    posts.forEach((post,index) => {
        let r = Math.round(Math.random()*1000000)
        const postElement = document.createElement('div');
        postElement.className = 'post';

        postElement.innerHTML = `
            <div class="post-add" style="background-color:#${r}">
                            <div>
                                <strong><span>${post.username}</span></strong><br>
                            </div>
                            <div>
                                <span>${post.timestamp}</span><br>
                            </div>
                            <div>
                                <span>${post.caption}</span>
                            </div>
                        </div>
                        <img  src="${post.image}" alt="">
                        <div class="post-actions" style="background-color:#${r}">
                            <div onclick="likePost(${index})"><button >Like<i style="margin-left:5px;" class="fa fa-thumbs-up"></i><span id="myid${index}" style="margin-left:5px;">${post.likes}</span></button></div><div><button onclick="openComments(${index});" id=>Comment<i style="margin-left:5px;"  class="fa fa-comment"></i><span id="mycid${index}" style="margin-left:5px;">${post.comments.length}</span></button></div><div><button>Share<i style="margin-left:5px;"  class="fa fa-share"></i></button></div>
                        </div><br><br>
        `;

        postsContainer.appendChild(postElement);
    });
}




            
                      



renderPosts()


window.addEventListener("click",(e)=>{
    if(e.target == create_post_overlay[0])
    {
        create_post_overlay[0].style.display = "none"
    }

    if(e.target == create_post_overlay[1])
        {
            create_post_overlay[1].style.display = "none"
        }
})