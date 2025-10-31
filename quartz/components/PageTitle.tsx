import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const PageTitle: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const title = "Manual" // Force "Manual" as the title
  const baseDir = pathToRoot(fileData.slug!)
  
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.8rem',
    padding: '2rem 0',
    borderBottom: '1px solid #e5e5e5',
    marginBottom: '2rem',
  };

  const logoStyle = {
    height: '40px',
    width: 'auto',
    display: 'block',
  };

  const titleStyle = {
    fontSize: '1.8rem',
    margin: 0,
    fontWeight: 400,
    fontFamily: 'Arial, sans-serif',
    color: '#666',
    textDecoration: 'none',
    lineHeight: 1,
  };

  const separatorStyle = {
    color: '#ccc',
    fontSize: '1.8rem',
    lineHeight: 1,
  };

  return (
    <div style={containerStyle}>
      <a href={baseDir}>
        <img src="/assets/logoDark.svg" alt="Lensiro Logo" style={logoStyle} />
      </a>
      <span style={separatorStyle}>/</span>
      <span style={titleStyle}>{title}</span>
    </div>
  )
}

export default (() => PageTitle) satisfies QuartzComponentConstructor
