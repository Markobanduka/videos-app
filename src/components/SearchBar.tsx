interface Video {
  id: number;
  title: string;
  cover: string;
  url: string;
}

interface SearchProps {
  videos: Video[];
  onSearchVideo: (videos: Video[]) => void;
}

const SearchBar: React.FC<SearchProps> = ({ videos, onSearchVideo }) => {
  const SearchVideoByName = (name: string) => {
    const searchTerm = name.toLowerCase();
    const filteredVideos = videos.filter((video) =>
      video.title.toLowerCase().includes(searchTerm)
    );
    onSearchVideo(filteredVideos);
  };

  return (
    <form>
      <label>
        Search
        <input
          type="text"
          name="search"
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            SearchVideoByName(e.currentTarget.value)
          }
        />
      </label>
    </form>
  );
};

export default SearchBar;
