// objects
const header = 
{
    bgColor: "bg-cyan-950",
    textColor: "text-neutral-50",
    letterSpacing: "tracking-widest",
    width: "full",
    minHeight: 60,
    padding: 2,
    displayType: "flex",
    align: "items-center",
    
    getBgColor: function() {return this.bgColor;},
    getTextColor: function() {return this.textColor;},
    getLetterSpacing: function() {return this.letterSpacing;},
    getWidth: function() {return this.width;},
    getMinHeight: function() {return this.minHeight;},
    getPadding: function() {return this.padding;},
    getDisplayType: function() {return this.displayType;},
    getAlign: function() {return this.align;},

    setBgColor: function(value)
    {
        document.querySelector("header").classList.replace(this.bgColor, value);
        this.bgColor = value;
    },
    setTextColor: function(value)
    {
        document.querySelector("header").classList.replace(this.textColor, value);
        this.textColor = value;
    },
}
const sidebar = 
{
    width: 0,
    isOpen: false,

    getWidth: function() {return this.width;},
    setWidth: function(value)
    {
        this.width = value;

        const sidebarMenu = document.querySelector("#sidebar-menu");
        const sidebarPane = document.querySelector("#sidebar-pane");
        const widthClasses = ["w-[0vw]", "w-[50vw]"];

        widthClasses.forEach(w => 
        {
            sidebarMenu.classList.remove(w);
            sidebarPane.classList.remove(w);
        });

        let newWidth;
        if (value === 0)
        {
            newWidth = "w-[0vw]";
        }
        else
        {
            newWidth = "w-[50vw]";
        }

        sidebarMenu.classList.add(newWidth);
        sidebarPane.classList.add(newWidth);
    },
    setOpen: function(value)
    {
        this.isOpen = value;

        // create custom event
        document.dispatchEvent(new CustomEvent("toggleSB", 
        {
            detail: {isOpen: value},
        }));
    },
}
const footer = 
{
    bgColor: "bg-cyan-950",
    textColor: "text-zinc-300",
    letterSpacing: "tracking-widest",
    width: "full",
    minHeight: 60,
    paddingX: 0,
    paddingY: 2,

    getBgColor: function() {return this.bgColor;},
    getTextColor: function() {return this.textColor;},
    getLetterSpacing: function() {return this.letterSpacing;},
    getWidth: function() {return this.width;},
    getMinHeight: function() {return this.minHeight;},
    getPaddingX: function() {return this.paddingX;},
    getPaddingY: function() {return this.paddingY;},

    setBgColor: function(value)
    {
        document.querySelector("footer").classList.replace(this.bgColor, value);
        this.bgColor = value;
    },
    setTextColor: function(value)
    {
        document.querySelector("footer").classList.replace(this.textColor, value);
        this.textColor = value;
    },
}

// arrow functions
const createHeader = () => 
{
    const headerQ = document.querySelector("header");
    const headerClass = 
    [
        `min-h-[${header.getMinHeight()}px]`, 
        `w-${header.getWidth()}`, 
        `p-${header.getPadding()}`, 
        header.getBgColor(), 
        header.getTextColor(), 
        header.getDisplayType(), 
        header.getAlign(), 
        header.getLetterSpacing()
    ];

    for (let i = 0; i < headerClass.length; i++)
    {
        headerQ.classList.add(headerClass[i]);
    }

    headerQ.innerHTML =
    `
    <nav class="flex justify-around w-full">
        <div id="logo">
            <a href="index.html" class="text-3xl font-bold text-fuchsia-400 text-shadow-lg text-shadow-fuchsia-950 vast-shadow-regular tracking-normal text-[20px] md:text-2xl">
                <i class="fa-regular fa-clock"></i> Dual<span class="text-fuchsia-300">Timer</span>
            </a>
        </div>
        <div id="nav-items">
            <ul class="text-2xl flex gap-10 lg:gap-20">
                <li><a href="timer.html" 
                    class="text-zinc-300 hover:text-zinc-500 duration-300 ease-in-out hidden md:block text-2xl">
                    Timer
                </a></li>
                <li><a href="stopwatch.html" 
                    class="text-zinc-300 hover:text-zinc-500 duration-300 ease-in-out hidden md:block text-2xl">
                    Stopwatch
                </a></li>
                <li class="relative">
                    <button id="themes-button" class="cursor-pointer text-zinc-300 hover:text-zinc-500 duration-300 ease-in-out block text-[20px]">
                        <i class="fa-solid fa-palette"></i> <i id="dd-arrow-themes" class="fa-solid fa-caret-down"></i>
                    </button>
                    <div id="themes-dropdown" 
                    class="absolute right-0 mt-2 bg-cyan-950 text-zinc-200 rounded shadow-lg border border-zinc-700 hidden">
                        <ul class="flex flex-col">
                            <li class="px-4 py-2 text-amber-500 whitespace-nowrap">Themes:</li>
                            <li class="px-4 py-2 hover:bg-cyan-900 cursor-pointer whitespace-nowrap">Cyan Mode (default)</li>
                            <li class="px-4 py-2 hover:bg-cyan-900 cursor-pointer whitespace-nowrap">Item 2</li>
                            <li class="px-4 py-2 hover:bg-cyan-900 cursor-pointer whitespace-nowrap">Item 3</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <button id="sidebar-button" 
                    class="cursor-pointer text-zinc-300 hover:text-zinc-500 duration-300 ease-in-out block md:hidden text-[20px]">
                        <i class="fa-solid fa-bars"></i>
                    </button>
                </li>
            </ul>
        </div>
    </nav>
    `;
}
const createFooter = () =>
{
    const footerQ = document.querySelector("footer");
    const footerClass = 
    [
        footer.getBgColor(), 
        footer.getTextColor(), 
        footer.getLetterSpacing(), 
        `min-h-[${footer.getMinHeight()}px]`, 
        `w-${footer.getWidth()}`, 
        `py-${footer.getPaddingY()}`
    ];

    for (let i = 0; i < footerClass.length; i++) 
    {
        footerQ.classList.add(footerClass[i]);
    }

    footerQ.innerHTML =
    `
    <nav class="flex justify-center w-full gap-10 py-1">
        <div class="text-2xl">
            <a href="https://github.com/vkumar251/DualTimer"
            target="_blank"
            class="${footer.textColor} hover:text-zinc-500 duration-300 ease-in-out">
                <i class="fa-solid fa-code"></i>
            </a>
        </div>
        <div class="text-2xl">
            <a href="https://tailwindcss.com"
            target="_blank"
            class="${footer.textColor} hover:text-zinc-500 duration-300 ease-in-out">
                <i class="devicon-tailwindcss-original"></i>
            </a>
        </div>
    </nav>
    <div class="text-center">
        <p class="text-2xl text-fuchsia-200">&copy; 2023 DualTimer Project</p>
        <p class="text-xl text-fuchsia-50">Built with Tailwind 4.1</p>
    </div>
    `;
}

// generate header and footer
createHeader();
createFooter();

let sbButton = document.getElementById("sidebar-button");
let sbPane = document.getElementById("sidebar-pane");

// event listeners
sbButton.addEventListener("click", () => {toggleSidebar();});
sbPane.addEventListener("click", () => {toggleSidebar();});
document.addEventListener("toggleSB", (e) => 
{
    if (e.detail.isOpen)
    {
        sidebar.setWidth(50);
    }
    else
    {
        sidebar.setWidth(0);
    }
});

// other functions
function toggleSidebar()
{
    if (sidebar.isOpen)
    {
        sidebar.setOpen(false);
    }
    else
    {
        sidebar.setOpen(true);
    }
}