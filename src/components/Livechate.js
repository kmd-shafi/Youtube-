import React, { useEffect, useState } from "react";
import Chatmessage from "./Chatmessage";
import { useDispatch, useSelector } from "react-redux";
import { addMassge } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const Livechate = () => {
  const dispatch = useDispatch();

  const [liveMessage, setLiveMessage] = useState("");

  const chatMessage = useSelector((stroe) => stroe.chat?.massages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMassge({
          name: generateRandomName(),
          message: makeRandomMessage(20) + "🚀",
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className=" w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg  overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessage.map((c, index) => (
            <Chatmessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>

      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMassge({
              name: "shafi",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className=" px-2 w-96"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default Livechate;
