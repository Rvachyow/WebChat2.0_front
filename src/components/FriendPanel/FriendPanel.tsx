import { MessagesItem } from "../MessagesItem/MessagesItem";
import style from "./FriendPanel.module.scss";
import Image from "next/image";
export const FriendPanel = () => {
  return <div className={style.friendpanel}>
    <div className={style.topbar}>
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
        <input placeholder="Search" type="text" />
        <div className={style.search__loap}>
          <Image alt="loap" width={24} height={24} src={"/../assets/loap.svg"}></Image>
        </div>
      </div>
    </div>
    <div className={style.stories}>
      <div className={style.stories__container}>
        <div className={style.stories__title}>
          <h3>Stories</h3>
        </div>
        <div className={style.stories__icons}>
          <button className={style.stories__btn}>
            <Image alt="plus" width={11} height={11} src="/../assets/plus.svg"></Image>
          </button>
          <div className={style.stories__iconimg}>
            <Image alt="avatar" src="/./assets/avatar2.png" width={48} height={48}></Image>
          </div>
          <div className={style.stories__iconimg}>
            <Image alt="avatar" src="/./assets/avatar2.png" width={48} height={48}></Image>
          </div>
          <div className={style.stories__iconimg}>
            <Image alt="avatar" src="/./assets/avatar2.png" width={48} height={48}></Image>
          </div>
          <div className={style.stories__iconimg}>
            <Image alt="avatar" src="/./assets/avatar2.png" width={48} height={48}></Image>
          </div>
          <div className={style.stories__iconimg}>
            <Image alt="avatar" src="/./assets/avatar2.png" width={48} height={48}></Image>
          </div>
        </div>
      </div>
    </div>
    <div className={style.messages}>
      <div className={style.messages__container}>
        <div className={style.messages__title}>
          <h3>Messages</h3>
        </div>
        <div className={style.messages__message}>
          <MessagesItem active={true}></MessagesItem>
          <MessagesItem active={false}></MessagesItem>
          <MessagesItem active={false}></MessagesItem>
          <MessagesItem active={false}></MessagesItem>
          <MessagesItem active={false}></MessagesItem>
          <MessagesItem active={false}></MessagesItem>
          <MessagesItem active={false}></MessagesItem>
          <MessagesItem active={false}></MessagesItem>
          <MessagesItem active={false}></MessagesItem>
          <MessagesItem active={false}></MessagesItem>
          <MessagesItem active={false}></MessagesItem>
          <MessagesItem active={false}></MessagesItem>
          <MessagesItem active={false}></MessagesItem>
          <MessagesItem active={false}></MessagesItem>
        </div>
      </div>
    </div>
  </div>;
};