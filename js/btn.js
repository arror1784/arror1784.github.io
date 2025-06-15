const btn = () =>{
    const btns = document.querySelectorAll(".btn")
    btns.forEach((v)=>{
        v.onmouseenter = () => {
            v.style.opacity = "70%"
            v.style.cursor = "pointer"
        }
        v.onmouseleave = () => {
            v.style.opacity = "100%"
            v.style.cursor = "default"
        }
    })
}

btn();

export default btn;
