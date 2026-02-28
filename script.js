// Simple fade-in animation on scroll
window.addEventListener("scroll", function() {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if(cardTop < windowHeight - 50){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});

document.querySelectorAll(".card").forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all 0.6s ease";
});