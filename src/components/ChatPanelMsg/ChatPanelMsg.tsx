import style from "./ChatPanelMsg.module.scss";
import React from "react";
import { useRouter } from "next/router";
import { io } from "socket.io-client";
import { YourMsg } from "../ChatPanel/items/YourMsg";
import { FriendMsg } from "../ChatPanel/items/FriendMsg";
import Image from "next/image";
import { useAppSelector } from "@/redux/hook";

// const socket = io("http://localhost:4000");
const socket = io("https://chat2-0-back.onrender.com/");
export const ChatPanelMsg = () => {

  const [ message, setMessage ] = React.useState("");
  const [ state, setState ] = React.useState([]);
  const [ toggle, setToggle ] = React.useState(false);
  const { name } = useAppSelector((state) => state.friend.chosenFriend.data);
  const { id }: any = useRouter().query;
  const refContainer = React.useRef<any>();

  const roomName = () => {
    let copyName = id + name;
    let res = copyName.split("").sort().join("").toLowerCase();
    return res;
  };

  React.useEffect(() => {
    refContainer.current.scrollBy(0, 300);
  },[state]);

  const sendMsg = (e: React.MouseEvent) => {
    e.preventDefault();
    let params = { room: roomName(), name: id};
    if (!message) return;
    socket.emit("sendMessage", { message, params });
    setMessage("");
    setToggle(false);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      let params = { room: roomName(), name: id};
      if (!message) return;
      socket.emit("sendMessage", { message, params });
      setMessage("");
      setToggle(false);
      document.removeEventListener("keydown", handleKeyDown);
    };
  };

  const msgHendle = (e:React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
    setToggle(true);
  };

  React.useEffect(() => {
    if (toggle) {
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [message]);

  React.useEffect(() => {
    if (id) {
      socket.emit("join",{name:id, room:roomName()});
    }}, [id]);
    
  React.useEffect(() => {
    socket.on("message", ( data ) => {
      setState((_state):any => [..._state, data]);
    });
  }, []);

  return <><div className={style.messagePanel}>
    <div ref={refContainer} className={style.messageContainer}>
      {state?.map((item:any, index) => {
        if (item.data.user.name === id){
          return<YourMsg {...item.data} key={index}></YourMsg>
        }else return<FriendMsg key={index} {...item.data}></FriendMsg>
      })}
    </div>
  </div>
  <div className={style.interfaice}>
    <div className={style.interfaice__container}>
      <div className={style.interfaice__btns}>
        <Image alt="123" width={22} height={22} src="/../assets/smile.svg"></Image>
        <Image alt="123" width={22} height={22} src="/../assets/screp.svg"></Image>
      </div>
      <div className={style.interfaice__input}>
        <input value={message} onChange={(e) => msgHendle(e)} placeholder="Write a message" type="text" />
      </div>
      <div className={style.interfaice__btns}>
        <Image alt="123" width={22} height={22} src="/../assets/micro.svg"></Image>
        {message? <Image  alt="123" onClick={(e) => sendMsg(e)}  width={22} height={22} src="/../assets/send.svg"></Image> : ""}
      </div>
    </div>
  </div>
</>;
};