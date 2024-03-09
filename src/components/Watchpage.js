import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import Commentscontainer from "./Commentscontainer";
import Livechate from "./Livechate";

const Watchpage = () => {
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("x"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleMenu);
  }, []);
  return (
    <div className="flex flex-col w-full">
      <div className="px-5 flex w-full">
        <div className="">
          <iframe
            width="1200"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParams.get("x")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <Livechate />
        </div>
      </div>
      <Commentscontainer />
    </div>
  );
};

export default Watchpage;
