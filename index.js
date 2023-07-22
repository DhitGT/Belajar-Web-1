const btn = document.querySelector(".btn-nav")
const sidebar = document.querySelector(".sidebar")
isActive = true;

btn.onclick = () =>{
    isActive = !isActive;
    console.log(isActive)    
    if(isActive){
        
        sidebar.classList.add("sidebar-active")
        sidebar.classList.remove("sidebar-off")
        btn.classList.remove("btn-nav-active")
        btn.classList.add("btn-nav-off")
    }else{
        sidebar.classList.remove("sidebar-active")
        sidebar.classList.add("sidebar-off")
        btn.classList.add("btn-nav-active")
        btn.classList.remove("btn-nav-off")
        
    }
}

