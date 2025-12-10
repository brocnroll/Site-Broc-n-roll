// script.js
console.log("Le JS fonctionne !");

// Exemple pour le formulaire contact
const form = document.getElementById('form');
const confirmationMessage = document.getElementById('confirmationMessage');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  emailjs.sendForm('service__3l08cr5', 'template_f8ap0hw', this)
    .then(function(response) {
      confirmationMessage.innerHTML = "✅ Merci ! Votre message a bien été envoyé.";
      confirmationMessage.style.color = "green";
      form.reset();
    }, function(error) {
      confirmationMessage.innerHTML = "❌ Oups ! Une erreur est survenue : " + error.text;
      confirmationMessage.style.color = "red";
    });
});
