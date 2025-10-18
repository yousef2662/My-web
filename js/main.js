document.addEventListener("DOMContentLoaded", async () => {
  await FontAwesome.dom.i2svg();
  
  let toggleMenu = document.querySelector(".fa-bars");
  let linkCon = document.querySelector(".links-con-mobile");
  let proCards = document.querySelectorAll(".pro-card");
  let proDescriptions = document.querySelectorAll(".pro-card .description");
  let srvCards = document.querySelectorAll("#services .card");


  srvCards.forEach((e) => {
    e.onmouseover = () =>{
      srvCards[0].style.animationPlayState = "paused";
      srvCards[1].style.animationPlayState = "paused";
      srvCards[2].style.animationPlayState = "paused";
    }
    
    e.onmouseleave = () =>{
      srvCards[0].style.animationPlayState = "running";
      srvCards[1].style.animationPlayState = "running";
      srvCards[2].style.animationPlayState = "running";
    }
  })

  proCards.forEach((card, index) => {
    card.onmouseover = () => {
      proDescriptions[index].style.visibility = "visible";
      proDescriptions[index].style.opacity = "1";
    };

    card.onmouseleave = () => {
      proDescriptions[index].style.visibility = "hidden";
      proDescriptions[index].style.opacity = "0";
    };
  });

  
  toggleMenu.addEventListener("click", () => {
    if (linkCon.classList.contains("visi")){
      linkCon.style.visibility = "hidden";
      linkCon.style.opacity = "0";
      linkCon.classList.remove("visi");
      toggleMenu.style.boxShadow = "none";
    } else {
      linkCon.style.visibility = "visible";
      linkCon.style.opacity = "1";
      linkCon.classList.add("visi");
      toggleMenu.style.boxShadow = "inset 1px 1px 0 var(--glass-highlight), inset 0 0 5px var(--glass-highlight)";
    }
  })
})

