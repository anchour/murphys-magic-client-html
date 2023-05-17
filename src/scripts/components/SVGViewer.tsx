import { useEffect, useState } from 'preact/hooks';

const SVGViewer = ({ filePath, svgClass }) => {
  const [svgContent, setSvgContent] = useState(null);

  useEffect(() => {
    fetch(filePath)
      .then((response) => response.text())
      .then((svgContent) => {
        setSvgContent(svgContent);
      })
      .catch((error) => {
        console.error('Error fetching SVG file:', error);
      });
  }, [filePath]);

  if (!svgContent) {
    return <div>Loading...</div>;
  }

  return (
    <div className={svgClass} dangerouslySetInnerHTML={{ __html: svgContent }} />
  );
};

export default SVGViewer;
