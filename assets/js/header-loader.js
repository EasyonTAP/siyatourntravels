// Header and Footer loader with navigation handler
document.addEventListener('DOMContentLoaded', function() {
    // Load header and footer content
    loadHeader();
    loadFooter();
});

function loadHeader() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    
    if (!headerPlaceholder) {
        console.error('Header placeholder not found');
        return;
    }

    fetch('./includes/header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            headerPlaceholder.innerHTML = data;
            // Set active navigation after header is loaded
            setActiveNavigation();
        })
        .catch(error => {
            console.error('Error loading header:', error);
            // Fallback: create a basic header if loading fails
            createFallbackHeader();
        });
}

function createFallbackHeader() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = `
            <header id="header" class="header d-flex align-items-center fixed-top">
                <div class="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
                    <a href="index.html" class="logo d-flex align-items-center me-auto me-xl-0">
                        <img src="assets/img/logo.png" alt="Siya Tour N Travels">
                        <h1 class="sitename">Siya Tour N Travels</h1>
                    </a>
                    <nav id="navmenu" class="navmenu">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
                    </nav>
                </div>
            </header>
        `;
        setActiveNavigation();
    }
}

function loadFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    
    if (!footerPlaceholder) {
        console.error('Footer placeholder not found');
        return;
    }

    fetch('./includes/footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            footerPlaceholder.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading footer:', error);
            // Fallback: create a basic footer if loading fails
            createFallbackFooter();
        });
}

function createFallbackFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = `
            <footer id="footer" class="footer position-relative dark-background">
                <div class="container copyright text-center mt-4">
                    <p>© <span>Copyright</span> <strong class="px-1 sitename">Siya Tour N Travels</strong> <span>All Rights Reserved</span></p>
                    <div class="credits">Crafted with ❤️ by Chirag Vasani</div>
                </div>
            </footer>
        `;
    }
}

function setActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Wait a bit for the DOM to be fully ready
    setTimeout(() => {
        // Remove all active classes
        const navLinks = document.querySelectorAll('#navmenu a');
        if (navLinks.length === 0) {
            console.warn('Navigation menu not found');
            return;
        }
        
        navLinks.forEach(link => link.classList.remove('active'));
        
        // Add active class to current page
        switch(currentPage) {
            case 'index.html':
            case '':
                const navHome = document.getElementById('nav-home');
                if (navHome) navHome.classList.add('active');
                break;
            case 'about.html':
                const navAbout = document.getElementById('nav-about');
                if (navAbout) navAbout.classList.add('active');
                break;
            case 'destinations.html':
                const navDestinations = document.getElementById('nav-destinations');
                if (navDestinations) navDestinations.classList.add('active');
                break;
            case 'tours.html':
                const navTours = document.getElementById('nav-tours');
                if (navTours) navTours.classList.add('active');
                break;
            case 'gallery.html':
                const navGallery = document.getElementById('nav-gallery');
                if (navGallery) navGallery.classList.add('active');
                break;
            case 'blog.html':
            case 'blog-details.html':
                const navBlog = document.getElementById('nav-blog');
                if (navBlog) navBlog.classList.add('active');
                break;
            case 'contact.html':
                const navContact = document.getElementById('nav-contact');
                if (navContact) navContact.classList.add('active');
                break;
        }
    }, 100);
}