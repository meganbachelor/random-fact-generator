function displayFact(response) {
  new Typewriter("#fact-output", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateFact(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#text-input");
  let context =
    "You are a reputable fact finder who provides short and intersting facts that are appropriate for all ages. Make sure to pick new facts each time that are between 2 - 4 lines in length. Write the facts in basic HTML in british english and separate each line with a <br />. Make sure to follow the user instructions. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning only one";
  let prompt = `User instructions: Generate a random fact about ${instructionsInput.value}`;
  let apiKey = "58c32ct4af077777ac72ab80o05e54b7";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let factElement = document.querySelector("#fact-output");
  factElement.classList.remove("hidden");
  factElement.innerHTML = `<div class="generating">⏳ Generating a fact about ${instructionsInput.value}...</div>`;

  axios.get(apiURL).then(displayFact);
}

let factFormElement = document.querySelector("#fact-generator-form");
factFormElement.addEventListener("submit", generateFact);
