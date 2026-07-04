/**
 * Content Protection for Siya World Holidays
 * - Disables right-click on images
 * - Prevents image dragging
 * - Disables Ctrl+U (view source shortcut)
 * - Console warning for developers
 */
(function () {
    'use strict';

    // Disable right-click on images only
    document.addEventListener('contextmenu', function (e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
            return false;
        }
    });

    // Disable image dragging
    document.addEventListener('dragstart', function (e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
            return false;
        }
    });

    // Disable Ctrl+U (view source) and Ctrl+S (save page)
    document.addEventListener('keydown', function (e) {
        if (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.key === 's' || e.key === 'S')) {
            e.preventDefault();
            return false;
        }
    });

    // Console warning
    console.log(
        '%c⚠️ WARNING',
        'color: red; font-size: 24px; font-weight: bold;'
    );
    console.log(
        '%cThis website and its content are protected by copyright law.\n© 2026 Siya World Holidays. All rights reserved.\nUnauthorized copying, scraping, or reproduction is prohibited.',
        'color: #333; font-size: 14px;'
    );

    // Add unselectable attribute to images
    window.addEventListener('DOMContentLoaded', function () {
        var images = document.querySelectorAll('img');
        for (var i = 0; i < images.length; i++) {
            images[i].setAttribute('draggable', 'false');
            images[i].style.userSelect = 'none';
            images[i].style.webkitUserSelect = 'none';
        }
    });
})();
