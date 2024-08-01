//get container
const container = document.querySelector(".content");
//fetch pokimons

window.onload = () => {
  fetch("http://localhost:4000/pokimon/").then(async (res) => {
    const response = await res.json();
    console.log(response);
    response.forEach((pokemon) => {
      const content = document.createElement("div");
      content.classList.add("item");
      const image = document.createElement("img");
      image.src = pokemon.image;
      let name = document.createElement("h1");
      name.textContent = pokemon.name;
      name.onclick = () => {
        window.location = `/public/${pokemon._id}`;
      };
      content.appendChild(image);
      content.appendChild(name);
      container.appendChild(content);
    });
  });
};

//create box of each pokemon + add it to container
