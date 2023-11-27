/*RESPON NAVBAR-SCROLL*/
const navbar = document.querySelector(".header__navLinks");
const navbarHeight = navbar.clientHeight;
const navbarMobile = document.querySelector(".header__menuToggler");
window.addEventListener("scroll", function () {
  if (window.scrollY >= navbarHeight) {
    navbar.classList.remove("navbarFadeIn");
    navbarMobile.style.cssText = "display: flex; right: 3rem; position: fixed;";
  } else {
    navbar.classList.add("navbarFadeIn");
    navbarMobile.style.cssText = "display: none";
  }
});

/*CURSOR*/
const contactMe = document.querySelector(
  ".container-Contact .container-Contact--form .contact-submit"
);
contactMe.addEventListener("mouseover", function () {
  cursor.classList.add("link-grow_cursor");
  cursor2.classList.add("link-grow_cursor2");
});
contactMe.addEventListener("mouseleave", function () {
  cursor.classList.remove("link-grow_cursor");
  cursor2.classList.remove("link-grow_cursor2");
});

/*VALIDATE*/
Validator({
  form: "#form1",
  formGroupSelector: ".form-group",
  errorSelector: ".form-message",
  rules: [
    Validator.isName("#contact-name"), // isName là fuction cục bộ của Validator(có thể là function bình thường cũng dc)
    Validator.isEmailRequired("#contact-mail"),
    Validator.isEmail("#contact-mail"),
    Validator.isBudget("#contact-budget"),
    Validator.isDetail("#contact-detail"),
  ],
  onSubmit: function (data) {
    // Call API
    console.log(data);
  },
});
