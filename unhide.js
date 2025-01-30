// Script to unhide content in Study.com pages
(function() {
    // Check if script has already run
    if (window._unhideScriptInitialized) return;
    window._unhideScriptInitialized = true;

    // Function to unhide content
    function unhideContent() {
        // Remove classes containing 'faded'
        document.querySelectorAll('*').forEach(element => {
            if (element.classList) {
                Array.from(element.classList).forEach(className => {
                    if (className.includes('faded')) {
                        element.classList.remove(className);
                    }
                });
            }
        });

        // Hide paywall overlays by setting their display to none
        const paywallOverlays = document.querySelectorAll('.article-cutoff-div, .product-wizard-paywall, .paywall-v4, .video-paywall-body');
        paywallOverlays.forEach(overlay => {
            overlay.style.display = 'none';
            overlay.style.visibility = 'hidden';
            overlay.style.opacity = '0';
        });

        // Show hidden content by modifying classes and styles
        const hiddenContent = document.querySelectorAll('.hidden, .collapse');
        hiddenContent.forEach(element => {
            element.classList.remove('hidden');
            element.classList.remove('collapse');
            element.style.display = 'block';
            element.style.visibility = 'visible';
            element.style.opacity = '1';
        });

        // Make transcript content visible
        const transcriptContainers = document.querySelectorAll('#transcriptMain, .transcript, .wikiContent');
        transcriptContainers.forEach(container => {
            container.style.display = 'block';
            container.style.visibility = 'visible';
            container.style.opacity = '1';
            container.style.height = 'auto';
            container.style.overflow = 'visible';
        });

        // Show collapsed sections
        const collapsedSections = document.querySelectorAll('.collapsed');
        collapsedSections.forEach(section => {
            section.classList.remove('collapsed');
            section.classList.add('in');
            section.style.height = 'auto';
            section.style.overflow = 'visible';
        });
    }

// Run the script
unhideContent();

// Optional: Set up a mutation observer to handle dynamically loaded content
const observer = new MutationObserver(unhideContent);
observer.observe(document.body, {
    childList: true,
    subtree: true
});

console.log('Content unhiding script has been executed!');
})();