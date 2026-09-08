const form = document.getElementById("subscribeForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  message.textContent = "Thanks. Newsletter signup will be connected in a later version.";
  form.reset();
});
