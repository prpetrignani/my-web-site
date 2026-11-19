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


// Comparsa dei sezioni di testo allo scorrimento della pagina la prima volta//
    document.addEventListener("DOMContentLoaded", () => {
  // Seleziona tutti gli elementi con la classe "content-block"
  const elementi = document.querySelectorAll(".content-block");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      // Se l'elemento entra nella finestra visibile (viewport)
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        
        // Smette di osservare l'elemento: l'animazione avviene solo la prima volta
        observer.unobserve(entry.target);
      }
    });
  }, {
    // L'animazione parte quando almeno il 15% dell'elemento è visibile
    threshold: 0.15 
  });

  // Avvia l'osservazione per ogni elemento
  elementi.forEach((el) => observer.observe(el));
});

// Comparsa testo nascosto nei 3 paragrafi nella sezione grapfic//
document.addEventListener('DOMContentLoaded', () => {
  const pulsanti = document.querySelectorAll('.content-block button.piu');

  pulsanti.forEach((bottone) => {
    bottone.addEventListener('click', () => {
      const bloccoCorrente = bottone.closest('.content-block');
      const nascostoCorrente = bloccoCorrente.querySelector('.nascosto');
      const eraVisibile = nascostoCorrente.classList.contains('visibile');

      // Chiude tutti i div .nascosto aperti e ripristina i relativi pulsanti
      document.querySelectorAll('.content-block .nascosto.visibile').forEach((aperto) => {
        aperto.classList.remove('visibile');
        const altroBtn = aperto.closest('.content-block').querySelector('button.piu');
        if (altroBtn) {
          altroBtn.textContent = 'Scopri di più';
        }
      });

      // Se non era già aperto, apre quello relativo al pulsante cliccato
      if (!eraVisibile) {
        nascostoCorrente.classList.add('visibile');
        bottone.textContent = 'Mostra meno';
      }
    });
  });
});