document.addEventListener('DOMContentLoaded', () => {
      const contentBlocks = document.querySelectorAll('.content-block');
      const mediaCards = document.querySelectorAll('.media-card');

      // Configurazione dell'IntersectionObserver
      const observerOptions = {
        root: null, // Utilizza il viewport della finestra
        rootMargin: '-30% 0px -30% 0px', // Attiva l'elemento quando entra nella fascia centrale dello schermo
        threshold: 0.2 // Percentuale di visibilità minima richiesta
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Recupera l'ID dell'immagine da attivare dal dataset HTML
            const targetId = entry.target.getAttribute('data-target-img');
            
            // Rimuove la classe 'active' da tutte le immagini
            mediaCards.forEach(card => card.classList.remove('active'));

            // Aggiunge la classe 'active' all'immagine associata alla sezione visibile
            const activeCard = document.getElementById(targetId);
            if (activeCard) {
              activeCard.classList.add('active');
            }
          }
        });
      }, observerOptions);

      // Associa l'observer ad ogni blocco di contenuto
      contentBlocks.forEach(block => observer.observe(block));
    });