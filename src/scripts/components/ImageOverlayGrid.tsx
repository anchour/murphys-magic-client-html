import ImageOverlay from "../components/ImageOverlayColumn";
import { DisableCopyComponent } from "../lib/interfaces";
import CopyWrapper from "./CopyWrapper";

interface ImageOverlayGridProps extends DisableCopyComponent {
  children?: JSX.Element | JSX.Element[] | null;
}

export default function ImageOverlayGrid({ children, disableCopy = false }: ImageOverlayGridProps): JSX.Element {
  return <CopyWrapper disableCopy={disableCopy} buttonText="Image overlay grid">
    <section className="image-overlay-grid">
      {children ? children : <>
        <ImageOverlay />
        <ImageOverlay />
      </>}
    </section>
  </CopyWrapper>
}