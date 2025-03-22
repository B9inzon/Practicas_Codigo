const subscribeBtn = document.getElementById("subscribeBtn");

const message = document.getElementById("message");

subscribeBtn.addEventListener("click", () => {
    setTimeout(() => {
        subscribeBtn.innerText = "Subscribed";
        message.classList.remove("hidden");
    }, 2000)

    setTimeout(() => {
        message.classList.add("hidden");
    }, 5000)
});
