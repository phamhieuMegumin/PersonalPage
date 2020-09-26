document.addEventListener("mousemove", parallax);

function parallax(e) {
  const layer = document.querySelectorAll(".layer");
  const p_layer = document.querySelector(".p_layer");
  layer.forEach((layer) => {
    let x = (window.innerWidth - e.pageX * 10) / 100;
    let y = (window.innerHeight - e.pageY * 10) / 100;
    layer.style.transform = "translate(" + x + "px," + y + "px)";
    let p_x = (window.innerWidth - e.pageX * 10) / 140;
    let p_y = (window.innerHeight - e.pageY * 10) / 140;
    p_layer.style.transform = "translate(" + p_x + "px," + p_y + "px)";
  });
}
const menu = document.querySelector(".menu");
window.addEventListener("scroll", function () {
  menu.classList.toggle("active", window.scrollY > 0);
});
const burger = document.querySelector(".nav-menu");
burger.addEventListener("click", function () {
  const navMenu = document.querySelector(".nav-bar");
  navMenu.classList.toggle("navActive");
  menu.classList.toggle("navActive");
});
