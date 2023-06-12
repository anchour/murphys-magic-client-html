import { useRef } from "preact/hooks";
import { DisableCopyComponent } from "../lib/interfaces"
import CopyComponent from "./CopyComponent"

interface CopyWrapperProps extends DisableCopyComponent {
  children: JSX.Element | JSX.Element[];
}

const CopyWrapper = (props: CopyWrapperProps) => {
  const ref = useRef(null)

  return props.disableCopy ? <>{props.children}</> : (
    <div className="relative group">
      <CopyComponent onClick={() => navigator.clipboard.writeText(ref.current.innerHTML)} />

      <div ref={ref}>
        {props.children}
      </div>
    </div>
  )
}

export default CopyWrapper