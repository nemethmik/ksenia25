import "bootstrap/dist/css/bootstrap.min.css"
import {toastUI} from "./toast"
import {Toast} from "bootstrap"
console.log("Hello World!");
window.addEventListener("load",() => {
    const B1ID = "b1"
    const liveToastBtn = "liveToastBtn"
    const liveToastID = "liveToast"
    const root = document.getElementById("root")
    root.innerHTML = `
        <h1>Hello world</h1>
        <h2>Tip: Check your console</h2>
        <button id=${B1ID} type="button" class="btn btn-primary">Hello Webpack</button>
        <button type="button" class="btn btn-primary" id=${liveToastBtn}>Show live toast</button>
        ${toastUI(liveToastID,"11 seconds ago","Hello from here")}
        `
    const b1 = document.getElementById(B1ID)
    b1.addEventListener("click",(e)=>{
        console.log(e)
        window.alert((e.target as HTMLButtonElement).innerText)
    })
    const toastTrigger = document.getElementById(liveToastBtn)
    const toastLiveExample = document.getElementById(liveToastID)
    if (toastTrigger) {
        toastTrigger.addEventListener('click', function () {
            const toast = new Toast(toastLiveExample)
            toast.show()
        })
    }
})
