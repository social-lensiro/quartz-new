// quartz/scripts/image-zoom.js
document.addEventListener("DOMContentLoaded", function () {
  console.log("Image zoom script loaded!") // Debug log

  // Create overlay
  const overlay = document.createElement("div")
  overlay.className = "zoom-overlay"
  document.body.appendChild(overlay)

  // Add click handler to all images
  function initZoom() {
    console.log("Initializing zoom...") // Debug log
    const images = document.querySelectorAll("img")
    console.log(`Found ${images.length} images`) // Debug log

    images.forEach((img, index) => {
      if (img.dataset.zoomInitialized) return
      img.dataset.zoomInitialized = "true"
      console.log(`Initialized image ${index + 1}`) // Debug log

      img.style.cursor = "zoom-in"
      img.style.transition = "transform 0.2s ease"

      img.addEventListener("click", function (e) {
        console.log("Image clicked!") // Debug log
        e.stopPropagation()

        if (this.classList.contains("zoomed")) {
          // Zoom out
          console.log("Zooming out") // Debug log
          this.classList.remove("zoomed")
          overlay.style.display = "none"
          document.body.classList.remove("zoomed")
        } else {
          // Zoom in
          console.log("Zooming in") // Debug log
          document.querySelectorAll("img.zoomed").forEach((zoomedImg) => {
            zoomedImg.classList.remove("zoomed")
          })

          this.classList.add("zoomed")
          overlay.style.display = "block"
          document.body.classList.add("zoomed")

          // Close on overlay click
          overlay.onclick = function () {
            console.log("Overlay clicked") // Debug log
            document.querySelectorAll("img.zoomed").forEach((img) => {
              img.classList.remove("zoomed")
            })
            overlay.style.display = "none"
            document.body.classList.remove("zoomed")
          }

          // Close on escape key
          const handleKeyDown = function (e) {
            if (e.key === "Escape") {
              console.log("Escape key pressed") // Debug log
              document.querySelectorAll("img.zoomed").forEach((img) => {
                img.classList.remove("zoomed")
              })
              overlay.style.display = "none"
              document.body.classList.remove("zoomed")
              document.removeEventListener("keydown", handleKeyDown)
            }
          }

          document.addEventListener("keydown", handleKeyDown)
        }
      })
    })
  }

  // Initial initialization
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initZoom)
  } else {
    initZoom()
  }

  // Re-initialize for dynamically loaded content
  if (typeof window.MutationObserver !== "undefined") {
    new MutationObserver(function (mutations) {
      let shouldReinit = false
      mutations.forEach(function (mutation) {
        if (mutation.addedNodes.length) {
          shouldReinit = true
        }
      })
      if (shouldReinit) {
        console.log("New content detected, reinitializing zoom...") // Debug log
        initZoom()
      }
    }).observe(document.body, {
      childList: true,
      subtree: true,
    })
  }
})
