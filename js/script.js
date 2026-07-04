// ──────────────────────────────────────────
//  TravelNest Bootstrap – script.js
// ──────────────────────────────────────────

// ── Navbar scroll effect ──
const navbar = document.getElementById('mainNavbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ── Slideshow ──
const slides     = document.querySelectorAll('.tn-slide');
const slideTexts = document.querySelectorAll('.tn-slide-text');
const heroSec    = document.querySelector('.tn-hero');
let current = 0;
let slideTimeout = null;

if (slides.length > 0) {
    // Generate indicator dots dynamically if there are more than 1 slides
    if (slides.length > 1 && heroSec) {
        const indicatorsContainer = document.createElement('div');
        indicatorsContainer.className = 'tn-slideshow-indicators d-flex justify-content-center gap-2 position-absolute start-50 translate-middle-x tn-z-10-max-1400';
        indicatorsContainer.style.bottom = '20px';
        
        slides.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = `tn-indicator-dot ${index === 0 ? 'active' : ''}`;
            dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
            dot.addEventListener('click', () => {
                goToSlide(index);
            });
            indicatorsContainer.appendChild(dot);
        });
        
        heroSec.appendChild(indicatorsContainer);
    }

    function goToSlide(index) {
        // Clear active states
        if (slides[current]) slides[current].classList.remove('active');
        if (slideTexts[current]) slideTexts[current].classList.remove('active');
        
        const dots = document.querySelectorAll('.tn-indicator-dot');
        if (dots[current]) dots[current].classList.remove('active');
        
        current = index;
        
        // Set new active states
        if (slides[current]) slides[current].classList.add('active');
        if (slideTexts[current]) slideTexts[current].classList.add('active');
        if (dots[current]) dots[current].classList.add('active');
        
        // Reset timeout
        if (slideTimeout) clearTimeout(slideTimeout);
        slideTimeout = setTimeout(nextSlide, 5000);
    }

    function nextSlide() {
        let nextIndex = (current + 1) % slides.length;
        goToSlide(nextIndex);
    }

    // Start auto-play
    slideTimeout = setTimeout(nextSlide, 5000);
}

// ── Search Tabs ──
document.querySelectorAll('.tn-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.dataset.tab;

        // Toggle active tab
        document.querySelectorAll('.tn-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Show matching fields
        document.querySelectorAll('.tn-search-fields').forEach(f => {
            if (f.dataset.fields === target) {
                f.classList.remove('d-none');
                f.classList.add('d-flex');
            } else {
                f.classList.remove('d-flex');
                f.classList.add('d-none');
            }
        });
    });
});

// ── Favorite Buttons ──
document.querySelectorAll('.tn-fav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const icon = btn.querySelector('i');
        btn.classList.toggle('active');
        icon.classList.toggle('far');
        icon.classList.toggle('fas');
    });
});

// ── Testimonial Slider ──
const testimonialTrack = document.getElementById('testimonialTrack');

if (testimonialTrack) {
    let isTransitioning = false;

    function slideNext() {
        if (isTransitioning) return;
        isTransitioning = true;

        const firstCard = testimonialTrack.querySelector('.tn-review-card-wrapper');
        if (!firstCard) return;

        const cardWidth = firstCard.offsetWidth;
        const gap = parseInt(window.getComputedStyle(testimonialTrack).gap, 10) || 24;
        const moveAmount = cardWidth + gap;

        // Apply transition and move
        testimonialTrack.style.transition = 'transform 0.5s ease-in-out';
        testimonialTrack.style.transform = `translateX(-${moveAmount}px)`;

        // Wait for transition to finish
        setTimeout(() => {
            // Move first card to the end of the track
            testimonialTrack.appendChild(firstCard);
            
            // Instantly reset the transform without a transition
            testimonialTrack.style.transition = 'none';
            testimonialTrack.style.transform = 'translateX(0)';
            
            // Force a reflow to apply the reset instantly
            void testimonialTrack.offsetWidth;
            
            isTransitioning = false;
        }, 500); // 500ms matches the CSS transition duration
    }

    // Automatically slide every 4 seconds
    setInterval(slideNext, 4000);
}

// ── Multi-Range Slider ──
const minPrice = document.getElementById('minPrice');
const maxPrice = document.getElementById('maxPrice');
const priceActive = document.getElementById('priceActive');
const priceDisplay = document.getElementById('priceDisplay');

if (minPrice && maxPrice) {
    function updatePriceRange(e) {
        let minVal = parseInt(minPrice.value, 10);
        let maxVal = parseInt(maxPrice.value, 10);

        if (minVal > maxVal) {
            if (e && e.target === minPrice) {
                minPrice.value = maxVal;
                minVal = maxVal;
            } else {
                maxPrice.value = minVal;
                maxVal = minVal;
            }
        }

        priceDisplay.textContent = `$${minVal} - $${maxVal}`;

        const minPercent = ((minVal - minPrice.min) / (minPrice.max - minPrice.min)) * 100;
        const maxPercent = ((maxVal - maxPrice.min) / (maxPrice.max - maxPrice.min)) * 100;

        priceActive.style.left = minPercent + '%';
        priceActive.style.right = (100 - maxPercent) + '%';
    }

    minPrice.addEventListener('input', updatePriceRange);
    maxPrice.addEventListener('input', updatePriceRange);

    // Initial call
    updatePriceRange();
}

// ── Flight Dropdowns Logic ──
document.querySelectorAll('.tn-search-box-container').forEach(searchBox => {
    
    // Find all dropdowns inside the search box
    const dropdowns = searchBox.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const btn = dropdown.querySelector('button[data-bs-toggle="dropdown"]');
        const items = dropdown.querySelectorAll('.dropdown-item');
        
        // Trip Type & Cabin Class
        if (items.length > 0) {
            items.forEach(item => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    // Update active class
                    items.forEach(i => i.classList.remove('active'));
                    item.classList.add('active');
                    
                    // Update button text while keeping the caret icon
                    const text = item.textContent.trim();
                    const span = btn.querySelector('span');
                    if (span) {
                        span.textContent = text;
                    } else {
                        btn.innerHTML = `<span>${text}</span> <i class="fas fa-chevron-down small text-secondary"></i>`;
                    }

                    // Toggle return date visibility
                    if (text === 'One-way' || text === 'Round trip' || text === 'Multi-city') {
                        const returnDateContainer = searchBox.querySelector('.tn-return-date-field');
                        if (returnDateContainer) {
                            if (text === 'One-way') {
                                returnDateContainer.classList.remove('d-flex');
                                returnDateContainer.classList.add('d-none');
                            } else {
                                returnDateContainer.classList.remove('d-none');
                                returnDateContainer.classList.add('d-flex');
                            }
                        }
                    }
                });
            });
        }
    });

    // Passengers Logic
    const passengerDropdown = Array.from(dropdowns).find(d => {
        const menu = d.querySelector('.dropdown-menu');
        return menu && menu.innerHTML.includes('Adults');
    });

    if (passengerDropdown) {
        const pBtn = passengerDropdown.querySelector('button[data-bs-toggle="dropdown"]');
        
        const updatePassengerText = () => {
            const counts = passengerDropdown.querySelectorAll('.d-flex.align-items-center.gap-2 span.tn-fs-sm.fw-medium');
            if (counts.length < 3) return;
            const adults = parseInt(counts[0].textContent, 10);
            const children = parseInt(counts[1].textContent, 10);
            const infants = parseInt(counts[2].textContent, 10);
            
            let text = `${adults} adult${adults > 1 ? 's' : ''}`;
            if (children > 0) text += `, ${children} child${children > 1 ? 'ren' : ''}`;
            if (infants > 0) text += `, ${infants} infant${infants > 1 ? 's' : ''}`;
            
            if (pBtn) pBtn.innerHTML = `${text} <i class="fas fa-chevron-down small"></i>`;
        };

        const counterRows = passengerDropdown.querySelectorAll('.dropdown-menu .d-flex.align-items-center.gap-2');
        counterRows.forEach((row, index) => {
            const minusBtn = row.querySelector('button:first-child');
            const plusBtn = row.querySelector('button:last-child');
            const countSpan = row.querySelector('span');
            
            if (!minusBtn || !plusBtn || !countSpan) return;

            // For adults (index 0), min is 1. For others, min is 0.
            const min = index === 0 ? 1 : 0;
            
            minusBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                let current = parseInt(countSpan.textContent, 10);
                if (current > min) {
                    current--;
                    countSpan.textContent = current;
                    updatePassengerText();
                }
                minusBtn.disabled = (current <= min);
            });
            
            plusBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                let current = parseInt(countSpan.textContent, 10);
                current++;
                countSpan.textContent = current;
                minusBtn.disabled = false;
                updatePassengerText();
            });
        });
    }
});

// ── Swap Flight Locations ──
function swapFlightLocations(btn) {
    // Find the closest wrapper that contains both fields. 
    // .tn-search-fields or the direct parent row wrapper.
    const container = btn.closest('.tn-search-fields') || btn.closest('.d-flex.flex-wrap');
    if (!container) return;
    
    const fromInput = container.querySelector('.tn-from-input');
    const toInput = container.querySelector('.tn-to-input');
    
    if (fromInput && toInput) {
        // Swap values
        const temp = fromInput.value;
        fromInput.value = toInput.value;
        toInput.value = temp;
        
        // Add a quick rotation animation to the icon
        const icon = btn.querySelector('i');
        if (icon) {
            const currentTransform = icon.style.transform || window.getComputedStyle(icon).transform;
            let currentAngle = 0;
            
            // Mobile initially has rotate(90deg) inline
            if (icon.getAttribute('style') && icon.getAttribute('style').includes('rotate(90deg)')) {
                currentAngle = 90;
            }
            
            // If we've already rotated it, read the custom data attribute
            if (icon.dataset.currentRotation) {
                currentAngle = parseInt(icon.dataset.currentRotation, 10);
            }
            
            const newAngle = currentAngle + 180;
            icon.dataset.currentRotation = newAngle;
            
            icon.style.transition = 'transform 0.3s ease';
            icon.style.transform = `rotate(${newAngle}deg)`;
        }
    }
}

// ── Hotel Card Redirection ──
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        // If the card has a button or link pointing to hotel-details.html
        const detailLink = card.querySelector('a[href="hotel-details.html"]');
        if (detailLink) {
            // Set hover cursor
            card.style.cursor = 'pointer';
            
            // Add click listener
            card.addEventListener('click', (e) => {
                // If clicked on an interactive child element (like a button or existing link), let it handle the event
                if (e.target.closest('a') || e.target.closest('button')) {
                    return;
                }
                window.location.href = 'hotel-details.html';
            });
        }
    });
});

// ── Global Interactive Map (Leaflet.js + CartoDB Dark Matter) ──
document.addEventListener('DOMContentLoaded', () => {
    const mapContainer = document.getElementById('hotelMap');
    if (mapContainer && typeof L !== 'undefined') {
        const isDetailPage = document.title.includes('Details');
        
        // Center of Paris (approx. 48.8566, 2.3522) for listing pages,
        // Specific hotel coordinates (approx. 48.9002, 2.3388) for detail page.
        const mapCenter = isDetailPage ? [48.9002, 2.3388] : [48.8566, 2.3522];
        const initialZoom = isDetailPage ? 14 : 12; // zoom 12 shows Paris city nicely
        
        const map = L.map('hotelMap', {
            center: mapCenter,
            zoom: initialZoom,
            zoomControl: true,
            scrollWheelZoom: false
        });

        // Load Standard OpenStreetMap tile style (Inverts beautifully into a high-contrast dark mode)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19
        }).addTo(map);

        // Only add marker and popup on the detail page
        if (isDetailPage) {
            // Custom styled dot marker (Teal brand color #215257 with white boundary)
            const brandIcon = L.divIcon({
                className: 'tn-custom-map-marker',
                html: '<div style="background-color: #215257; width: 18px; height: 18px; border: 3px solid #ffffff; border-radius: 50%; box-shadow: 0 2px 6px rgba(0,0,0,0.3); pointer-events: none;"></div>',
                iconSize: [18, 18],
                iconAnchor: [9, 9]
            });

            // Add marker with popup
            L.marker(mapCenter, { icon: brandIcon }).addTo(map)
                .bindPopup('<b class="tn-text-brand-dark" style="font-family:\'Poppins\', sans-serif;">Budget Paris Porte de Montmartre</b><br><span class="text-secondary small">15 Boulevard Victor Hugo, 75017 Paris</span>')
                .openPopup();
        }
    }
});

// ── Global Document Clicks Handler (Unobtrusive Event Listeners to avoid inline JavaScript) ──
document.addEventListener('click', function (e) {
    // 1. Swap flight locations
    const swapBtn = e.target.closest('.tn-swap-btn');
    if (swapBtn) {
        if (typeof swapFlightLocations === 'function') {
            swapFlightLocations(swapBtn);
        }
        return;
    }

    // 2. Calendar/clock icon clicks triggering the date/time picker
    if (e.target.matches('.far.fa-calendar, .far.fa-clock, .tn-cursor-pointer')) {
        const nextEl = e.target.nextElementSibling;
        if (nextEl && (nextEl.type === 'date' || nextEl.type === 'time')) {
            try {
                nextEl.showPicker();
            } catch (err) {
                console.warn('showPicker not supported or blocked:', err);
            }
            return;
        }
    }

    // 3. Date/time inputs triggering their own picker when clicked
    if (e.target.matches('input[type="date"], input[type="time"]')) {
        try {
            e.target.showPicker();
        } catch (err) {
            console.warn('showPicker not supported or blocked:', err);
        }
        return;
    }

    // 4. Show/hide reviews toggle text on hotels page
    const toggleBtn = e.target.closest('.tn-toggle-reviews-btn');
    if (toggleBtn) {
        setTimeout(function () {
            const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
            toggleBtn.innerHTML = isExpanded 
                ? 'Show less <i class="fas fa-chevron-up ms-2"></i>' 
                : 'Show all 25 <i class="fas fa-chevron-down ms-2"></i>';
        }, 10);
        return;
    }

    // 5. Scroll to booking card on package details page
    const scrollBtn = e.target.closest('.tn-scroll-to-booking');
    if (scrollBtn) {
        const target = document.getElementById('bookingFormCard');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
        return;
    }
});

