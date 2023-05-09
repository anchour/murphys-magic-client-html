import Button from './Button.jsx'
import SectionHeading from './SectionHeading.jsx'
import Typography from './Typography.jsx'

export function App() {
  return (
    <>
      <div className="container">

        <SectionHeading size='large'>Typography</SectionHeading>
        <Typography />

        <SectionHeading>Buttons</SectionHeading>
        <Button />
      </div>
    </>
  )
}