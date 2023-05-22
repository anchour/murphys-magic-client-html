import Accordion from '../components/Accordion.jsx'
import Buttons from '../components/Buttons.jsx';
import Typography from '../components/Typography.jsx'
import Tags from '../components/Tags.tsx';
import Cards from '../components/Cards.tsx';
import Details from '../components/Details.tsx';
import Benefits from '../components/Benefits.tsx';
import MailingList from '../components/MailingList';
import Icons from '../components/Icons.tsx';


const toc = [
  {
    id: 'Cards', title: 'Cards'
  },
  {
    id: 'Typography', title: 'Typography'
  },
  {
    id: 'Buttons', title: 'Buttons'
  },
  {
    id: 'Tags', title: 'Tags'
  },
  {
    id: 'MailingList', title: 'Mailing List'
  },
  {
    id: 'Accordion', title: 'Accordion'
  },
  {
    id: 'Benefits', title: 'Benefits'
  },
  {
    id: 'Icons', title: 'Icons'
  }
];

export default function Components() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[300px,1fr]">

        {/* Table of Contents */}
        <div className="p-4 overflow-y-auto bg-white md:sticky md:top-0 md:h-screen">
          <div className="mb-4 text-xl font-semibold tracking-wider uppercase border-b border-b-black">Table of Contents</div>
          <ul className="list-none">
            {
              toc.map(({ id, title }) =>
                <li className='py-1'>
                  <a href={`#${id}`}>{title}</a>
                </li>
              )
            }
          </ul>
        </div>

        <div className="container">
          <a name="Cards"></a>
          <Accordion header="Cards" open>
            <Cards />
          </Accordion>

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

          {/* Mailing list signup */}
          <a name="MailingList"></a>
          <Accordion header="Mailing List" open>
            <MailingList />
          </Accordion>

          {/* Accordions */}
          <a name="Accordion"></a>
          <Accordion header="Accordion" open>
            <Details title="Accordion 1" open>
              Contents of accordion 1 go here.
            </Details>
          </Accordion>

          <a name="Benefits"></a>
          <Accordion header="Benefits" open>
            <Benefits />
          </Accordion>


          <a name="Icons"></a>
          <Accordion header="Icons" open>
            <Icons />
          </Accordion>
        </div >
      </div>
    </>
  )
}