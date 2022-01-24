// elements
const subMenuToggleBtn = document.getElementsByClassName("submenu-toggler");
const dateTag = document.querySelector(".date");

// eventlisteners
for (let i = 0; i < subMenuToggleBtn.length; i++) {
  subMenuToggleBtn[i].addEventListener("click", function () {
    var subMenu = this.nextElementSibling;
    this.classList.toggle("activeDropdownBtn");
    if (subMenu.style.display === "none" || subMenu.style.display === "") {
      subMenu.style.display = "block";
    } else {
      subMenu.style.display = "none";
    }
  });
}

// set dynamic year on footer
const year = new Date().getFullYear();
dateTag.innerText = year;
