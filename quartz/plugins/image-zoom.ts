import { QuartzTransformerPlugin } from "../types"

export const ImageZoom: QuartzTransformerPlugin = () => ({
  name: "ImageZoom",
  textTransform(_ctx, src) {
    // Add zoom class to all images
    if (src.includes('<img')) {
      src = src.replace(/<img([^>]*)>/g, (match, attrs) => {
        // Don't add zoom class if already has one
        if (attrs.includes('class=')) {
          return match.replace('class="', 'class="zoomable ');
        } else {
          return `<img class="zoomable"${attrs}>`;
        }
      });
    }
    
    // Add our zoom script and styles
    if (src.includes('</body>')) {
      const zoomScript = `
        <style>
          .zoomable {
            cursor: pointer;
            transition: transform 0.2s;
          }
          .zoomable.zoomed {
            position: fixed !important;
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) scale(1.8) !important;
            max-width: 90vw !important;
            max-height: 90vh !important;
            width: auto !important;
            height: auto !important;
            margin: 0 !important;
            padding: 1rem !important;
            z-index: 1001 !important;
            background: white !important;
            box-shadow: 0 0 0 100vmax rgba(0, 0, 0, 0.8) !important;
            cursor: zoom-out !important;
            object-fit: contain !important;
          }
          .zoom-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7);
            z-index: 1000;
            cursor: zoom-out;
          }
          body.zoomed {
            overflow: hidden;
          }
          body.zoomed .zoom-overlay {
            display: block;
          }
        </style>
        <script>
          document.addEventListener('DOMContentLoaded', function() {
            // Create overlay
            const overlay = document.createElement('div');
            overlay.className = 'zoom-overlay';
            document.body.appendChild(overlay);
            
            // Add click handler to all zoomable images
            function initZoom() {
              document.querySelectorAll('img.zoomable').forEach(img => {
                if (img.dataset.zoomInitialized) return;
                img.dataset.zoomInitialized = 'true';
                
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
                    
                    // Close on overlay click
                    overlay.onclick = function() {
                      document.querySelectorAll('img.zoomed').forEach(img => {
                        img.classList.remove('zoomed');
                      });
                      overlay.style.display = 'none';
                      document.body.classList.remove('zoomed');
                    };
                    
                    // Close on escape key
                    const handleKeyDown = function(e) {
                      if (e.key === 'Escape') {
                        document.querySelectorAll('img.zoomed').forEach(img => {
                          img.classList.remove('zoomed');
                        });
                        overlay.style.display = 'none';
                        document.body.classList.remove('zoomed');
                        document.removeEventListener('keydown', handleKeyDown);
                      }
                    };
                    
                    document.addEventListener('keydown', handleKeyDown);
                  }
                });
              });
            }
            
            // Initial initialization
            initZoom();
            
            // Re-initialize for dynamically loaded content
            if (typeof window.MutationObserver !== 'undefined') {
              new MutationObserver(function() {
                initZoom();
              }).observe(document.body, {
                childList: true,
                subtree: true
              });
            }
          });
        </script>
      `;
      
      src = src.replace('</body>', `${zoomScript}\n</body>`);
    }
    
    return src;
  },
});
