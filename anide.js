const data = {
  anime: [
    { title: "Naruto", img: "https://i.imgur.com/8Y1ZQZQ.jpg" },
    { title: "One Piece", img: "https://i.imgur.com/2rmU7hE.jpg" },
    { title: "Attack on Titan", img: "https://i.imgur.com/J5LVHEL.jpg" }
  ],
  kino: [
    { title: "Spider-Man", img: "https://i.imgur.com/3KX9GZk.jpg" },
    { title: "Batman", img: "https://i.imgur.com/4ZQZQZQ.jpg" }
  ],
  multik: [
    { title: "Toy Story", img: "https://i.imgur.com/5ZQZQZQ.jpg" },
    { title: "Cars", img: "https://i.imgur.com/6ZQZQZQ.jpg" }
  ]
};

const page = document.body.dataset.page;
const movies = data[page] || [];

const container = document.getElementById("movies");
const search = document.getElementById("search");

function show(list) {
  container.innerHTML = "";
  list.forEach(m => {
    container.innerHTML += `
      <div class="card">
        <img src="${m.img}">
        <h3>${m.title}</h3>
      </div>
    `;
  });
}

show(movies);

search.addEventListener("input", () => {
  const v = search.value.toLowerCase();
  show(movies.filter(m => m.title.toLowerCase().includes(v)));
});