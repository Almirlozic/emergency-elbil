const css = document.querySelector("#lightmode");
console.log(css.href);

const btn = document.querySelector("#switchBtn");
btn.addEventListener("click",changeMode);
const switchtext = document.querySelector("#switchtext");

function changeMode() {
    if (css.href.includes("css/customdark.css")) {
        css.href = "css/custom.css";
        switchtext.textContent = "Dark Mode";
    } else {
        css.href = "css/customdark.css";
        switchtext.textContent = "Light Mode"
    }
    }
