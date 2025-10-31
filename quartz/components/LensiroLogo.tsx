import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const LensiroLogo: QuartzComponent = () => {
  return (
    <div class="lensiro-logo">
      <svg width="160" height="71" viewBox="0 0 160 71" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="70.6207" fill="#000000"/>
        <path d="M40 35.5C40 27.4919 46.4919 21 54.5 21H105.5C113.508 21 120 27.4919 120 35.5C120 43.5081 113.508 50 105.5 50H54.5C46.4919 50 40 43.5081 40 35.5Z" fill="white"/>
        <circle cx="80" cy="35.5" r="14.5" fill="#000000"/>
      </svg>
    </div>
  )
}

LensiroLogo.css = `
.lensiro-logo {
  margin-bottom: 1rem;
  text-align: center;
}

.lensiro-logo svg {
  height: 50px;
  width: auto;
}
`

export default (() => LensiroLogo) satisfies QuartzComponentConstructor
