import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { JSX } from "preact"

export interface ImageOptions {
  caption?: string
  width?: string
  height?: string
}

const defaultOptions: ImageOptions = {
  caption: "",
  width: "100%",
  height: "auto"
}

const EnhancedImage: QuartzComponent = ({ fileData, cfg, displayClass, ...opts }: QuartzComponentProps) => {
  const options = { ...defaultOptions, ...opts } as ImageOptions
  
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    margin: '2rem 0',
    maxWidth: '100%',
  }

  const imageStyle = {
    width: options.width,
    height: options.height,
    maxWidth: '100%',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    objectFit: 'cover' as const,
  }

  const captionStyle = {
    textAlign: 'center' as const,
    marginTop: '0.5rem',
    color: 'var(--darkgray)',
    fontSize: '0.9rem',
    fontStyle: 'italic',
  }

  const handleImageClick = (e: JSX.TargetedMouseEvent<HTMLImageElement>) => {
    const img = e.currentTarget
    if (img.style.transform === 'scale(1.5)') {
      img.style.transform = 'scale(1)'
      img.style.cursor = 'zoom-in'
    } else {
      img.style.transform = 'scale(1.5)'
      img.style.cursor = 'zoom-out'
    }
  }

  // Filter out any undefined or invalid display classes
  const validDisplayClass = displayClass === 'mobile-only' || displayClass === 'desktop-only' ? displayClass : undefined
  
  return (
    <div style={containerStyle}>
      <img 
        src={fileData.filePath!}
        alt={options.caption || ''}
        style={imageStyle}
        onClick={handleImageClick}
        className={classNames(validDisplayClass, 'img-zoom')}
      />
      {options.caption && (
        <div style={captionStyle}>
          {options.caption}
        </div>
      )}
    </div>
  )
}

EnhancedImage.css = `
.enhanced-image {
  width: 100%;
  max-width: 100%;
  margin: 2rem 0;
}

.enhanced-image img {
  cursor: zoom-in;
  max-height: 80vh;
  object-fit: contain;
  transition: transform 0.3s ease-in-out;
}

.enhanced-image img:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.image-caption {
  text-align: center;
  margin-top: 0.5rem;
  color: var(--darkgray);
  font-size: 0.9rem;
  font-style: italic;
}
`

export default (() => EnhancedImage) satisfies QuartzComponentConstructor
