const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

if (isTouchDevice) {
    document.querySelector(".explore-btn")?.addEventListener("click", function (this: HTMLAnchorElement, e: Event) {
        e.preventDefault(); // disable default behavior

        const link = this;
        const href = link.getAttribute("href") ?? "#";

        // delay in ms
        const delay = 300;

        // add new clicked class
        link.classList.add("is-clicked");

        // go to other page after animation
        setTimeout(function () {
            window.location.href = href;
        }, delay);
    });
}
