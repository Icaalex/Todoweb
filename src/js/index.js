//Authenticate user signup
const form = document.getElementById('signup-form');
const msg =document.getElementById('msg');

form.addEventListener("submit", async(e)=>{
    e.preventDefault();

    const user = {
        name:document.getElementById("name").value.trim(),
        email : document.getElementById("email").value.trim(),
        password : document.getElementById("password").value.trim()
    }

    //send data to backend
    const res =  await fetch("https://todo-app-backend-phi.vercel.app/api/users/signup",{
        method:"POST",
        headers:{
            "content-type":"application/json"},
        body:JSON.stringify(user),
        }

    )
    const data = await res.json();
    if (res.ok) {
      msg.innerHTML = "Account created successfully ✔";
      msg.classList.add("text-green-600");
    } else {
      msg.innerHTML = data.error;
      msg.classList.add("text-red-600");
    }

})

//mongodb+srv://Uju:Whid#0000@cluster0.6wrsodb.mongodb.net/?appName=Cluster0