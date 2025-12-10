// script.js

// ---------- Menu Hamburger ----------
const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");

if (menuHamburger && navLinks) {
  menuHamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// ---------- Formulaire Contact ----------
(function(){
    emailjs.init("veoKE_lETEjm945JK"); 
})();

const form = document.getElementById('form');
const confirmationMessage = document.getElementById('confirmationMessage');

if(form){
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm('service_3l08cr5', 'template_f8ap0hw', this)
      .then(function(response) {
        confirmationMessage.innerHTML = "✅ Merci ! Votre message a bien été envoyé. Je vous recontacterai bientôt.";
        confirmationMessage.style.color = "green";
        form.reset();
      }, function(error) {
        confirmationMessage.innerHTML = "❌ Oups ! Une erreur est survenue : " + error.text;
        confirmationMessage.style.color = "red";
      });
  });
}
