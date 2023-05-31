import { useEffect, useState } from 'preact/hooks';

interface SVGViewerProps {
  filePath: string;
  svgClass?: string;
}

const SVGViewer = ({ filePath, svgClass }: SVGViewerProps) => {
  const [svgContent, setSvgContent] = useState(null);

  useEffect(() => {
    fetch(filePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error('SVG file not found');
        }
        return response.text();
      })
      .then((svgContent) => {
        setSvgContent(svgContent);
      })
      .catch((error) => {
        console.error('Error fetching SVG file:', error);
        setSvgContent('404');
      });
  }, [filePath]);

  if (svgContent === '404') {
    return <div>SVG file not found</div>;
  }

  const svgProps = {
    className: svgClass, dangerouslySetInnerHTML: { __html: svgContent }
  }

  return (
    <div {...svgProps} />
  );
};

export default SVGViewer;