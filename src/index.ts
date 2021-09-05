import "bootstrap/dist/css/bootstrap.min.css"
console.log("Hello World!");
window.addEventListener("load",() => {
    const B1ID = "b1"
    const root = document.getElementById("root")
    root.innerHTML = `
        <h1>Hello world</h1>
        <h2>Tip: Check your console</h2>
        <button id=${B1ID} type="button" class="btn btn-primary">Hello Webpack</button>
        `
    const b1 = document.getElementById(B1ID)
    b1.addEventListener("click",(e)=>{
        console.log(e)
        window.alert((e.target as HTMLButtonElement).innerText)
    })
})
