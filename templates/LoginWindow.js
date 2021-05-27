document.querySelector("#closeBtn").addEventListener("click", ()=> {
    if(confirm("Do you really want to leave?", "Istanbul Flight Hub")){
        window.api.send("closeBtn")
    }
})
let clickked = false
document.querySelector("#loginBtn").addEventListener("click", ()=>{
    if(clickked == false){
        clickked = true
        let json = {
            email: document.querySelector("#email").value,
            password: document.querySelector("#password").value
        }
        window.api.send("loginData", json)
        
        setInterval(() => {
            clickked =false
        }, 3600*1.5)
    }




})