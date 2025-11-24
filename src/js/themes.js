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