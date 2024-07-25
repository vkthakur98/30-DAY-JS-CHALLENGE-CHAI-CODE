// Activity 4
//Task 7
import axios from "axios";
axios.get("https://api.github.com/users/vkthakur98")
.then((resp)=>{
   console.log(resp)
})
.catch(err=>console.log(err))

