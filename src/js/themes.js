// buttons
const cyanButton = document.getElementById("cyan-button");
const emeraldButton = document.getElementById("emerald-button");
const yellowButton = document.getElementById("yellow-button");

document.addEventListener("DOMContentLoaded", () =>
{
    const themesButton = document.getElementById("themes-button");
    const themesDropdown = document.getElementById("themes-dropdown");

    // toggle dropdown on click
    themesButton.addEventListener("click", () => {themesDropdown.classList.toggle("hidden")});

    // close dropdown (if clicking elsewhere)
    document.addEventListener("click", (e) => 
    {
        const buttonClick = themesButton.contains(e.target);
        const dropdownClick = themesDropdown.contains(e.target);

        if (!(buttonClick) && !(dropdownClick))
        {
            themesDropdown.classList.add("hidden");
        }
    });
});

// cyan mode (default)
cyanButton.addEventListener("click", () => 
{
    header.setBgColor("bg-cyan-950");
    dropdown.setBgColor("bg-cyan-950", "hover:bg-cyan-900");
    sidebar.setBgColor("bg-cyan-950", "hover:bg-cyan-900");
    main.setGradient("from-cyan-100", "to-cyan-700", "from-50%");
    footer.setBgColor("bg-cyan-950");
});
// emerald mode
emeraldButton.addEventListener("click", () => 
{
    header.setBgColor("bg-emerald-950");
    dropdown.setBgColor("bg-emerald-950", "hover:bg-emerald-900");
    sidebar.setBgColor("bg-emerald-950", "hover:bg-emerald-900");
    main.setGradient("from-emerald-100", "to-emerald-700", "from-50%");
    footer.setBgColor("bg-emerald-950");
});
// yellow mode
yellowButton.addEventListener("click", () => 
{
    header.setBgColor("bg-yellow-950");
    dropdown.setBgColor("bg-yellow-950", "hover:bg-yellow-900");
    sidebar.setBgColor("bg-yellow-950", "hover:bg-yellow-900");
    main.setGradient("from-yellow-100", "to-yellow-700", "from-50%");
    footer.setBgColor("bg-yellow-950");
});