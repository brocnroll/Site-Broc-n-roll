// script.js

// ---------- Menu Hamburger Amélioré ----------
const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");
const body = document.body;

if (menuHamburger && navLinks) {
  // Ouverture/fermeture du menu
  menuHamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    navLinks.classList.toggle("active");
    
    // Bloque le scroll quand le menu est ouvert
    if (navLinks.classList.contains("active")) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }
  });

  // Fermer le menu en cliquant sur un lien
  const menuLinks = navLinks.querySelectorAll("a");
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      body.style.overflow = "";
    });
  });

  // Fermer le menu en cliquant en dehors
  navLinks.addEventListener("click", (e) => {
    if (e.target === navLinks) {
      navLinks.classList.remove("active");
      body.style.overflow = "";
    }
  });

  // Fermer avec la touche Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      body.style.overflow = "";
    }
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
        confirmationMessage.style.color = "#4ade80"; // Vert doux
        form.reset();
      }, function(error) {
        confirmationMessage.innerHTML = "❌ Oups ! Une erreur est survenue : " + error.text;
        confirmationMessage.style.color = "#f87171"; // Rouge doux
      });
  });
}
