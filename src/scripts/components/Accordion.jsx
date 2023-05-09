import SectionHeading from "./SectionHeading";

export default function Accordion({ children, header, open = false }) {
  const elProps = {
    className: "accordion",
    open: open
  }

  return (
    <details {...elProps}>
      <summary className=" [&::-webkit-details-marker]:hidden list-none marker:list-none border-b-2 border-water py-6 cursor-pointer">
        <SectionHeading size="large">{header}</SectionHeading>
      </summary>

      <div className="py-6">
        {children}
      </div>
    </details>
  )
}