import style from "./FriendPanelMessages.module.scss";
import { MessagesItem } from "../MessagesItem/MessagesItem";
import { useAppSelector } from "@/redux/hook";
import React from "react";

export const FriendPanelMessages = () => {
  const data = useAppSelector((state) => state.friend.friendList);
  const [ active, setActive ] = React.useState("");
  
  return <div className={style.messages}>
    <div className={style.messages__container}>
      <div className={style.messages__title}>
        <h3>Messages</h3>
      </div>
      <div className={style.messages__message}>
        {data?.map((item:any, index:number) => <MessagesItem 
          key={index} 
          setActive={setActive}
          id={item._id}
          active={active === item.fullName} 
          name={item.fullName}></MessagesItem>)}       
      </div>
    </div>
</div>;
};