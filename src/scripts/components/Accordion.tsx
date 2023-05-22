import SectionHeading from "./SectionHeading";
import { useState } from "preact/hooks";

export default function Accordion({ children, header, open = false }) {
  const elProps = {
    className: "accordion",
    open: open
  }

  const [detailsOpen, setDetailsOpen] = useState(open)

  return (
    <details {...elProps}>
      <summary className=" [&::-webkit-details-marker]:hidden list-none marker:list-none border-b-2 border-water py-6 cursor-pointer"
        onClick={() => {
          setDetailsOpen(!detailsOpen)
        }}
      >
        <SectionHeading size="large">
          {detailsOpen && <span className="inline-block w-12 text-3xl relative top-[2px] font-normal text-center h-11" dangerouslySetInnerHTML={{ __html: '&ndash;' }} />}
          {!detailsOpen && <span className="inline-block w-12 text-3xl relative top-[2px] font-normal text-center h-11" dangerouslySetInnerHTML={{ __html: '&plus;' }} />}

          {header}
        </SectionHeading>
      </summary>

      <div className="py-6">
        {children}
      </div>
    </details>
  )
}