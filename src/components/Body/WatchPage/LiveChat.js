import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../../utils/Slices/chatSlice";
import SendIcon from "@mui/icons-material/Send";
import {
  generateRandomNames,
  generateRandomSentences,
} from "../../../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: generateRandomSentences(),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <div>
      <div className="p-2 border border-black w-full h-[460px] bg-gray-100 rounded-2xl ">
        <div className=" flex-col-reverse flex overflow-y-scroll h-[410px] py-5">
          {chatMessages.map((c, i) => (
            <ChatMessage name={c.name} text={c.message} key={i} />
          ))}
        </div>
        <form
          className="mx-5"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addMessage({
                name: "MM",
                message: liveMessage,
              })
            );
            setLiveMessage('');
          }}
        >
          <input
            type="text"
            className="w-10/12 bg-gray-300 py-1 px-2 text-sm"
            value={liveMessage}
            onChange={(e) => {
              setLiveMessage(e.target.value);
            }}
          />
          <button className="cursor-pointer px-1">
            <SendIcon fontSize="small" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;
