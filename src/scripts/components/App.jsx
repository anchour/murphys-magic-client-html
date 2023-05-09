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
          <div className="py-8 px-6">
            <Button />
            <Button small="true" />
            <Button variant="secondary" />
            <Button variant="secondary" />
          </div>

          <div className="bg-smoke py-8 px-6">
            <Button dark="true" />
            <Button dark="true" small="true" />
            <Button variant="secondary" dark="true" />
            <Button variant="secondary" dark="true" size="small" />
          </div>
        </Accordion>
      </div>
    </>
  )
}