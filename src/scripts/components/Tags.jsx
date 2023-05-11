import thumbnail from '../../images/button-thumbnail-example.jpg';

import classNames from "classnames";
import { useRef } from "preact/hooks";
import CopyComponent from "./CopyComponent";

function Tag({ component = 'a', variant, children, href }) {

  if (variant && typeof variant === 'string') {
    variant = variant.split(' ');
  }

  const TagComponent = component ? component : 'a';
  const tagVariants = variant ? variant.map(v => `tag--${v}`) : null;
  const elementProps = {
    className: classNames('tag', tagVariants),
    href: TagComponent === 'a' && href ? href : null,
  };

  let button = useRef(null);

  const handleClick = () =>
    navigator.clipboard.writeText(button.current.outerHTML);

  return (
    <div className="relative inline-block group">
      <TagComponent {...elementProps} ref={button}>
        {children}
      </TagComponent>

      <CopyComponent onClick={handleClick} />
    </div>
  )
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
    <svg width="7" height="6" viewBox="0 0 7 6" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.27216 3.35991L1.12019 4.60793L2.53621 5.6639L3.40018 4.17588L4.24021 5.66387L5.65619 4.60784L4.50416 3.33586L6.18416 2.99983L5.63212 1.34384L4.09614 2.06387L4.2641 0.335864L2.5121 0.335899L2.68014 2.0639L1.14412 1.34393L0.592155 2.99994L2.27216 3.35991Z" />
    </svg>
  </span>;
}

export default function Tags() {
  return (
    <>
      <div className="my-4 space-x-2">

        <Tag variant={'lg'} href="#" onClick={e => e.preventDefault()} >Recent orders</Tag>

        <Tag variant={'lg has-thumbnail'} href="#" onClick={e => e.preventDefault()}>
          <div className="tag__thumbnail">
            <img src={thumbnail} loading="lazy" width={150} height={150} role="presentation" />
          </div>

          Card Magic
        </Tag>

      </div>

      <div className="my-4 space-x-2">

        <Tag variant={'md'} href="#" onClick={e => e.preventDefault()} >Recent orders</Tag>

        <Tag variant={'md has-thumbnail'} href="#" onClick={e => e.preventDefault()}>
          <div className="tag__thumbnail">
            <img src={thumbnail} loading="lazy" width={150} height={150} role="presentation" />
          </div>

          Card Magic
        </Tag>

      </div>

      <div className="flex flex-row">
        <div class="p-4">
          <Tag variant={['label', 'invert']} component="div" href="#" onClick={e => e.preventDefault()} >
            <TagLabelDecoration direction="left" />

            Trending Now

            <TagLabelDecoration direction="right" />
          </Tag>
        </div>

        <div class="bg-smoke p-4">
          <Tag variant="label" component="div" href="#" onClick={e => e.preventDefault()} >
            <TagLabelDecoration direction="left" />

            Trending Now

            <TagLabelDecoration direction="right" />
          </Tag>
        </div>

        <div className="p-4">
          <Tag variant={['label', 'secondary']} component="div" href="#" onClick={e => e.preventDefault()} >
            New
          </Tag>
        </div>
      </div >
    </>
  )
}