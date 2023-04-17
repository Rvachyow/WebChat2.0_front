import style from "./ChatPanelMsg.module.scss";
import React from "react";
import { useRouter } from "next/router";
import { io } from "socket.io-client";
import { YourMsg } from "../ChatPanel/items/YourMsg";
import { FriendMsg } from "../ChatPanel/items/FriendMsg";
import Image from "next/image";
// const socket = io("http://localhost:4000");
const socket = io("https://chat2-0-back.onrender.com/");

export const ChatPanelMsg = () => {
  const [ message, setMessage ] = React.useState("");
  const [state, setState] = React.useState([]);
  const router: any = useRouter();
  let valueUser: string = router?.query.id || "";
  let [name, room] = valueUser?.split("_");
  
  const sendMsg = (e:React.MouseEvent) => {
    e.preventDefault();
    let params = { room: room, name: name};
    if (!message) return;
    socket.emit("sendMessage", { message, params });
    setMessage("");
  };

  React.useEffect(() => {
    if (name) {
      socket.emit("join",{name:name, room:room});
    }}, [valueUser]);
    
  React.useEffect(() => {
    socket.on("message", ( data ) => {
      setState((_state):any => [..._state, data]);
    });
  }, []);

  return <><div className={style.messagePanel}>
    <div className={style.messageContainer}>
      {state?.map((item:any, index) => {
        if (item.data.user.name === name){
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
        <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write a message" type="text" />
      </div>
      <div className={style.interfaice__btns}>
        <Image alt="123" width={22} height={22} src="/../assets/micro.svg"></Image>
        {message? <Image  alt="123" onClick={(e) => sendMsg(e)}  width={22} height={22} src="/../assets/send.svg"></Image> : ""}
      </div>
    </div>
  </div>
</>;
};