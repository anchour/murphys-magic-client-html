const Details = ({ open = false, title = 'Accordion title', children }: { open?: boolean, title: string, children: JSX.Element }) => {
  const detailsProps = {
    className: 'accordion',
    open: open
  };

  return <details {...detailsProps}>
    <summary>{title}</summary>

    <div className="accordion__content">
      {children}
    </div>
  </details>
}

export default Details;