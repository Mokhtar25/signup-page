
document.addEventListener("DOMContentLoaded", (event) => {
    const confirmInput = document.querySelector("#confirm");
    const passwordInput = document.querySelector("#password");

    confirmInput.addEventListener("blur", () => {
        if (confirmInput.value !== passwordInput.value) {
            confirmInput.style.border = "2px solid red";
        }
        else {
            confirmInput.style.border = "2px solid #E5E7EB;"
        }
        console.log(confirmInput.value, passwordInput.value)
    });
});