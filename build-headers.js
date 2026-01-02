const fs = require('fs');
const path = require('path');

// Build script to inline headers and footers for development without server
function buildHeadersAndFooters() {
    console.log('Building headers and footers for static deployment...');
    
    // Read the header and footer content
    const headerContent = fs.readFileSync('includes/header.html', 'utf8');
    const footerContent = fs.readFileSync('includes/footer.html', 'utf8');
    
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
            
            // Replace header placeholder with actual header content
            content = content.replace(
                '  <!-- Header Placeholder -->\n  <div id="header-placeholder"></div>',
                headerContent
            );
            
            // Replace footer placeholder with actual footer content
            content = content.replace(
                '  <!-- Footer Placeholder -->\n  <div id="footer-placeholder"></div>',
                footerContent
            );
            
            // Remove header & footer loader script (not needed when inlined)
            content = content.replace(
                /  <!-- Header & Footer Loader Script -->\n  <script src="assets\/js\/header-loader\.js"><\/script>\n\n/g,
                ''
            );
            
            fs.writeFileSync(filename, content);
            console.log(`✅ Updated ${filename}`);
        }
    });
    
    console.log('🎉 Build complete! All headers and footers inlined.');
    console.log('📝 To revert back to modular system, run: node restore-modular.js');
}

buildHeadersAndFooters();