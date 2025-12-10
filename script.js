console.log("Le JS fonctionne !");

// Initialisation EmailJS avec ta clé publique
(function(){
    emailjs.init("veoKE_lETEjm945JK"); 
})();

const form = document.getElementById('form');
const confirmationMessage = document.getElementById('confirmationMessage');

// Surlignage des champs quand actif
const inputs = form.querySelectorAll('input, textarea');
inputs.forEach(input => {
  input.addEventListener('focus', () => input.style.borderColor = 'orange');
  input.addEventListener('blur', () => input.style.borderColor = '#ccc');
});

// Envoi du formulaire
form.addEventListener('submit', function(e) {
  e.preventDefault();

  emailjs.sendForm('service_3l08cr5', 'template_f8ap0hw', this)
    .then(function(response) {
      confirmationMessage.innerHTML = "✅ Merci ! Votre message a bien été envoyé.";
      confirmationMessage.style.color = "green";
      form.reset();
    }, function(error) {
      confirmationMessage.innerHTML = "❌ Oups ! Une erreur est survenue : " + error.text;
      confirmationMessage.style.color = "red";
    });
});
// Menu hamburger pour mobile
const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");

menuHamburger.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});
