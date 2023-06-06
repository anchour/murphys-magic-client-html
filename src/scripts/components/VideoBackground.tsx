type VideoSrc = {
  src: string,
  type: string,
}
interface VideoProps {
  src: VideoSrc[],
}

const VideoBackground = (props: VideoProps) => {
  return <video className="video-background" autoPlay muted loop>
    {props.src.map(src => <source src={src.src} type={src.type} />)}
  </video>
};

export default VideoBackground