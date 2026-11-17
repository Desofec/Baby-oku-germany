const filterButtons = document.querySelectorAll(".filter-button");
const products = document.querySelectorAll(".product-card");
const emptyState = document.querySelector(".empty-state");
const cartCount = document.querySelector(".cart-count");
const cartLink = document.querySelector(".cart-link");
const toast = document.querySelector(".toast");
let itemCount = 0;
let toastTimeout;

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    let visibleProducts = 0;

    filterButtons.forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle("is-active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    });

    products.forEach((product) => {
      const isVisible = filter === "alle" || product.dataset.category === filter;
      product.hidden = !isVisible;
      if (isVisible) visibleProducts += 1;
    });
    emptyState.hidden = visibleProducts > 0;
  });
});

document.querySelectorAll(".add-button").forEach((button) => {
  button.addEventListener("click", () => {
    itemCount += 1;
    cartCount.textContent = itemCount;
    cartLink.setAttribute("aria-label", `Warenkorb, ${itemCount} Artikel`);
    toast.textContent = "Ein neues Lieblingsteil ist im Warenkorb ♡";
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimeout);
    toastTimeout = window.setTimeout(() => toast.classList.remove("is-visible"), 2200);
  });
});
