import { useEffect, useState } from 'preact/hooks'

export default function CopyComponent({ onClick, buttonText = 'Copy code' }): JSX.Element {
  const defaultText = buttonText !== 'Copy code' ? `Copy &ldquo;${buttonText}&rdquo; code` : buttonText;
  const [clicked, setClicked] = useState(false)
  const [text, setText] = useState(defaultText)

  useEffect(() => {
    setTimeout(() => {
      setClicked(false)
      setText(defaultText)
    }, 5000)
  }, [clicked])

  const elProps = {
    type: 'button',
    onClick: () => {
      setClicked(true)
      setText('Copied!')
      onClick()
    },
    className: 'z-[1000] pointer-events-none group-hover:pointer-events-auto rounded text-xs uppercase tracking-wider leading-none bg-slate-800 px-4 py-2 text-white font-bold absolute -top-4 right-4 z-50 [&[data-open="false"]]:opacity-0 [&[data-open="false"]]:transform [&[data-open="false"]]:scale-95 [&[data-open="false"]]:transition-all group-hover:opacity-100 group-hover:scale-100 border-2 border-smoke hover:bg-water hover:text-white',
    ['data-open']: clicked,
  }

  return (
    <button {...elProps} dangerouslySetInnerHTML={{ __html: text }} />
  )
}