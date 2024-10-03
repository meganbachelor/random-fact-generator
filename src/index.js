function generateFact(event) {
  event.preventDefault();

  new Typewriter("#fact-output", {
    strings: "Women Were the First Coders!",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let factFormElement = document.querySelector("#fact-generator-form");
factFormElement.addEventListener("submit", generateFact);
