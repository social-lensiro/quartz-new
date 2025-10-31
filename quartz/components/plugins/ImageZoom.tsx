import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import { classNames } from "../../util/lang"

export default (() => {
  const ImageZoom: QuartzComponent = ({ fileData, displayClass, ...props }: QuartzComponentProps) => {
    const handleClick = (e: MouseEvent) => {
      const img = e.target as HTMLImageElement
      if (img.classList.contains('zoomed')) {
        img.classList.remove('zoomed')
        img.style.cursor = 'zoom-in'
      } else {
        img.classList.add('zoomed')
        img.style.cursor = 'zoom-out'
        img.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }

    return (
      <div class={classNames(displayClass, 'image-container')}>
        <img 
          {...props} 
          onClick={handleClick}
          loading="lazy"
          class="zoomable-image"
        />
      </div>
    )
  }

  ImageZoom.css = `
  .image-container {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
  }

  .zoomable-image {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
    cursor: zoom-in;
    object-fit: contain;
    background-color: var(--light);
    padding: 0.5rem;
    max-height: 80vh;
  }

  .zoomable-image.zoomed {
    transform: scale(1.5);
    cursor: zoom-out;
    z-index: 10;
    position: relative;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2) !important;
    background-color: white;
  }

  .image-caption {
    text-align: center;
    margin-top: 0.5rem;
    color: var(--darkgray);
    font-size: 0.9rem;
    font-style: italic;
  }
  `

  return ImageZoom
}) satisfies QuartzComponentConstructor
