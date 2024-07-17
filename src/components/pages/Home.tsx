import { useState } from "react";
import AllVideos from "../AllVideos";
import SearchBar from "../SearchBar";
import VIDEOS from "../../videos.json";

interface Video {
  id: number;
  title: string;
  cover: string;
  url: string;
}

const Home: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>(VIDEOS);
  const [filteredVideos, setFilteredVideos] = useState<Video[]>(VIDEOS);

  // const handleSearchVideo = (result: Video[]) => {
  //   setFilteredVideos(result);
  // };

  return (
    <div className="flex flex-col gap-3">
      <SearchBar videos={videos} setFilteredVideos={setFilteredVideos} />
      <AllVideos filteredVideos={filteredVideos} />
    </div>
  );
};

export default Home;
