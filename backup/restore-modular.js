const fs = require('fs');
const path = require('path');

// Restore script to revert back to modular header and footer system
function restoreModular() {
    console.log('Restoring modular header and footer system...');
    
    // List of HTML files to update
    const htmlFiles = [
        'index.html', 'about.html', 'contact.html', 'tours.html',
        'destinations.html', 'gallery.html', 'blog.html', 'blog-details.html',
        'booking.html', 'faq.html', 'testimonials.html', 'terms.html',
        'privacy.html', 'destination-details.html', 'tour-details.html',
        'starter-page.html', '404.html'
    ];
    
    htmlFiles.forEach(filename => {
        if (fs.existsSync(filename)) {
            console.log(`Processing ${filename}...`);
            
            let content = fs.readFileSync(filename, 'utf8');
            
            // Add header & footer loader script back if not present
            if (!content.includes('header-loader.js')) {
                content = content.replace(
                    '  <!-- Main CSS File -->\n  <link href="assets/css/main.css" rel="stylesheet">',
                    '  <!-- Main CSS File -->\n  <link href="assets/css/main.css" rel="stylesheet">\n\n  <!-- Header & Footer Loader Script -->\n  <script src="assets/js/header-loader.js"></script>'
                );
            }
            
            // Replace header section with placeholder
            content = content.replace(
                /<header id="header"[\s\S]*?<\/header>/,
                '  <!-- Header Placeholder -->\n  <div id="header-placeholder"></div>'
            );
            
            // Replace footer section with placeholder
            content = content.replace(
                /<footer id="footer"[\s\S]*?<\/footer>/,
                '  <!-- Footer Placeholder -->\n  <div id="footer-placeholder"></div>'
            );
            
            fs.writeFileSync(filename, content);
            console.log(`✅ Restored ${filename}`);
        }
    });
    
    console.log('🎉 Restoration complete! Back to modular header and footer system.');
    console.log('🚀 Remember to start server for local development: python -m http.server 8080');
}

restoreModular();