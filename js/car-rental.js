"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', (e) => {
            // Prevent default if it's the <a> button click to avoid duplicate actions
            if (e.target.closest('a')) {
                e.preventDefault();
            }
            
            const titleEl = card.querySelector('h5');
            const imgEl = card.querySelector('.tn-card-img');
            const priceEl = card.querySelector('.tn-price-color');
            
            const title = titleEl ? titleEl.textContent.trim() : '';
            const img = imgEl ? imgEl.getAttribute('src').split('/').pop() : '';
            
            let price = 45; // default fallback
            if (priceEl) {
                const priceText = priceEl.textContent;
                const match = priceText.match(/\d+/);
                if (match) {
                    price = parseInt(match[0], 10);
                }
            }
            
            window.location.href = `booking-car.html?car=${encodeURIComponent(title)}&img=${encodeURIComponent(img)}&price=${price}`;
        });
    });
});
