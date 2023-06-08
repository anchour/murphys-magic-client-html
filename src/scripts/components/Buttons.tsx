import Button from "./Button"

export default function Buttons() {
  return (
    <>
      <div className="flex flex-wrap items-center gap-8 px-6 pt-8">
        <Button />
        <Button variant="secondary" />
        <Button small />
        <Button variant="secondary" small />
      </div>

      <div className="flex flex-wrap items-center gap-8 px-6 py-8">
        <Button icon={false} />
        <Button variant="secondary" icon={false} />
        <Button small icon={false} />
        <Button variant="secondary" icon={false} small />
      </div>

      <div className="flex flex-wrap items-center gap-8 px-6 pt-8 bg-smoke">
        <Button dark="true" />
        <Button variant="secondary" dark="true" />
        <Button dark="true" small />
        <Button variant="secondary" dark="true" small />
      </div>

      <div className="flex flex-wrap items-center gap-8 px-6 py-8 bg-smoke">
        <Button dark="true" icon={false} />
        <Button variant="secondary" dark="true" icon={false} />
        <Button dark="true" small icon={false} />
        <Button variant="secondary" dark="true" small icon={false} />
      </div>

      <div className="flex flex-wrap items-center gap-8 px-6 pt-8">
        <Button variant="link" />
        <Button variant="link" dark />
      </div>
    </>
  )
}
