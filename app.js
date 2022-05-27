const extender = document.querySelector(".extender");
const navigators = document.querySelector(".navigators");
const social = document.querySelector(".social");
const navbar = document.querySelector(".navbar");

extender.addEventListener("click", e => {
  if (navigators.style.display !== "flex") {
    navigators.style.display = "flex";
    social.style.display = "flex";
    navbar.style.width = "20%";
    if (e.target.classList.contains("line")) {
      elements = Array.from(e.target.parentElement. childNodes);
      elements.forEach((element,index) => {
        if (index%2 === 1) {
          element.style.width = "30%";
        }
      });
    }else{
      elements = Array.from(e.target.childNodes);
      elements.forEach((element,index) => {
        if (index%2 === 1) {
          element.style.width = "40%";
        }
      });
    }
  } else{
    navigators.style.display = "none";
    social.style.display = "none";
    navbar.style.width = "20%";
    if (e.target.classList.contains("line")) {
      elements = Array.from(e.target.parentElement. childNodes);
      elements.forEach((element,index) => {
        if (index%2 === 1) {
          element.style.width = "75%";
        }
      });
    }else{
      elements = Array.from(e.target.childNodes);
      elements.forEach((element,index) => {
        if (index%2 === 1) {
          element.style.width = "75%";
        }
      });
    }
  }
});