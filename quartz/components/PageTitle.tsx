import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  
  const logoStyle = {
    fontSize: '2.5rem',
    fontWeight: 800,
    fontFamily: 'Arial, sans-serif',
    color: 'black',
    textDecoration: 'none',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    marginBottom: '1rem',
    display: 'block'
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    margin: '2rem 0',
    textAlign: 'center' as const
  };

  const titleStyle = {
    fontSize: '2rem',
    margin: 0,
    fontWeight: 600,
    fontFamily: 'Arial, sans-serif',
    color: 'black',
    textDecoration: 'none'
  };

  return (
    <div style={containerStyle}>
      <a href={baseDir} style={logoStyle}>LENSIRO</a>
      <h1 style={titleStyle}>
        <a href={baseDir} style={{color: 'inherit', textDecoration: 'none'}}>{title}</a>
      </h1>
    </div>
  )
}

export default (() => PageTitle) satisfies QuartzComponentConstructor
