//Create a button input (function...event.Listner
let button = document.querySelector(".flex-container")
button.addEventListener("click" , function (event) {
    /*console.log(event)
    console.log("the box you clicked was " , event.target.id)*/
    let existingP = document.querySelector(".msg-p")
    if (existingP) {
        existingP.remove()
    }

    let displayOutput = document.querySelector(".display-input")
    let calculation = document.createElement("p")
    calculation.classList.add(".msg-p")
    calculation.innerText = (event.target.id)
    displayOutput.appendChild(calculation)
})