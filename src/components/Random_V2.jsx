import useGif from "../useGif";

const Random = () => {
  const { gif, fetchGif } = useGif();

  return (
    <div className="container">
      <h1>Random Gif</h1>
      <img src={gif} alt="random-gif" width="500" />
      <button onClick={fetchGif}>Click for new GIF</button>
    </div>
  );
};

export default Random;
