import Accordion from './Accordion.jsx'
import Button from './Button.jsx'
import Typography from './Typography.jsx'

export function App() {
  return (
    <>
      <div className="container">

        <Accordion header="Typography">
          <Typography />
        </Accordion>

        <Accordion header="Buttons" open>
          <div className="pt-8 px-6 flex flex-wrap gap-8 items-center">
            <Button />
            <Button variant="secondary" />
            <Button small={true} />
            <Button variant="secondary" small={true} />
          </div>

          <div className="py-8 px-6 flex flex-wrap gap-8 items-center">
            <Button icon={false} />
            <Button variant="secondary" icon={false} />
            <Button small={true} icon={false} />
            <Button variant="secondary" icon={false} small={true} />
          </div>

          <div className="bg-smoke pt-8 px-6 flex flex-wrap gap-8 items-center">
            <Button dark="true" />
            <Button variant="secondary" dark="true" />
            <Button dark="true" small={true} />
            <Button variant="secondary" dark="true" small={true} />
          </div>

          <div className="bg-smoke py-8 px-6 flex flex-wrap gap-8 items-center">
            <Button dark="true" icon={false} />
            <Button variant="secondary" dark="true" icon={false} />
            <Button dark="true" small={true} icon={false} />
            <Button variant="secondary" dark="true" small={true} icon={false} />
          </div>
        </Accordion >
      </div >
    </>
  )
}