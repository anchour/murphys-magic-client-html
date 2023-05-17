import { useRef } from "preact/hooks";
import CopyComponent from "./CopyComponent";
import SVGViewer from "./SVGViewer";

export const Icon = ({ icon = null, description = null, svgClass = null,  showCopyComponent = true}) => {
  const ref = useRef(null);

  const handleClick = () => {
    navigator.clipboard.writeText(ref.current.outerHTML);
  };

  return (
    <div className="relative group">
      <div className="icon" ref={ref}>
        <SVGViewer
          svgClass={svgClass ? svgClass : "icon__svg"}
          filePath={icon ? icon : "/src/images/icons/ico-placeholder.svg"}
        />

        <p className="icon__description typography-body-lg">
          {description ? description : "Icon description"}
        </p>
      </div>

      {showCopyComponent &&
        <CopyComponent onClick={handleClick} />
      }
    </div>
  );
};

export default function Icons() {
  return (
    <>
      <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-4">
        <Icon />
        <Icon />
        <Icon />
        <Icon />
      </div>
    </>
  );
}
