interface DetailsProps {
  title: string,
  children: any
}

const Details = (props: DetailsProps) => {
  if (!props.children) {
    return null;
  }
  return <details>
    <summary>{props.title}</summary>
    {props.children}
  </details>
}

export default Details