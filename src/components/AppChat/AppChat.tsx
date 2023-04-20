import style from "./AppChat.module.scss";
import { FriendPanel } from "../FriendPanel/FriendPanel";
import { ContactInfo } from "../ContactInfo/ContactInfo";
import { ChatPanel } from "../ChatPanel/ChatPanel";
import { useAppSelector } from "@/redux/hook";
export const AppChat = () => {
  const { data, status } = useAppSelector((state) => state.friend.chosenFriend);

  return <div className={style.appchat}>
    <FriendPanel></FriendPanel>
    {status? <ChatPanel></ChatPanel> : ""}
    <ContactInfo></ContactInfo>
  </div>;
};