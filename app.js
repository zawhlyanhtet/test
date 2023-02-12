"use strict";
const main = document.querySelector(".card__container");
const fetchBtn = document.querySelector(".btn");

fetchBtn.addEventListener("click", () => {
  const card = `<div class="card">
  <h1>Title</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
    consectetur iure facilis quae mollitia ut qui harum soluta quia.
    Sunt quidem totam iste commodi nesciunt excepturi ad asperiores
    soluta iusto.
  </p>
</div>`;

  main.insertAdjacentHTML("beforeend", card);
});
