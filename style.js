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
