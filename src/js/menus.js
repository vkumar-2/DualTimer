appendFooter("bg-cyan-950", "text-zinc-300");

// footer
function appendFooter(bgColor, textColor)
{
    const footer = document.querySelector("footer");
    const footerClasses = ["min-h-[60px]", "w-full", "py-2", `${bgColor}`, `${textColor}`];

    for (let i = 0; i < footerClasses.length; i++) 
    {
        footer.classList.add(footerClasses[i]);
    }

    footer.innerHTML =
    `
    <nav class="flex justify-center w-full gap-10 py-1">
        <div class="text-2xl">
            <a href="https://github.com/vkumar251/DualTimer"
            target="_blank"
            class="${textColor} hover:text-zinc-500 duration-300 ease-in-out">
                <i class="fa-solid fa-code"></i>
            </a>
        </div>
        <div class="text-2xl">
            <a href="https://tailwindcss.com"
            target="_blank"
            class="${textColor} hover:text-zinc-500 duration-300 ease-in-out">
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