const videos = [
  {
    id: 1,
    title: "How to learn React",
    url: "https://www.youtube.com/watch?v=bMknfKXIFA8&t=38660s",
    cover:
      "https://i.ytimg.com/vi/bMknfKXIFA8/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLB9mmOmXZmVreh9QdhynlLp_9aKPg",
  },
  {
    id: 2,
    title: "How to learn Css",
    url: "https://www.youtube.com/watch?v=OXGznpKZ_sA&t=6563s",
    cover:
      "https://i.ytimg.com/vi/OXGznpKZ_sA/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDsg0OLTym9pwK5miBPyiVat1_8vQ",
  },
];

const App = () => {
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

export default App;
