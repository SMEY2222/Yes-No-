const yes = document.getElementById("yes");
const no = document.getElementById("no");

no.onmousemove = () => {
    const widthran = window.innerWidth - no.offsetWidth;
    const heightran = window.innerHeight - no.offsetHeight;

    const randomX = Math.floor(Math.random() * widthran);
    const randomY = Math.floor(Math.random() * heightran);

    no.style.position = "absolute"; // Important: make it movable
    no.style.left = randomX + "px";
    no.style.top = randomY + "px";
}
