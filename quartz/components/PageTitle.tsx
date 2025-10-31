import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const PageTitle: QuartzComponent = ({ fileData, cfg }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? "Manual Lensiro"
  const baseDir = pathToRoot(fileData.slug!)
  
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    margin: '2rem 0',
    textAlign: 'center' as const,
  };

  const titleStyle = {
    fontSize: '2rem',
    margin: 0,
    fontWeight: 600,
    fontFamily: 'Arial, sans-serif',
    color: 'var(--dark)',
    textDecoration: 'none',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>
        <a href={baseDir} style={{color: 'inherit', textDecoration: 'none'}}>{title}</a>
      </h1>
    </div>
  )
}

export default (() => PageTitle) satisfies QuartzComponentConstructor
