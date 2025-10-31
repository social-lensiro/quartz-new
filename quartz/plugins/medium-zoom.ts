import { QuartzTransformerPlugin } from "../types";

export const MediumZoom: QuartzTransformerPlugin = () => ({
  name: "MediumZoom",
  textTransform(_ctx, src) {
    // Add medium-zoom class to all content images
    if (src.includes('<img')) {
      src = src.replace(/<img([^>]*)>/g, (match, attrs) => {
        // Don't add zoom class if already has one
        if (attrs.includes('class=')) {
          return match.replace('class="', 'class="zoom ');
        } else {
          return `<img class="zoom"${attrs}>`;
        }
      });
    }
    
    // Add medium-zoom script and initialization
    if (src.includes('</body>')) {
      src = src.replace(
        '</body>',
        `
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/medium-zoom@1.0.8/dist/medium-zoom.min.css" />
        <script src="https://cdn.jsdelivr.net/npm/medium-zoom@1.0.8/dist/medium-zoom.min.js" integrity="sha256-7PhEpEWEW0XXQ0k6kQrPKwuoIomzUt4jJ4/dxXJ2j4=" crossorigin="anonymous"></script>
        <script>
          document.addEventListener('DOMContentLoaded', function() {
            mediumZoom('.zoom', {
              margin: 24,
              background: 'rgba(0, 0, 0, 0.9)',
              scrollOffset: 40,
            });
          });
        </script>
        </body>
        `
      );
    }
    
    return src;
  },
});
