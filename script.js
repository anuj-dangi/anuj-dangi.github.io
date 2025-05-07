function toggleMenu()
{
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function changeTheme()
{
    const theme = document.querySelector(".theme");
    document.body.classList.add("theme");
}