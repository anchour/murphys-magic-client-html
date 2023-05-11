import Accordion from '../components/Accordion.jsx'
import Buttons from '../components/Buttons.jsx';
import Typography from '../components/Typography.jsx'

export default function Components() {
  return (
    <>
      {/* Grid layout with 200px wide layout on left for Table of Contents */}
      <div className="grid grid-cols-1 md:grid-cols-[300px,1fr]">


        {/* Table of Contents */}

        <div className="sticky top-0 h-screen p-4 overflow-y-auto bg-white">
          <div className="mb-4 text-xl font-semibold tracking-wider uppercase border-b border-b-black">Table of Contents</div>
          <ul className="list-none">
            <li className="py-1">
              <a href="#Typography">Typography</a>
            </li>

            <li className="py-1">

              <a href="#Buttons">Buttons</a>
            </li>
          </ul>
        </div>

        <div className="container">
          <h3 id="Typography">Typography</h3>
          <Accordion header="Typography" open>
            <Typography />
          </Accordion>

          <h3 id="Buttons">Buttons</h3>
          <Accordion header="Buttons" open>
            <Buttons />
          </Accordion >
        </div >
      </div>
    </>
  )
}