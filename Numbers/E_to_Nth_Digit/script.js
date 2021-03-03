document.addEventListener("DOMContentLoaded", () => {
    let input = document.getElementById("input"),
        button = document.getElementById("button"),
        result = document.getElementById("E");

    input.addEventListener("input", () => {
        if ((input.value < 1 || input.value > 30) && !button.hasAttribute("disabled")) {
            button.setAttribute("disabled", "disabled");
            console.log("Submit button disabled");
        } else if ((input.value >= 1 && input.value <= 30) && button.hasAttribute("disabled")) {
            button.removeAttribute("disabled");
            console.log("Submit button enabled");
        }
    })

    button.onclick = function generate_E() {
        result.innerHTML = Math.E.toFixed(input.value)
    }

})