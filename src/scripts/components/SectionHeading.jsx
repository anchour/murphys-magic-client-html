
export default function SectionHeading({ size = 'normal', children, className }) {
  let style = {
    fontFamily: 'var(--font-family-sans)',
    fontSize: '0.875rem',
    fontWeight: 'semibold',
    letterSpacing: '0.0625rem',
    lineHeight: 1,
    textTransform: 'uppercase',
  }

  if (size == 'large') {
    style.fontSize = '1.25rem'
    style.letterSpacing = '0.125rem'
    style.fontWeight = 'bold';
  }

  const props = {
    style,
    className
  }

  return (
    <div {...props}> {children}</div>
  )
}