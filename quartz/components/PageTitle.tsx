import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <div class={classNames(displayClass, "page-title-container")}>
      <a href={baseDir} class="logo-link">
        <img 
          src="/static/logo.svg" 
          alt="Lensiro Logo" 
          class="site-logo" 
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
      </a>
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

.site-title {
  font-size: 2rem;
  margin: 0;
  font-weight: 600;
  font-family: var(--titleFont);
  color: var(--dark);
  text-decoration: none;
}

.site-logo {
  height: 60px;
  width: auto;
  margin: 0 auto 0.5rem;
  display: block;
}

.logo-link {
  display: block;
  text-decoration: none;
  margin-bottom: 0.5rem;
}

/* Dark mode support */
.dark .site-title {
  color: var(--light);
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
