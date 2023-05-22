import { useEffect, useState } from 'preact/hooks';

const SVGViewer = ({ filePath, svgClass }) => {
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

  return (
    <div className={svgClass} dangerouslySetInnerHTML={{ __html: svgContent }} />
  );
};

export default SVGViewer;