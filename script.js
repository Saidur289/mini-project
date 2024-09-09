let modeBtn = document.querySelector("#mode");
let currentMode = 'light';
let body =   document.querySelector("body");
modeBtn.addEventListener("click", () =>{
    // console.log('button was clicked');
    if(currentMode === 'light'){
        currentMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light")
    }else{
        currentMode = "light";
      body.classList.add("light");
      body.classList.remove("dark");
    }
})