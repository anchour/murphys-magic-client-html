import thumbnail from '../../images/button-thumbnail-example.jpg';
import classNames from "classnames";
import { useRef } from "preact/hooks";
import CopyComponent from "./CopyComponent";
import { DisableCopyComponent } from '../lib/interfaces';

interface TagProps extends DisableCopyComponent {
  className?: string,
  variant: string, // invert, simple, label, secondayr, has-thumbnail
  size?: 'md' | 'lg',
  component?: 'a' | 'button' | 'span' | 'div',
  children?: any,
  href?: string,
  showDecorations?: boolean,
}

export function Tag({ component = 'a', className, variant, children, href = '', disableCopy = false, showDecorations = false }: TagProps) {
  const TagComponent = component ? component : 'a';
  const tagVariants = variant.replace(' ', ',').split(',').map(v => `tag--${v}`);
  const elementProps = {
    className: classNames('tag', tagVariants, className),
    href: TagComponent === 'a' && href.length > 0 ? href : null,
  };

  let button = useRef(null);

  const handleClick = () =>
    button.current && navigator.clipboard.writeText(button.current.outerHTML);

  const elements = <TagComponent {...elementProps} ref={button}>
    {showDecorations && <TagLabelDecoration direction="left" />}

    {children}

    {showDecorations && <TagLabelDecoration direction="right" />}
  </TagComponent>

  return disableCopy ? elements : (
    <div className="relative inline-block group">
      {elements}
      <CopyComponent onClick={handleClick} />
    </div>
  );
}

interface AsteriskVectorProps {
  fill?: string,
}

export function AsteriskVector(props: AsteriskVectorProps) {
  type SvgProps = JSX.IntrinsicElements['svg'];

  let elementProps: SvgProps = {
    width: "7",
    height: "6",
    viewBox: "0 0 7 6",
    xmlns: "http://www.w3.org/2000/svg",
  };

  if (props.fill) {
    elementProps.fill = props.fill;
  }

  return <svg {...elementProps}>
    <path d="M2.27216 3.35991L1.12019 4.60793L2.53621 5.6639L3.40018 4.17588L4.24021 5.66387L5.65619 4.60784L4.50416 3.33586L6.18416 2.99983L5.63212 1.34384L4.09614 2.06387L4.2641 0.335864L2.5121 0.335899L2.68014 2.0639L1.14412 1.34393L0.592155 2.99994L2.27216 3.35991Z" />
  </svg>
}

/**
 * The decoration for the label variant of the tag component
 * 
 * @param {Object} 
 * 
 * @returns {JSX.Element}
 */
function TagLabelDecoration({ direction = 'left' }) {
  return <span className={`tag__decoration tag__decoration--${direction}`}>
    <AsteriskVector />
  </span>;
}

export default function Tags() {
  return (
    <>
      <div className="my-4 space-x-2">

        <Tag variant='lg' href="#" >Recent orders</Tag>

        <Tag variant='lg has-thumbnail' href="#">
          <div className="tag__thumbnail">
            <img src={thumbnail} loading="lazy" width={150} height={150} role="presentation" />
          </div>

          Card Magic
        </Tag >

      </div>

      <div className="my-4 space-x-2">

        <Tag variant='md' href="#" >Recent orders</Tag>

        <Tag variant='md,has-thumbnail' href="#">
          <div className="tag__thumbnail">
            <img src={thumbnail} loading="lazy" width={150} height={150} role="presentation" />
          </div>

          Card Magic
        </Tag>

      </div>

      <div className="flex flex-row">
        <div className="p-4">
          <Tag variant='label,invert' component="div" href="#" >
            < TagLabelDecoration direction="left" />

            Trending Now

            <TagLabelDecoration direction="right" />
          </Tag>
        </div>

        <div className="p-4 bg-smoke">
          <Tag variant="label" component="div" href="#">
            <TagLabelDecoration direction="left" />

            Trending Now

            <TagLabelDecoration direction="right" />
          </Tag>
        </div>

        <div className="p-4">
          <Tag variant='label,secondary' component="div" href="#">
            New
          </Tag>
        </div>
      </div >
    </>
  )
}