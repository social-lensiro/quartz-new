// Add click-to-zoom functionality to images
document.addEventListener('click', (e) => {
  // Check if the clicked element is an image
  if (e.target.tagName === 'IMG') {
    const img = e.target;
    
    // Toggle zoom class
    if (img.classList.contains('zoomed')) {
      img.classList.remove('zoomed');
      img.style.cursor = 'zoom-in';
    } else {
      // Remove zoom from all other images
      document.querySelectorAll('img.zoomed').forEach(zoomedImg => {
        zoomedImg.classList.remove('zoomed');
        zoomedImg.style.cursor = 'zoom-in';
      });
      
      // Zoom the clicked image
      img.classList.add('zoomed');
      img.style.cursor = 'zoom-out';
      
      // Scroll to center the image
      img.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
});

// Close zoom when clicking outside the image
document.addEventListener('click', (e) => {
  if (!e.target.closest('img')) {
    document.querySelectorAll('img.zoomed').forEach(img => {
      img.classList.remove('zoomed');
      img.style.cursor = 'zoom-in';
    });
  }
});
