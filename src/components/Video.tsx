import { Link, useParams } from "react-router-dom";
import videos from "../videos.json";

const Video = () => {
  const { id } = useParams();

  const videoId = id ? parseInt(id) : undefined;

  const video = videos.find((video) => video.id === videoId);

  return (
    <div>
      {video ? (
        <div className="border border-slate-400">
          <iframe
            width="560"
            height="315"
            src={video.url}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <div className="flex justify-center bg-slate-200 rounded-md">
            <h2 className=" text-2xl font-light">{video.title}</h2>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center ">
          <Link to="/">
            <button className="bg-stone-950 text-white p-3  px-5 rounded-xl justify-center mb-4">
              Back
            </button>
          </Link>
          <div>
            <p className="text-2xl flex justify-center">
              404 Video not found...
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Video;
