 
 
async function loadRecipe() {
  try {
    let response = await fetch("https://dummyjson.com/carts");
    let data = await response.json();

    let innerHTML = "";

    data.carts.forEach(cart => {
      cart.products.forEach(product => {
        innerHTML += `
          <div class="recipe-card">
            <img class="api-img" src="${product.thumbnail}" alt="${product.title}"><br>
<br> <h4>${ product.title}</h4></b>
</h4><br>
            <h2> ₹${product.price}</h2>
            <button>Free Delivery</button>  <span id="like" onclick="toggleLike()">❤</span>
          </div>
        `;
      });
    });

    document.getElementById("recipes-container").innerHTML = innerHTML;

  } catch (error) {
    console.error(error);
  }
}

loadRecipe();
  setInterval(loadRecipe, 10000);
 

document.getElementById("nav-about").addEventListener("click", () => {
  document.getElementById("recipes-container").scrollIntoView({ behavior: "smooth" });
});
 document.getElementById("Back").addEventListener("click", () => {
  document.getElementById("nav-home").scrollIntoView({ behavior: "smooth" });
});
 document.getElementById("nav-contect").addEventListener("click", () => {
  document.getElementById("SECTIONA").scrollIntoView({ behavior: "smooth" });
});


  