//recuperer id from pathname
console.log(window.location.pathname);
const array = window.location.pathname.split("/");
console.log(array);
const id = array[2];
//fetch a pokemon with id
window.onload = () => {
  fetch(`https://pokemon-khys.onrender.compokimon/${id}`).then(async (res) => {
    const response = await res.json();
    console.log(response);
    const content = document.querySelector(".container");
    const item = document.createElement("div");
    item.classList.add("item");
    const image = document.createElement("img");
    image.src = response.image;
    const del = document.createElement("svg");
    del.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>';

    item.appendChild(image);
    item.appendChild(del);
    let name = document.createElement("h1");
    name.textContent = response.name;
    content.appendChild(item);
    content.appendChild(name);
    del.onclick = () => {
      delet()
     }
  });
};

function delet() {
  fetch(`https://pokemon-khys.onrender.compokimon/${id}`, {
    body:JSON.stringify({sessionId:localStorage.getItem("userId")}),
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  
}
