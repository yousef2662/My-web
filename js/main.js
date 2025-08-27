document.addEventListener("DOMContentLoaded", async () => {
  await FontAwesome.dom.i2svg();
  
  let toggleMenu = document.querySelector(".fa-bars");
  let linkCon = document.querySelector(".links-con-mobile");
  
  toggleMenu.addEventListener("click", () => {
    if (linkCon.classList.contains("visi")){
      linkCon.style.visibility = "hidden";
      linkCon.classList.remove("visi");
      toggleMenu.style.color = "white";
    } else {
      linkCon.style.visibility = "visible";
      linkCon.classList.add("visi");
      toggleMenu.style.color = "var(--blue-color)";
    }
  })
})