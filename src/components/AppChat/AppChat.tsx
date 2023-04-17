import style from "./AppChat.module.scss";
import { FriendPanel } from "../FriendPanel/FriendPanel";
import { ContactInfo } from "../ContactInfo/ContactInfo";
import { ChatPanel } from "../ChatPanel/ChatPanel";
export const AppChat = () => {
  return <div className={style.appchat}>
    <FriendPanel></FriendPanel>
    <ChatPanel></ChatPanel>
    <ContactInfo></ContactInfo>
  </div>;
};