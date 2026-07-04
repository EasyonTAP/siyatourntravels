"use strict";

document.addEventListener('DOMContentLoaded', function() {
    // 1. Gallery Switcher
    const mainImage = document.getElementById('tnMainGalleryImage');
    const thumbnails = document.querySelectorAll('.tn-gallery-thumbnail');

    if (mainImage && thumbnails.length > 0) {
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                const newSrc = this.getAttribute('data-img-src');
                if (!newSrc || mainImage.getAttribute('src') === newSrc) return;

                // Fade out
                mainImage.style.opacity = '0';

                // Switch src after opacity transition finishes (200ms)
                setTimeout(() => {
                    mainImage.setAttribute('src', newSrc);
                    // Fade in
                    mainImage.style.opacity = '1';
                }, 200);

                // Update active thumbnail state
                thumbnails.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }

    // 2. Save / Favorite Button Interaction
    const saveBtn = document.getElementById('tnSaveBtn');
    if (saveBtn) {
        saveBtn.addEventListener('click', function() {
            const icon = this.querySelector('i');
            const textSpan = this.querySelector('.save-text');
            
            // Bounce animation on click
            icon.style.transform = 'scale(1.3)';
            setTimeout(() => {
                icon.style.transform = 'scale(1)';
            }, 200);

            if (icon.classList.contains('far')) {
                // Change to Saved (solid heart, red)
                icon.className = 'fas fa-heart text-danger';
                textSpan.textContent = 'Saved';
                this.classList.add('border-danger-subtle');
            } else {
                // Change back to Save (outline heart, neutral)
                icon.className = 'far fa-heart';
                textSpan.textContent = 'Save';
                this.classList.remove('border-danger-subtle');
            }
        });
    }
});
