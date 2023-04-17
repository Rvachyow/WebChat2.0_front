import style from "./StoriesItem.module.scss";
import Image from "next/image";
export const StoriesItem = () => {
  return <div className={style.stories__iconimg}>
    <Image alt="avatar" src="/../assets/StoreAvatar.svg" width={48} height={48}></Image>
</div>;
};