import { QuartzComponentConstructor } from "../components/types"

const CustomHeader: QuartzComponentConstructor = () => {
  return () => (
    <header class="custom-header" style="margin-bottom: 2rem;">
      <a href="/" class="site-title" style="font-size: 1.6rem; font-weight: 700;">
        Manual Lensiro
      </a>
    </header>
  )
}

export default CustomHeader
