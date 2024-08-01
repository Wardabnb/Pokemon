function addPokemon() {
  const name = document.querySelector("#name").value;
  const category = document.querySelector("#category").value;
  const image = document.querySelector("#image").value;
  const attack = document.querySelector("#attack").value;
  const deffense = document.querySelector("#deffense").value;
  const speed = document.querySelector("#speed").value;
  fetch("http://localhost:4000/pokimon/", {
    body: JSON.stringify({
      name,
      category,
      image,
      attack,
      deffense,
      speed,
    }),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
