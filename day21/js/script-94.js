import showAlert, { showConfirm, showPrompt } from "./message.js"


document.getElementById("btnAlert").addEventListener("click", ()=>{
    showAlert("Hello alert")
})

document.getElementById("btnConfirm").addEventListener("click", ()=>{
    showConfirm("Hello confirm")
})

document.getElementById("btnPrompt").addEventListener("click", ()=>{
    showPrompt("Hello prompt")
})