import style from "./MobileAppChat.module.scss";
import { FriendPanel } from "../FriendPanel/FriendPanel";
import { useAppSelector } from "@/redux/hook";
import { ChatPanel } from "../ChatPanel/ChatPanel";
import useWindowSize from "../../../utils/useWindowSize";
export const MobileAppChat = () => {
  const { data, status } = useAppSelector((state) => state.friend.chosenFriend);
  const { width } = useWindowSize();

  if (width <= 700) {
    return <div className={style.mobileApp}>
      {status? "" : <FriendPanel></FriendPanel>}
      {status? <ChatPanel></ChatPanel> : ""}
    </div>;
  }

  return <div className={style.mobileApp}>
    <FriendPanel></FriendPanel>
    {status? <ChatPanel></ChatPanel> : ""}
  </div>;
};