const nameInput = document.querySelector("#username");
const greetMeButton = document.querySelector(".greet-btn");
const greetingOutput = document.querySelector(".greeting");

greetMeButton.addEventListener('click', (event) => {
    event.preventDefault();
    greetingOutput.innerText = `Hello ${nameInput.value}`;
});
