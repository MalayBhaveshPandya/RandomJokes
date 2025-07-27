const url = "https://v2.jokeapi.dev/joke/Any?safe-mode";

async function getJokes() {
  const res = await axios.get(url);
  return res.data.type === "single"
    ? res.data.joke
    : `${res.data.setup} - ${res.data.delivery}`;
}

document.querySelector("#btn").addEventListener("click", async () => {
  const joke = await getJokes();
  document.querySelector("#result").textContent = joke;
});
