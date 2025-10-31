import { Component, createSignal, onMount, onCleanup } from "preact"
import { JSX } from "preact"

interface ZoomableImageProps {
  src: string
  alt?: string
  className?: string
  style?: JSX.CSSProperties
}

export default function ZoomableImage({ src, alt = "", className = "", style = {} }: ZoomableImageProps) {
  const [isZoomed, setIsZoomed] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  // Handle click to toggle zoom
  const handleClick = (e: MouseEvent) => {
    e.stopPropagation()
    setIsZoomed(!isZoomed)
  }

  // Close zoom when clicking outside
  const handleOutsideClick = (e: MouseEvent) => {
    if (isZoomed && !imgRef.current?.contains(e.target as Node)) {
      setIsZoomed(false)
    }
  }

  // Close zoom on escape key
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && isZoomed) {
      setIsZoomed(false)
    }
  }

  // Set up event listeners
  useEffect(() => {
    document.addEventListener('click', handleOutsideClick)
    document.addEventListener('keydown', handleKeyDown)
    setIsMounted(true)
    
    return () => {
      document.removeEventListener('click', handleOutsideClick)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isZoomed])

  return (
    <>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`zoomable-image ${isZoomed ? 'zoomed' : ''} ${className}`}
        style={{
          cursor: 'zoom-in',
          maxWidth: '100%',
          height: 'auto',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.2s ease',
          ...(isZoomed ? {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) scale(1.8)',
            maxWidth: '90vw',
            maxHeight: '90vh',
            width: 'auto',
            height: 'auto',
            zIndex: 1001,
            backgroundColor: 'white',
            padding: '1rem',
            cursor: 'zoom-out',
            boxShadow: '0 0 0 100vmax rgba(0, 0, 0, 0.8)'
          } : {}),
          ...style
        }}
        onClick={handleClick}
      />
      {isZoomed && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 1000,
            cursor: 'zoom-out'
          }}
          onClick={() => setIsZoomed(false)}
        />
      )}
      <style jsx global>{`
        body.zoomed {
          overflow: hidden;
        }
      `}</style>
      <style jsx>{`
        .zoomed {
          z-index: 1001;
        }
      `}</style>
    </>
  )
}
