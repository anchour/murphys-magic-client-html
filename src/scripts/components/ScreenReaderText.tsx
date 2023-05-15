export default function ScreenReaderText({ text }: { text: string }): JSX.Element {
  return <span className="sr-only">{text}</span>
}