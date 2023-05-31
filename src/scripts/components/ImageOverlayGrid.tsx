import { useRef } from "preact/hooks";
import ImageOverlay from "../components/ImageOverlayColumn";
import { DisableCopyComponent } from "../lib/interfaces";
import CopyComponent from "./CopyComponent";

interface ImageOverlayGridProps extends DisableCopyComponent {
  children?: JSX.Element | JSX.Element[] | null;
}

export default function ImageOverlayGrid({ children, disableCopy = false }: ImageOverlayGridProps): JSX.Element {
  const elementsRef = useRef(null);
  const elements = (
    <section className="image-overlay-grid" ref={elementsRef}>
      {children ? children : <>
        <ImageOverlay />
        <ImageOverlay />
      </>}
    </section>
  );

  return disableCopy ? elements : <div className="relative group">
    <CopyComponent onClick={() => navigator.clipboard.writeText(elementsRef.current.outerHTML)} />
    {elements}
  </div>
}