// Aspettiamo che il DOM sia completamente caricato
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Selezioniamo il bottone (la div .navbar che contiene le tre linee)
    const navbarBtn = document.querySelector('.navbar');
    
    // 2. Selezioniamo il menu (il tag <nav>)
    const navMenu = document.querySelector('.nav');

    // 3. Aggiungiamo l'evento click
    navbarBtn.addEventListener('click', () => {
        // Toggle della classe "open" sul MENU (per farlo scivolare)
        navMenu.classList.toggle('open');
        
        // Toggle della classe "change" sul BOTTONE (per trasformarlo in X)
        navbarBtn.classList.toggle('change');
    });
});