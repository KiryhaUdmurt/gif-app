import { useState } from "react";
import useGif from "../useGif";

const Tag = () => {
  const [tag, setTag] = useState("cats");
  const { gif, fetchGif } = useGif(tag);

  return (
    <div className="container">
      <h1>Random {tag} Gif</h1>
      <img src={gif} alt="random-gif" width="500" />
      <input value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={() => fetchGif(tag)}>Click for new GIF</button>
    </div>
  );
};

export default Tag;
