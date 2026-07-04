/**
 * Header & Footer Include Loader
 */
(function () {
    function loadInclude(elementId, filePath, callback) {
        var el = document.getElementById(elementId);
        if (!el) return;

        var xhr = new XMLHttpRequest();
        xhr.open('GET', filePath, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200 || xhr.status === 0) {
                    el.innerHTML = xhr.responseText;
                    if (callback) callback();
                }
            }
        };
        xhr.send();
    }

    // Load header
    loadInclude('header-placeholder', 'includes/header.html', function () {
        // Get current page - handle both "about.html" and "about" formats
        var path = window.location.pathname;
        var currentPage = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
        currentPage = currentPage.split('?')[0].split('#')[0];
        if (!currentPage || currentPage === '' || currentPage === '/') currentPage = 'index.html';

        // Remove .html extension for comparison
        var currentBase = currentPage.replace('.html', '');

        var navLinks = document.querySelectorAll('.tn-navbar .nav-link');
        for (var i = 0; i < navLinks.length; i++) {
            var link = navLinks[i];
            var href = link.getAttribute('href') || '';
            var hrefBase = href.replace('.html', '');

            // Match: "about" === "about" OR "about.html" === "about.html"
            if (hrefBase === currentBase || href === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    });

    // Load footer
    loadInclude('footer-placeholder', 'includes/footer.html', function () {
        var toggle = document.getElementById('waToggle');
        var popup = document.getElementById('waPopup');
        var close = document.getElementById('waClose');
        if (toggle && popup && close) {
            toggle.addEventListener('click', function () { popup.classList.toggle('tn-wa-show'); });
            close.addEventListener('click', function () { popup.classList.remove('tn-wa-show'); });
        }
    });
})();
