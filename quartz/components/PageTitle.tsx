import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    margin: '2rem 0',
  };

  const logoStyle = {
    fontSize: '2.2rem',
    fontWeight: 800,
    fontFamily: 'Arial, sans-serif',
    color: 'black',
    textDecoration: 'none',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    lineHeight: 1,
  };

  const titleStyle = {
    fontSize: '1.8rem',
    margin: 0,
    fontWeight: 400,
    fontFamily: 'Arial, sans-serif',
    color: 'black',
    textDecoration: 'none',
    lineHeight: 1,
  };

  return (
    <div style={containerStyle}>
      <a href={baseDir} style={logoStyle}>LENSIRO</a>
      <span style={titleStyle}>{title}</span>
    </div>
  )
}

export default (() => PageTitle) satisfies QuartzComponentConstructor
