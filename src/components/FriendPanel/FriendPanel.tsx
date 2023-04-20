import style from "./FriendPanel.module.scss";
import { FriendPanelTop } from "../FriendPanelTop/FriendPanelTop";
import { FriendPanelMessages } from "../FriendPanelMessages/FriendPanelMessages";
import { FriendPanelStories } from "../FriendPanelStories/FriendPanelStories";

export const FriendPanel = () => {
  return <div className={style.friendpanel}>
    <FriendPanelTop></FriendPanelTop>
    <FriendPanelStories></FriendPanelStories>
    <FriendPanelMessages></FriendPanelMessages>
  </div>;
};