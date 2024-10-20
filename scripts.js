// scripts.js

// Exemple de fonction pour envoyer le formulaire de contact
function envoyerFormulaire() {
    const nom = document.getElementById('nom').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validation simple
    if (nom === '' || email === '' || message === '') {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    // Validation de l'email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Veuillez entrer une adresse email valide.');
        return;
    }

    // Traitement du formulaire (par exemple, envoi via AJAX)
    // Pour cet exemple, nous allons simplement afficher un message de succès
    alert('Merci pour votre message, ' + nom + '! Nous vous répondrons bientôt.');
    
    // Réinitialiser le formulaire
    document.querySelector('form').reset();
}

// En savoir plus
/*function toggleContent() {
    var moreContent = document.getElementById("more-content");
    var toggleLink = document.getElementById("toggle-link");
    
    moreContent.classList.toggle("show");

    // Modifier le texte du lien en fonction de la visibilité du contenu
    if (moreContent.classList.contains("show")) {
       toggleLink.textContent = "Cliquez ici pour masquer les informations supplémentaires";
    } else {
       toggleLink.textContent = "En savoir plus";
    } 
}*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  