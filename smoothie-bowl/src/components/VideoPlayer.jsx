import './VideoPlayer.css';

const VideoPlayer = ({ videoUrl, title }) => {
  return (
    <div className="video-player">
      <div className="video-container">
        <div className="video-wrapper">
          <video
            src={videoUrl}
            controls
            className="video-element"
            poster=""
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay">
            <span className="video-title">{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;