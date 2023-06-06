type VideoSrc = {
  src: string,
  type: string,
}
interface VideoProps {
  src: VideoSrc[],
}

const Video = (props: VideoProps) => {
  return <video className="video-background responsive-embed__item" autoPlay muted loop>
    {props.src.map(src => <source src={src.src} type={src.type} />)}
  </video>
};

export default Video