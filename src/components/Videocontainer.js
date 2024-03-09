import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import Videocard from "./Videocard";
import { Link } from "react-router-dom";

const Videocontainer = () => {
  const [video, setvideo] = useState([]);
  useEffect(() => {
    getvideos();
  }, []);

  const getvideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setvideo(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {video.map((videos) => (
        <Link key={videos.id} to={"/watch?x=" + videos.id}>
          <Videocard info={videos} />
        </Link>
      ))}
    </div>
  );
};
export default Videocontainer;
