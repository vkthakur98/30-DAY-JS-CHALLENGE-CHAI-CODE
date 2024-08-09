const add_task_modal_add = document.getElementsByClassName("add-new-task-overlay")[0];
const add_task_modal_update = document.getElementsByClassName("add-new-task-overlay")[1];
const confirm_delete_overlay  = document.getElementsByClassName("confirm_delete_overlay")[0];
  

let all_tasks = [];

function addTask(title, desc, due_date) {
  let task = {};
  task.title = title;
  task.desc = desc;
  task.due_date = due_date;
  all_tasks.push(task);
  console.log(all_tasks);
  add_task_modal_add.style.display = "none";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    task_title.value !== "" &&
    task_desc.value !== "" &&
    task_date.value !== ""
  ) 
  {
    addTask(task_title.value, task_desc.value, task_date.value);
    showTasks();
  } else {
    alert("Please enter some task values");
  }
});

form_u.addEventListener("submit",(e)=>{
    e.preventDefault()
    updateTask(idno_u.value,task_title_u.value,task_desc_u.value,task_date_u.value)  
})

function showTasks() {
    document.getElementById("new-added-task").innerHTML = null
  for (let i = 0; i < all_tasks.length; i++) {
    let task_div = document.createElement("div");
    task_div.classList.add("task-div");

    for (let j = 0; j <= 6; j++) {
      let btn_edit = document.createElement("button")
      let btn_remove = document.createElement("button")
      let btn_done = document.createElement("button")
      btn_edit.addEventListener("click",(e)=>{
        add_task_modal_update.style.display = "flex"
        let idno = e.target.getAttribute("idno")
        task_title_u.value = all_tasks[idno].title
        task_desc_u.value = all_tasks[idno].desc
        task_date_u.value = all_tasks[idno].due_date
        idno_u.value = idno       
      })

      btn_remove.addEventListener("click",(e)=>{
        let idno = e.target.getAttribute("idno")
            confirm_delete_overlay.style.display = "flex"
            document.querySelector(".del-btn").addEventListener("click",()=>{
                document.getElementsByClassName("task-div")[parseInt(idno)+1].style.display= "none"
                confirm_delete_overlay.style.display="none"
            })
            document.querySelector(".cancel-btn").addEventListener("click",()=>{
            confirm_delete_overlay.style.display = "none"
            })
      })

      btn_done.addEventListener("click",(e)=>{
        let idno = e.target.getAttribute("idno")
            document.getElementsByClassName("task-div")[parseInt(idno)+1].style.backgroundColor="#BEC6A0"
      })

      btn_edit.innerHTML = "Edit"
      btn_edit.setAttribute("idno",i)
      btn_edit.classList.add("btn-edit")
      btn_remove.innerHTML = "Delete"
      btn_remove.classList.add("delete-btn")
      btn_remove.setAttribute("idno",i)
      btn_done.innerHTML = "Done"
      btn_done.classList.add("done-btn")
      btn_done.setAttribute("idno",i)
      

      let span = document.createElement("span");
      if (j == 0) {
        span.innerHTML = i;
      }
      if (j == 1) {
        span.innerHTML = all_tasks[i].title;
      }
      if (j == 2) {
        span.innerHTML = all_tasks[i].desc;
      }
      if (j == 3) {
        span.innerHTML = all_tasks[i].due_date;
      }
      if (j == 4) {
        span.appendChild(btn_edit)
      }

      if (j == 5) {
        span.appendChild(btn_remove)
      }

      if (j == 6) {
        span.appendChild(btn_done)
      }
    task_div.appendChild(span);

    }
    document.getElementById("new-added-task").appendChild(task_div);
  }
}

function updateTask(idno,title,desc,due_date)
{
    all_tasks[idno].title =title
    all_tasks[idno].desc = desc;
    all_tasks[idno].due_date = due_date
  add_task_modal_update.style.display = "none";
    showTasks()
}

document.querySelector(".add-task-btn").addEventListener("click", () => {
  add_task_modal_add.style.display = "flex";
});

window.addEventListener("click", (e) => {
  if (e.target === add_task_modal_add) {
    add_task_modal_add.style.display = "none";
  }
  else if (e.target === add_task_modal_update) {
    add_task_modal_update.style.display = "none";
  }
});
