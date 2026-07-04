/**
 * Scroll Animations for Siya World Holidays
 * Lightweight scroll-reveal effects without external libraries
 */
(function () {
    'use strict';

    // ── Scroll Reveal ──
    // Elements with [data-reveal] animate in when they enter the viewport
    function initScrollReveal() {
        var reveals = document.querySelectorAll('[data-reveal]');
        if (!reveals.length) return;

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var el = entry.target;
                    var delay = el.getAttribute('data-reveal-delay') || 0;
                    setTimeout(function () {
                        el.classList.add('tn-revealed');
                    }, parseInt(delay));
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

        reveals.forEach(function (el) { observer.observe(el); });
    }

    // ── Auto-apply reveal to common elements ──
    function autoApplyReveal() {
        // Cards, sections, headings
        var selectors = [
            '.card',
            '.tn-review-card-wrapper',
            '.tn-pkg-item',
            '.tn-gallery-item',
            'section .row > [class*="col-"]',
            '.tn-section .text-center.mb-5',
            '.tn-find-tour-section .row > [class*="col-"]'
        ];

        var delay = 0;
        selectors.forEach(function (sel) {
            var elements = document.querySelectorAll(sel);
            elements.forEach(function (el, index) {
                if (!el.hasAttribute('data-reveal')) {
                    el.setAttribute('data-reveal', 'fade-up');
                    el.setAttribute('data-reveal-delay', (index % 6) * 100);
                }
            });
        });
    }

    // ── Parallax effect on hero images ──
    function initParallax() {
        var heroes = document.querySelectorAll('.tn-about-hero-img');
        if (!heroes.length) return;

        window.addEventListener('scroll', function () {
            var scrolled = window.pageYOffset;
            heroes.forEach(function (hero) {
                hero.style.transform = 'translateY(' + (scrolled * 0.3) + 'px)';
            });
        }, { passive: true });
    }

    // ── Counter animation ──
    function initCounters() {
        var counters = document.querySelectorAll('[data-count]');
        if (!counters.length) return;

        var counterObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var el = entry.target;
                    var target = parseInt(el.getAttribute('data-count'));
                    var duration = 2000;
                    var start = 0;
                    var startTime = null;

                    function animate(timestamp) {
                        if (!startTime) startTime = timestamp;
                        var progress = Math.min((timestamp - startTime) / duration, 1);
                        var current = Math.floor(progress * target);
                        el.textContent = current + (el.getAttribute('data-count-suffix') || '');
                        if (progress < 1) requestAnimationFrame(animate);
                        else el.textContent = target + (el.getAttribute('data-count-suffix') || '');
                    }
                    requestAnimationFrame(animate);
                    counterObserver.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(function (el) { counterObserver.observe(el); });
    }

    // ── Smooth scroll for anchor links ──
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(function (link) {
            link.addEventListener('click', function (e) {
                var target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

    // ── Navbar shrink on scroll ──
    function initNavbarShrink() {
        var navbar = document.querySelector('.tn-navbar');
        if (!navbar) return;

        window.addEventListener('scroll', function () {
            if (window.scrollY > 80) {
                navbar.classList.add('tn-navbar-scrolled');
            } else {
                navbar.classList.remove('tn-navbar-scrolled');
            }
        }, { passive: true });
    }

    // ── Back to top button ──
    function initBackToTop() {
        var btn = document.createElement('button');
        btn.className = 'tn-back-to-top';
        btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        btn.setAttribute('aria-label', 'Back to top');
        document.body.appendChild(btn);

        window.addEventListener('scroll', function () {
            if (window.scrollY > 400) {
                btn.classList.add('tn-btt-visible');
            } else {
                btn.classList.remove('tn-btt-visible');
            }
        }, { passive: true });

        btn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ── Initialize all ──
    document.addEventListener('DOMContentLoaded', function () {
        autoApplyReveal();
        initScrollReveal();
        initParallax();
        initCounters();
        initSmoothScroll();
        initNavbarShrink();
        initBackToTop();
    });
})();
