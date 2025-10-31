import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <div class={classNames(displayClass, "page-title-container")}>
      <div class="logo-container">
        <a href={baseDir}>
          <svg width="120" height="50" viewBox="0 0 160 71" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="160" height="70.6207" fill="#000000"/>
            <path d="M40 35.5C40 27.4919 46.4919 21 54.5 21H105.5C113.508 21 120 27.4919 120 35.5C120 43.5081 113.508 50 105.5 50H54.5C46.4919 50 40 43.5081 40 35.5Z" fill="white"/>
            <circle cx="80" cy="35.5" r="14.5" fill="#000000"/>
          </svg>
        </a>
      </div>
      <h1 class="site-title">
        <a href={baseDir}>{title}</a>
      </h1>
    </div>
  )
}

PageTitle.css = `
.page-title-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 2rem 0;
  text-align: center;
}

.logo-container {
  margin-bottom: 1rem;
}

.logo-container svg {
  height: 50px;
  width: auto;
}

.site-title {
  font-size: 2rem;
  margin: 0;
  font-weight: 600;
  font-family: var(--titleFont);
  color: var(--dark);
  text-decoration: none;
}

/* Dark mode support */
.dark .site-title {
  color: var(--light);
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
