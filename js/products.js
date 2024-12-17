document.addEventListener("DOMContentLoaded", () => {
  const productsList = document.querySelector(".products__list");
  const products = [
    { name: "Product 1", price: "$10" },
    { name: "Product 2", price: "$20" },
    { name: "Product 3", price: "$30" },
  ];

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product");

    const productName = document.createElement("h2");
    productName.textContent = product.name;
    productName.classList.add("product__name");

    const productPrice = document.createElement("p");
    productPrice.textContent = product.price;
    productPrice.classList.add("product__price");

    productCard.appendChild(productName);
    productCard.appendChild(productPrice);
    productsList.appendChild(productCard);
  });
});
