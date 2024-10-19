document.addEventListener('DOMContentLoaded', function() {
    const quotes = [
        {
            text: "Mental health is not a destination, but a process. It's about how you drive, not where you're going.",
            author: "Noam Shpancer"
        },
        {
            text: "You don't have to be positive all the time. It's perfectly okay to feel sad, angry, annoyed, frustrated, scared and anxious. Having feelings doesn't make you a negative person. It makes you human.",
            author: "Lori Deschene"
        },
        {
            text: "Self-care is how you take your power back.",
            author: "Lalah Delia"
        },
        {
            text: "Mental health problems don't define who you are. They are something you experience. You walk in the rain and you feel the rain, but you are not the rain.",
            author: "Matt Haig"
        }
    ];

    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');

    function setRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomIndex];
        quoteText.textContent = `"${quote.text}"`;
        quoteAuthor.textContent = `- ${quote.author}`;
    }

    setRandomQuote();
    setInterval(setRandomQuote, 10000);

    // Animate value cards on scroll
    const valueCards = document.querySelectorAll('.value-card');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    valueCards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        observer.observe(card);
    });
});