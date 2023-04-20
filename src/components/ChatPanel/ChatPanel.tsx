import style from "./ChatPanel.module.scss";
import React from "react";
import { ChatPanelTop } from "../ChatPanelTop/ChatPanelTop";
import { ChatPanelMsg } from "../ChatPanelMsg/ChatPanelMsg";

export const ChatPanel = () => {
  
  return <div className={style.chatPanel}>
    <ChatPanelTop></ChatPanelTop>
    <ChatPanelMsg/>
  </div>;
};