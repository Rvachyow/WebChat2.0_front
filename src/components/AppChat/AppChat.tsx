import style from "./AppChat.module.scss";
import { FriendPanel } from "../FriendPanel/FriendPanel";
import { ContactInfo } from "../ContactInfo/ContactInfo";
import { ChatPanel } from "../ChatPanel/ChatPanel";
import { useAppSelector } from "@/redux/hook";
import useWindowSize from "../../../utils/useWindowSize";
import { MobileAppChat } from "../MobileAppChat/MobileAppChat";
export const AppChat = () => {
  const { data, status } = useAppSelector((state) => state.friend.chosenFriend);
  const { width } = useWindowSize();

  if (width <= 900) return <MobileAppChat/>;
  
  return <div className={style.appchat}>
    <FriendPanel></FriendPanel>
    {status? <ChatPanel></ChatPanel> : ""}
    <ContactInfo></ContactInfo>
  </div>;
};