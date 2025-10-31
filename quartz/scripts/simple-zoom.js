// Simple image zoom functionality
document.addEventListener('click', function(e) {
  // Check if the clicked element is an image
  if (e.target.tagName === 'IMG') {
    const img = e.target;
    const body = document.body;
    const overlay = document.createElement('div');
    overlay.className = 'zoom-overlay';
    
    // Toggle zoom
    if (img.classList.contains('zoomed')) {
      // Zoom out
      img.classList.remove('zoomed');
      body.classList.remove('zoomed');
      const existingOverlay = document.querySelector('.zoom-overlay');
      if (existingOverlay) {
        existingOverlay.remove();
      }
    } else {
      // Zoom in
      document.querySelectorAll('img.zoomed').forEach(zoomedImg => {
        zoomedImg.classList.remove('zoomed');
      });
      
      // Add overlay
      document.body.appendChild(overlay);
      img.classList.add('zoomed');
      body.classList.add('zoomed');
      
      // Center the image
      img.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      // Close on overlay click
      overlay.addEventListener('click', function() {
        img.classList.remove('zoomed');
        body.classList.remove('zoomed');
        overlay.remove();
      });
      
      // Close on escape key
      const handleKeyDown = function(e) {
        if (e.key === 'Escape') {
          img.classList.remove('zoomed');
          body.classList.remove('zoomed');
          overlay.remove();
          document.removeEventListener('keydown', handleKeyDown);
        }
      };
      
      document.addEventListener('keydown', handleKeyDown);
    }
  }
});

// Re-initialize for dynamically loaded content
if (typeof window.MutationObserver !== 'undefined') {
  const observer = new MutationObserver(function(mutations) {
    // Re-run the zoom initialization for new images
    document.querySelectorAll('img:not([data-zoom-initialized])').forEach(img => {
      img.style.cursor = 'pointer';
      img.setAttribute('data-zoom-initialized', 'true');
    });
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}
