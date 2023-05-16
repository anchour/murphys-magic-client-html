import { useRef } from "preact/hooks"
import CopyComponent from "./CopyComponent"

interface BenefitProps {
  identifier?: string,
  title?: string,
  description?: string,
  showCopyComponent?: boolean
}

export function Benefit({
  identifier = null,
  title = null,
  description = null,
  showCopyComponent = true
}: BenefitProps) {
  const ref = useRef(null)
  return <div className="benefit" ref={ref}>
    <h3 className="benefit__title typography-body-lg">
      <span className="benefit__identifier typography-h1">{identifier ? identifier : '00'}</span>
      {title ? title : 'Benefit title'}
    </h3>
    <p className="benefit__description typography-body-sm">{description ? description : 'Card description'}</p>

    {showCopyComponent &&
      <CopyComponent onClick={() => { navigator.clipboard.writeText(ref.current?.querySelector('a').outerHTML) }} />
    }
  </div>
  
}

export default function Benefits() {
  return <>
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      <Benefit identifier="01"/>
      <Benefit identifier="02"/>
    </div >
  </>
}