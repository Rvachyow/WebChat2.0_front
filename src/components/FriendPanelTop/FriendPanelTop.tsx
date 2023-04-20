import { useAppDispatch, useAppSelector } from "@/redux/hook";
import style from "./FriendPanelTop.module.scss";
import Image from "next/image";
import React from "react";
import { TopItems } from "./itemsTop/TopItems";
import { clearStateFriend, postFindUser } from "@/redux/slices/friend/friendSlice";
import clsx from "clsx";

export const FriendPanelTop = () => {
  const [ input, setInput ] = React.useState("");
  const dispatch = useAppDispatch();
  const { status, data } = useAppSelector((state) => state.friend);
  const dataFriend = useAppSelector((state) => state.friend.friendList);
  
  const onChangeFinder = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const clearInput = () => {
    setInput("");
  };
  const handleFindUser = React.useCallback(() => {
    if (!input) return;    
    dispatch(postFindUser(input));
  },[input])

  React.useEffect(() => {
    dispatch(clearStateFriend());
  },[input]);
  
  return <div className={style.topbar}>
    <div className={style.avatar}>
      <div className={style.avatar__image}>
        <Image alt="avatar" height={40} width={40} src={"/../assets/avatar.svg"}></Image>
      </div>
      <div className={style.avatar__settings}>
        <div className={style.avatar__image}>
          <Image alt="chat" height={24} width={24} src={"/../assets/chat-new-line.svg"}></Image></div>
        <div className={style.avatar__dots}>
          <div className={style.avatar__dot}></div>
          <div className={style.avatar__dot}></div>
          <div className={style.avatar__dot}></div>
        </div>
      </div>
    </div>
    <div className={style.search}>
      <input onChange={onChangeFinder} value={input} placeholder="Search" type="text" />
      {input? <div onClick={clearInput} className={style.clear}><Image alt="x" src="/../assets/X.svg" height={12} width={12}></Image>
      </div> : ""}
      <div onClick={handleFindUser} className={style.search__loap}>
        <Image alt="loap" width={24} height={24} src={"/../assets/loap.svg"}></Image>
      </div>
      <div className={clsx(style.popup, {[style.popun_active]:input.length > 0})}>
        {status === "loading"? 
          <div className={style.loader}></div> : 
          <div className={style.findContainer}>
            {status === "success"? <TopItems setInput={setInput} data={data} ></TopItems> : ""}
          </div>}
      </div>
    </div>
</div>;
};