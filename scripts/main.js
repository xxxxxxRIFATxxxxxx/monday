window.addEventListener("scroll", () => {
    const headerContainer = document.getElementById("header-container");
    headerContainer.classList.toggle("shadow-sm", scrollY > 0);
});