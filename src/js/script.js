document.addEventListener("DOMContentLoaded", () => { // Correction ici
    // Gestion du menu burger
    const toggle = document.querySelector(".menu-btn"); // Bouton burger
    const nav = document.querySelector(".menu"); // Menu

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            const isOpen = toggle.getAttribute("aria-expanded") === "true"; // Vérifier si le menu est ouvert
            const isClosed = !isOpen; // Inverser l'état du menu

            // Modifier l'état du menu et du bouton
            nav.setAttribute("aria-hidden", isOpen ? "true" : "false"); // Afficher/masquer le menu
            toggle.setAttribute("aria-expanded", isClosed.toString()); // Modifier l'état du bouton
        });
    }
});