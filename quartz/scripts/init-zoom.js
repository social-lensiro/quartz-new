// Initialize image zoom functionality
function initImageZoom() {
  // Create overlay if it doesn't exist
  let overlay = document.querySelector('.zoom-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'zoom-overlay';
    document.body.appendChild(overlay);
  }

  // Add click handler to all images
  document.querySelectorAll('img:not([data-zoom-initialized])').forEach(img => {
    img.setAttribute('data-zoom-initialized', 'true');
    img.style.cursor = 'zoom-in';
    
    img.addEventListener('click', function(e) {
      e.stopPropagation();
      
      if (this.classList.contains('zoomed')) {
        // Zoom out
        this.classList.remove('zoomed');
        overlay.style.display = 'none';
        document.body.classList.remove('zoomed');
      } else {
        // Zoom in
        document.querySelectorAll('img.zoomed').forEach(zoomedImg => {
          zoomedImg.classList.remove('zoomed');
        });
        
        this.classList.add('zoomed');
        overlay.style.display = 'block';
        document.body.classList.add('zoomed');
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

// Also export for manual initialization
window.initImageZoom = initImageZoom;
