// Gestion du formulaire de contact
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Récupération des valeurs du formulaire
      const nom = document.getElementById('nom').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // Création de l'objet FormData
      const formData = new FormData();
      formData.append('nom', nom);
      formData.append('email', email);
      formData.append('message', message);
      
      // Envoi des données à Formspree
      fetch('https://formspree.io/f/xbjnkdvp', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          // Affichage du message de confirmation
          document.getElementById('confirmation').style.display = 'block';
          // Réinitialisation du formulaire
          contactForm.reset();
          // Masquer le message après 5 secondes
          setTimeout(() => {
            document.getElementById('confirmation').style.display = 'none';
          }, 5000);
        } else {
          throw new Error('Erreur lors de l\'envoi du message');
        }
      })
      .catch(error => {
        console.error('Erreur:', error);
        alert('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer plus tard ou nous contacter directement par téléphone.');
      });
    });
  }
});

// Fonction pour changer aléatoirement les images des vignettes
document.addEventListener('DOMContentLoaded', function() {
  // Liste statique des images disponibles dans le répertoire real
  const availableImages = [
    // Images d'échafaudages
    'image/real/echaf1.JPG',
    'image/real/echaf2.JPG',
    'image/real/echaf3.JPG',
    'image/real/echaf4.JPG',
    'image/real/echaf5.JPG',
    'image/real/echaf6.JPG',
    'image/real/echaf7.JPG',
    'image/real/echaf8.JPG',
    'image/real/echaf9.JPG',
    // Images de voitures
    'image/real/car1.jpeg',
    'image/real/car2.jpeg',
    'image/real/car3.jpeg',
    'image/real/car4.jpeg',
    'image/real/car5.jpeg',
    'image/real/car6.jpeg',
    'image/real/car7.jpeg',
    'image/real/car8.jpeg',
    'image/real/car9.jpeg',
    'image/real/car10.jpeg',
    'image/real/car11.jpeg',
    'image/real/car12.jpeg',
    'image/real/car13.jpeg',
    'image/real/car14.jpeg',
    'image/real/car15.jpeg',
    'image/real/car16.jpeg',
    'image/real/car17.jpeg',
    'image/real/car18.jpeg',
    'image/real/car19.jpeg',
    'image/real/car20.jpeg',
    'image/real/car21.jpeg',
    'image/real/car22.jpeg',
    'image/real/car25.jpeg',
    'image/real/car26.jpeg',
    'image/real/car27.jpeg',
    'image/real/car28.jpeg',
    'image/real/car29.jpeg',
    'image/real/car30.jpeg',
    'image/real/car31.jpeg',
    'image/real/car32.jpeg',
    'image/real/car33.jpeg',
    'image/real/car34.jpeg',
    'image/real/car35.jpeg'
  ];
  
  // Sélectionner toutes les images avec la classe random-image
  const randomImages = document.querySelectorAll('.random-image');
  
  // Fonction pour obtenir une image aléatoire différente de l'image actuelle
  function getRandomImage(currentSrc, usedImages) {
    // Filtrer les images pour éviter de réutiliser les mêmes images
    let availableForSelection = availableImages.filter(img => 
      !usedImages.includes(img) && !currentSrc.includes(img)
    );
    
    // Si toutes les images ont été utilisées, réinitialiser la sélection
    if (availableForSelection.length === 0) {
      availableForSelection = availableImages.filter(img => !currentSrc.includes(img));
    }
    
    // Sélectionner une image aléatoire parmi les disponibles
    return availableForSelection[Math.floor(Math.random() * availableForSelection.length)];
  }
  
  // Fonction pour changer les images
  function changeImages() {
    // Stocker les images déjà utilisées pour cette série
    let usedImages = [];
    
    // Pour chaque image avec la classe random-image
    randomImages.forEach(img => {
      // Sauvegarder l'image actuelle
      const currentSrc = img.src;
      
      // Obtenir une nouvelle image aléatoire
      const newSrc = getRandomImage(currentSrc, usedImages);
      
      // Ajouter l'image à la liste des images utilisées
      usedImages.push(newSrc);
      
      // Appliquer la nouvelle image avec une transition en fondu
      img.style.opacity = 0;
      
      setTimeout(() => {
        img.src = newSrc;
        img.style.opacity = 1;
      }, 500);
    });
  }
  
  // Changer les images toutes les 5 secondes
  setInterval(changeImages, 5000);
  
  // Ajouter une transition CSS pour le fondu
  randomImages.forEach(img => {
    img.style.transition = 'opacity 0.5s ease';
  });
  
  // Changer les images une première fois au chargement
  changeImages();
});
