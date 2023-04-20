import style from "./FriendPanelStories.module.scss";
import { StoriesItem } from "../StoriesItem/StoriesItem";
import Image from "next/image";

export const FriendPanelStories = () => {
  return <div className={style.stories}>
    <div className={style.stories__container}>
      <div className={style.stories__title}>
        <h3>Stories</h3>
      </div>
      <div className={style.stories__icons}>
        <button className={style.stories__btn}>
          <Image alt="plus" width={11} height={11} src="/../assets/plus.svg"></Image>
        </button>
        <StoriesItem></StoriesItem>
        <StoriesItem></StoriesItem>
        <StoriesItem></StoriesItem>
        <StoriesItem></StoriesItem>
      </div>
    </div>
</div>;
};