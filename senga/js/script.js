console.log("Site Boulangerie Délice chargé avec succès !");

// FILTRAGE PRODUITS
document.addEventListener("DOMContentLoaded", function () {

    const filterButtons = document.querySelectorAll(".filter-btn");
    const products = document.querySelectorAll(".product-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {

            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const filter = this.getAttribute("data-filter");

            products.forEach(product => {
                if (filter === "all" || product.dataset.category === filter) {
                    product.style.display = "block";
                } else {
                    product.style.display = "none";
                }
            });
        });
    });

    // Simulation ajout panier
    const cartButtons = document.querySelectorAll(".add-to-cart");
    cartButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Produit ajouté au panier !");
        });
    });

});
