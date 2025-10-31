// Create overlay element
const overlay = document.createElement('div');
overlay.className = 'zoom-overlay';
document.body.appendChild(overlay);

// Add click-to-zoom functionality to all images
function initImageZoom() {
  const images = document.querySelectorAll('img:not(.no-zoom)');
  
  images.forEach(img => {
    // Skip if already initialized
    if (img.dataset.zoomInitialized) return;
    img.dataset.zoomInitialized = 'true';
    
    // Make images zoomable
    img.style.cursor = 'zoom-in';
    
    // Add click handler
    img.addEventListener('click', function(e) {
      e.stopPropagation();
      
      if (this.classList.contains('zoomed')) {
        // Zoom out
        this.classList.remove('zoomed');
        document.body.classList.remove('zoomed');
        overlay.style.display = 'none';
      } else {
        // Zoom in
        document.querySelectorAll('img.zoomed').forEach(img => {
          img.classList.remove('zoomed');
        });
        
        this.classList.add('zoomed');
        document.body.classList.add('zoomed');
        overlay.style.display = 'block';
        
        // Center the image
        this.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });
  
  // Close zoom when clicking overlay
  overlay.addEventListener('click', function() {
    document.querySelectorAll('img.zoomed').forEach(img => {
      img.classList.remove('zoomed');
    });
    this.style.display = 'none';
    document.body.classList.remove('zoomed');
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initImageZoom);

// Re-initialize when dynamic content loads
if (typeof window.MutationObserver !== 'undefined') {
  const observer = new MutationObserver(function(mutations) {
    initImageZoom();
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}
