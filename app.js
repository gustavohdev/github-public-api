
document.addEventListener("DOMContentLoaded", () => {
    console.log("Hello, World!")

    const form = document.querySelector("form")
    console.log(form)
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        const username = document.querySelector("input").value
        alert(username)
        //alert("Pressed button!")
    })

})