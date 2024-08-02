function addPokemon() {
  const name = document.querySelector("#name").value;
  const category = document.querySelector("#category").value;
  const image = document.querySelector("#image").value;
  const attack = document.querySelector("#attack").value;
  const deffense = document.querySelector("#deffense").value;
  const speed = document.querySelector("#speed").value;
  fetch("https://pokemon-khys.onrender.com/pokimon/", {
    body: JSON.stringify({
      name,
      category,
      image,
      attack,
      deffense,
      speed,
      sessionId:localStorage.getItem("userId"),
    }),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
window.onload=()=>{
  if(localStorage.getItem("userId")!="adgk126kjhgyrd986g"){
    window.location="/public/home"
  }
}