import Accordion from '../components/Accordion.jsx'
import Buttons from '../components/Buttons.jsx';
import Typography from '../components/Typography.jsx'
import Tags from '../components/Tags.jsx';

export default function Components() {
  return (
    <>
      {/* Grid layout with 200px wide layout on left for Table of Contents */}
      <div className="grid grid-cols-1 md:grid-cols-[300px,1fr]">


        {/* Table of Contents */}

        <div className="p-4 overflow-y-auto bg-white md:sticky md:top-0 md:h-screen">
          <div className="mb-4 text-xl font-semibold tracking-wider uppercase border-b border-b-black">Table of Contents</div>
          <ul className="list-none">
            <li className="py-1">
              <a href="#Typography">Typography</a>
            </li>

            <li className="py-1">
              <a href="#Buttons">Buttons</a>
            </li>

            <li className="py-1">
              <a href="#Tags">Tags</a>
            </li>
          </ul>
        </div>

        <div className="container">
          <a name="Typography"></a>
          <Accordion header="Typography" open>
            <Typography />
          </Accordion>

          <a id="Buttons"></a>
          <Accordion header="Buttons" open>
            <Buttons />
          </Accordion >

          <a name="Tags"></a>
          <Accordion header="Tags" open>
            <Tags />
          </Accordion>
        </div >
      </div>
    </>
  )
}