
export default function SectionHeading({ size = 'normal', children }) {
  let styles = {
    fontFamily: 'var(--font-family-sans)',
    fontSize: '0.875rem',
    fontWeight: 'semibold',
    marginTop: '2rem',
    marginBottom: '0.5rem',
    letterSpacing: '0.0625rem',
    lineHeight: 1,
    textTransform: 'uppercase',
  }
  
  if (size == 'large')
  {
    styles.fontSize = '1.25rem'
    styles.letterSpacing = '0.125rem'
    styles.fontWeight = 'bold';
  }

  return (
    <p
      style={styles}
    >{children}</p>
  )
}