function envoyerMessage(event) {
    event.preventDefault();
    document.getElementById("confirmation").textContent =
      "Merci pour votre message. Nous vous répondrons rapidement.";
  }