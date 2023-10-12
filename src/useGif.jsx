import axios from "axios";
import { useEffect, useState } from "react";

const url = `https://api.giphy.com/v1/gifs/random?api_key=VrMyxJhaweBMvxHSRuYXn5DDkSJrIIMl`;

const useGif = (tag) => {
  const [gif, setGif] = useState("");

  const fetchGif = async (tag) => {
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);

    const imageSrc = data.data.images.downsized_large.url;

    setGif(imageSrc);
  };

  useEffect(() => {
    fetchGif(tag);
  }, [tag]);

  return { gif, fetchGif };
};

export default useGif;
