"use strict";

// Change Country Code in phone number input
function changeCountryCode(code, dialCode) {
    const flagEl = document.getElementById('selectedFlag');
    const codeEl = document.getElementById('selectedCode');
    if (flagEl) flagEl.src = `https://flagcdn.com/${code}.svg`;
    if (codeEl) codeEl.textContent = dialCode;
}

// Make it globally accessible as it's called from inline HTML attributes (until we refactor them if needed)
window.changeCountryCode = changeCountryCode;

// Dynamic URL Params parser
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const carName = params.get('car');
    const carImg = params.get('img');
    const carPriceVal = params.get('price');
    
    if (carName) {
        // Update car details in page
        const carNameDisplay = document.getElementById('carNameDisplay');
        if (carNameDisplay) carNameDisplay.textContent = carName.toUpperCase();
        
        if (carImg) {
            const carImageDisplay = document.getElementById('carImageDisplay');
            if (carImageDisplay) carImageDisplay.src = 'images/cars/' + carImg;
        }
        
        if (carPriceVal) {
            const price = parseFloat(carPriceVal);
            if (!isNaN(price)) {
                // Calculate price for 10 days
                const standardRate = price * 10;
                const taxOffset = 24.84; // mock local taxes/road fees to get the final total
                const total = standardRate + taxOffset;
                
                const carRateDisplay = document.getElementById('carRateDisplay');
                const carTotalDisplay = document.getElementById('carTotalDisplay');
                const sidebarTotalDisplay = document.getElementById('sidebarTotalDisplay');
                const headerTotalDisplay = document.getElementById('headerTotalDisplay');
                const rateDurationText = document.getElementById('rateDurationText');
                
                if (carRateDisplay) carRateDisplay.textContent = '€' + standardRate.toFixed(2);
                if (carTotalDisplay) carTotalDisplay.textContent = '€' + total.toFixed(2);
                if (sidebarTotalDisplay) sidebarTotalDisplay.textContent = '€' + total.toFixed(2);
                if (headerTotalDisplay) headerTotalDisplay.textContent = '€' + total.toFixed(2);
                if (rateDurationText) rateDurationText.textContent = `Europcar standard rate (for 10 days)`;
            }
        }
    }

    // Unobtrusive Country Code selection event listener
    const countryDropdown = document.querySelector('.dropdown-menu');
    if (countryDropdown) {
        countryDropdown.addEventListener('click', (e) => {
            const countryItem = e.target.closest('.tn-country-item');
            if (countryItem) {
                e.preventDefault();
                const code = countryItem.getAttribute('data-code');
                const dialCode = countryItem.getAttribute('data-dial-code');
                changeCountryCode(code, dialCode);
            }
        });
    }

    // Success alert on Checkout Form Submit
    const form = document.getElementById('bookingForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Basic client-side validation success message
            alert("Thank you! Your driver details have been confirmed. Proceeding to payment step...");
        });
    }
});
