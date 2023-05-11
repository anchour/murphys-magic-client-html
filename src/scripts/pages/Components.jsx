import Accordion from '../components/Accordion.jsx'
import Buttons from '../components/Buttons.jsx';
import Typography from '../components/Typography.jsx'

export default function Components() {
  return (
    <>
      <div className="container">

        <Accordion header="Typography" open>
          <Typography />
        </Accordion>

        <Accordion header="Buttons" open>
          <Buttons />
        </Accordion >
      </div >
    </>
  )
}