// quartz/scripts/hover-zoom.js
console.log("Hover zoom script loaded!") // Debug log

// Add hover effect to all images
function initHoverZoom() {
  const images = document.querySelectorAll("img:not([data-zoom-initialized])")
  console.log(`Found ${images.length} images`) // Debug log

  images.forEach((img, index) => {
    img.dataset.zoomInitialized = "true"
    console.log(`Initialized image ${index + 1}`) // Debug log
  })
}

// Initialize on page load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initHoverZoom)
} else {
  initHoverZoom()
}

// Optional: Re-initialize for dynamically loaded content
if (typeof window.MutationObserver !== "undefined") {
  new MutationObserver(function (mutations) {
    let shouldReinit = mutations.some((mutation) => mutation.addedNodes.length > 0)
    if (shouldReinit) {
      console.log("New content detected, reinitializing hover zoom...")
      initHoverZoom()
    }
  }).observe(document.body, { childList: true, subtree: true })
}
