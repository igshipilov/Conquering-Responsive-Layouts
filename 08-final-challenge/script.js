const hideNav = () => {
    const navList = document.querySelector(".nav");
    const hamburger = document.querySelector(".toggle-nav");

    hamburger.addEventListener("click", () => {
        navList.classList.toggle("hidden");
    });
};

const copyText = () => {
    const linkToCopy = document.querySelector(".link-copy");

    linkToCopy.addEventListener('click', (e) => {
        const copyText = e.target.textContent;
        navigator.clipboard.writeText(copyText);
    })
};

hideNav();
copyText();
