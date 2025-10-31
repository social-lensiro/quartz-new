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
        <a href={baseDir} class="logo-text">LENSIRO</a>
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

.logo-text {
  font-size: 2.5rem;
  font-weight: 800;
  font-family: var(--titleFont);
  color: #000;
  text-decoration: none;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.dark .logo-text {
  color: #fff;
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
