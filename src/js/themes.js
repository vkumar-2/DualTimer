// buttons
const cyanButton = document.getElementById("cyan-button");
const emeraldButton = document.getElementById("emerald-button");
const yellowButton = document.getElementById("yellow-button");
const indigoButton = document.getElementById("indigo-button");
const roseButton = document.getElementById("rose-button");

// setup cache
const themeType = "dualtimer-theme";

// event listeners
document.addEventListener("DOMContentLoaded", () =>
{
    const themesButton = document.getElementById("themes-button");
    const themesDropdown = document.getElementById("themes-dropdown");

    // toggle dropdown on click
    themesButton.addEventListener("click", () => {themesDropdown.classList.toggle("hidden")});

    // close dropdown (if clicking outside menu)
    document.addEventListener("click", (e) => 
    {
        const buttonClick = themesButton.contains(e.target);
        const dropdownClick = themesDropdown.contains(e.target);

        if (!(buttonClick) && !(dropdownClick))
        {
            themesDropdown.classList.add("hidden");
        }
    });

    try
    {
        // configure default theme if cache is empty
        if (localStorage.getItem(themeType) === null)
        {
            console.info("Loading default theme...");
            cyanMode();
        }
        else
        {
            // retrieve cached theme
            const memory = localStorage.getItem(themeType);

            switch (memory)
            {
                case "cyan":
                    cyanMode();
                    break;
                case "emerald":
                    emeraldMode();
                    break;
                case "yellow":
                    yellowMode();
                    break;
                case "indigo":
                    indigoMode();
                    break;
                case "rose":
                    roseMode();
                    break;
                default:
                    console.warn("Theme not found: Resetting to default...");
                    cyanMode();
                    break;
            }
        }
    }
    catch (exception) 
    {
    }
});
cyanButton.addEventListener("click", () => {cyanMode();});
emeraldButton.addEventListener("click", () => {emeraldMode();});
yellowButton.addEventListener("click", () => {yellowMode();});
indigoButton.addEventListener("click", () => {indigoMode();});
roseButton.addEventListener("click", () => {roseMode();});

// configurations
function cyanMode()
{
    header.setBgColor("bg-cyan-950");
    dropdown.setBgColor("bg-cyan-950", "hover:bg-cyan-900");
    sidebar.setBgColor("bg-cyan-950", "hover:bg-cyan-900");
    main.setGradient("from-cyan-100", "to-cyan-700", "from-50%");
    footer.setBgColor("bg-cyan-950");

    // index page
    if (document.getElementById("index-page"))
    {
        const switchCards = () => 
        {
            const newClasses = ["bg-cyan-950", "bg-cyan-800", "bg-cyan-600"];

            // timer card
            const timer = function()
            {
                const elements = 
                [
                    document.getElementById("timer-h1"), // elements[0]
                    document.getElementById("timer-div"), // elements[1]
                    document.getElementById("timer-button"), // elements[2]
                ];
                
                // replace all element attributes with new classes
                for (let i = 0; i < elements.length; i++)
                {
                    elements[i].classList.replace(elements[i].classList[0], newClasses[i]);
                }
                
                // update button hover
                elements[2].classList.replace(elements[2].classList[1], "hover:bg-cyan-700");
            }

            // stopwatch card
            const stopwatch = function()
            {
                const elements = 
                [
                    document.getElementById("stopwatch-h1"),
                    document.getElementById("stopwatch-div"),
                    document.getElementById("stopwatch-button"),
                ];

                for (let i = 0; i < elements.length; i++)
                {
                    elements[i].classList.replace(elements[i].classList[0], newClasses[i]);
                }
                
                elements[2].classList.replace(elements[2].classList[1], "hover:bg-cyan-700");
            }

            timer();
            stopwatch();
        }

        switchCards();
    }

    localStorage.setItem(themeType, "cyan");
}
function emeraldMode()
{
    header.setBgColor("bg-emerald-950");
    dropdown.setBgColor("bg-emerald-950", "hover:bg-emerald-900");
    sidebar.setBgColor("bg-emerald-950", "hover:bg-emerald-900");
    main.setGradient("from-emerald-100", "to-emerald-700", "from-50%");
    footer.setBgColor("bg-emerald-950");

    // index page
    if (document.getElementById("index-page"))
    {
        const switchCards = () => 
        {
            const newClasses = ["bg-emerald-950", "bg-emerald-800", "bg-emerald-600"];

            // timer card
            const timer = function()
            {
                const elements = 
                [
                    document.getElementById("timer-h1"),
                    document.getElementById("timer-div"),
                    document.getElementById("timer-button"),
                ];
                
                // replace all element attributes with new classes
                for (let i = 0; i < elements.length; i++)
                {
                    elements[i].classList.replace(elements[i].classList[0], newClasses[i]);
                }
                
                // update button hover
                elements[2].classList.replace(elements[2].classList[1], "hover:bg-emerald-700");
            }

            // stopwatch card
            const stopwatch = function()
            {
                const elements = 
                [
                    document.getElementById("stopwatch-h1"),
                    document.getElementById("stopwatch-div"),
                    document.getElementById("stopwatch-button"),
                ];

                for (let i = 0; i < elements.length; i++)
                {
                    elements[i].classList.replace(elements[i].classList[0], newClasses[i]);
                }

                elements[2].classList.replace(elements[2].classList[1], "hover:bg-emerald-700");
            }

            timer();
            stopwatch();
        }

        switchCards();
    }

    localStorage.setItem(themeType, "emerald");
}
function yellowMode()
{
    header.setBgColor("bg-yellow-950");
    dropdown.setBgColor("bg-yellow-950", "hover:bg-yellow-900");
    sidebar.setBgColor("bg-yellow-950", "hover:bg-yellow-900");
    main.setGradient("from-yellow-100", "to-yellow-700", "from-50%");
    footer.setBgColor("bg-yellow-950");

    // index page
    if (document.getElementById("index-page"))
    {
        const switchCards = () => 
        {
            const newClasses = ["bg-yellow-950", "bg-yellow-800", "bg-yellow-600"];

            // timer card
            const timer = function()
            {
                const elements = 
                [
                    document.getElementById("timer-h1"),
                    document.getElementById("timer-div"),
                    document.getElementById("timer-button"),
                ];
                
                // replace all element attributes with new classes
                for (let i = 0; i < elements.length; i++)
                {
                    elements[i].classList.replace(elements[i].classList[0], newClasses[i]);
                }
                
                // update button hover
                elements[2].classList.replace(elements[2].classList[1], "hover:bg-yellow-700");
            }

            // stopwatch card
            const stopwatch = function()
            {
                const elements = 
                [
                    document.getElementById("stopwatch-h1"),
                    document.getElementById("stopwatch-div"),
                    document.getElementById("stopwatch-button"),
                ];

                for (let i = 0; i < elements.length; i++)
                {
                    elements[i].classList.replace(elements[i].classList[0], newClasses[i]);
                }

                elements[2].classList.replace(elements[2].classList[1], "hover:bg-yellow-700");
            }

            timer();
            stopwatch();
        }

        switchCards();
    }

    localStorage.setItem(themeType, "yellow");
}
function indigoMode()
{
    header.setBgColor("bg-indigo-950");
    dropdown.setBgColor("bg-indigo-950", "hover:bg-indigo-900");
    sidebar.setBgColor("bg-indigo-950", "hover:bg-indigo-900");
    main.setGradient("from-indigo-100", "to-indigo-700", "from-50%");
    footer.setBgColor("bg-indigo-950");

    // index page
    if (document.getElementById("index-page"))
    {
        const switchCards = () => 
        {
            const newClasses = ["bg-indigo-950", "bg-indigo-800", "bg-indigo-600"];

            // timer card
            const timer = function()
            {
                const elements = 
                [
                    document.getElementById("timer-h1"),
                    document.getElementById("timer-div"),
                    document.getElementById("timer-button"),
                ];
                
                // replace all element attributes with new classes
                for (let i = 0; i < elements.length; i++)
                {
                    elements[i].classList.replace(elements[i].classList[0], newClasses[i]);
                }
                
                // update button hover
                elements[2].classList.replace(elements[2].classList[1], "hover:bg-indigo-700");
            }

            // stopwatch card
            const stopwatch = function()
            {
                const elements = 
                [
                    document.getElementById("stopwatch-h1"),
                    document.getElementById("stopwatch-div"),
                    document.getElementById("stopwatch-button"),
                ];

                for (let i = 0; i < elements.length; i++)
                {
                    elements[i].classList.replace(elements[i].classList[0], newClasses[i]);
                }

                elements[2].classList.replace(elements[2].classList[1], "hover:bg-indigo-700");
            }

            timer();
            stopwatch();
        }

        switchCards();
    }

    localStorage.setItem(themeType, "indigo");
}
function roseMode()
{
    header.setBgColor("bg-rose-950");
    dropdown.setBgColor("bg-rose-950", "hover:bg-rose-900");
    sidebar.setBgColor("bg-rose-950", "hover:bg-rose-900");
    main.setGradient("from-rose-100", "to-rose-700", "from-50%");
    footer.setBgColor("bg-rose-950");

    // index page
    if (document.getElementById("index-page"))
    {
        const switchCards = () => 
        {
            const newClasses = ["bg-rose-950", "bg-rose-800", "bg-rose-600"];

            // timer card
            const timer = function()
            {
                const elements = 
                [
                    document.getElementById("timer-h1"),
                    document.getElementById("timer-div"),
                    document.getElementById("timer-button"),
                ];
                
                // replace all element attributes with new classes
                for (let i = 0; i < elements.length; i++)
                {
                    elements[i].classList.replace(elements[i].classList[0], newClasses[i]);
                }
                
                // update button hover
                elements[2].classList.replace(elements[2].classList[1], "hover:bg-rose-700");
            }

            // stopwatch card
            const stopwatch = function()
            {
                const elements = 
                [
                    document.getElementById("stopwatch-h1"),
                    document.getElementById("stopwatch-div"),
                    document.getElementById("stopwatch-button"),
                ];

                for (let i = 0; i < elements.length; i++)
                {
                    elements[i].classList.replace(elements[i].classList[0], newClasses[i]);
                }

                elements[2].classList.replace(elements[2].classList[1], "hover:bg-rose-700");
            }

            timer();
            stopwatch();
        }

        switchCards();
    }

    localStorage.setItem(themeType, "rose");
}