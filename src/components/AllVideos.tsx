import videos from "../videos.json";

const AllVideos = () => {
  return (
    <div>
      {videos.map((video, index) => (
        <div className="w-48 block" key={index}>
          <a href={video.url} target="blank">
            <img src={video.cover} alt={video.title} />
          </a>
          <h5>{video.title}</h5>
        </div>
      ))}
    </div>
  );
};

export default AllVideos;
