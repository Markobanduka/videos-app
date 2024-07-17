interface Video {
  id: number;
  title: string;
  cover: string;
  url: string;
}

interface SearchProps {
  videos: Video[];
  setFilteredVideos: (videos: Video[]) => void;
}

const SearchBar: React.FC<SearchProps> = ({ videos, setFilteredVideos }) => {
  const SearchVideoByName = (name: string) => {
    const searchTerm = name.toLowerCase();
    const filteredVideos = videos.filter((video) =>
      video.title.toLowerCase().includes(searchTerm)
    );
    setFilteredVideos(filteredVideos);
  };

  return (
    <form className="flex justify-center">
      <label>
        <input
          type="text"
          name="search"
          placeholder="Search..."
          className="input input-bordered input-primary w-48"
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            SearchVideoByName(e.currentTarget.value)
          }
        />
      </label>
    </form>
  );
};

export default SearchBar;
