let html= document.querySelector('html')
let checkbox = document.querySelector("#dark")

checkbox.addEventListener('change', ()=>{

    html.classList.toggle("dark-mode")
})