import "bootstrap-icons/font/bootstrap-icons.css"
//import logo from "./bootstrap-logo.svg"
const logo = require("./bootstrap-logo.svg")
export function toastUI(toastID:string,smallText:string,messageText:string) {
    return `
    <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
        <div id=${toastID} class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <img src=${logo} width=30 class="rounded me-2" alt="logo">
                <strong class="me-auto"><i class="bi bi-stars"></i> Bootstrap</strong>
                <small>${smallText}</small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">${messageText}</div>
        </div>
    </div>    
    `
}
