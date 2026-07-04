"use strict";

document.addEventListener('DOMContentLoaded', function() {
    // 1. Baggage / Amenity Count Handlers
    document.querySelectorAll('.tn-amenity-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const minusIcon = this.querySelector('.fa-minus');
            const plusIcon = this.querySelector('.fa-plus');
            if (minusIcon) {
                const countSpan = this.nextElementSibling;
                if (countSpan) {
                    const currentVal = parseInt(countSpan.innerText, 10) || 0;
                    countSpan.innerText = Math.max(0, currentVal - 1);
                }
            } else if (plusIcon) {
                const countSpan = this.previousElementSibling;
                if (countSpan) {
                    const currentVal = parseInt(countSpan.innerText, 10) || 0;
                    countSpan.innerText = currentVal + 1;
                }
            }
        });
    });

    // 2. Date Picker Click Handlers
    document.querySelectorAll('input[type="date"]').forEach(input => {
        input.addEventListener('click', function() {
            if (typeof this.showPicker === 'function') {
                this.showPicker();
            }
        });

        const prevIcon = input.previousElementSibling;
        if (prevIcon && prevIcon.classList.contains('fa-calendar')) {
            prevIcon.addEventListener('click', function() {
                if (typeof input.showPicker === 'function') {
                    input.showPicker();
                }
            });
        }
    });

    // 3. Swap Flight Locations Button Handlers
    document.querySelectorAll('.tn-swap-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            if (typeof swapFlightLocations === 'function') {
                swapFlightLocations(this);
            }
        });
    });
});
