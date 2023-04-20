import style from "./ChatPanelTop.module.scss";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { closeFriendMsg } from "@/redux/slices/friend/friendSlice";
export const ChatPanelTop = () => {
  const { name } = useAppSelector((state) => state.friend.chosenFriend.data);
  const dispatch = useAppDispatch();

  const closeHandle = () => {
    dispatch(closeFriendMsg());
  };

  return <div className={style.topPanel}>
    <div className={style.container}>
      <div className={style.topPanel__userInfo}>
        <Image alt="avatar" width={40} height={40} src="/../assets/StoreAvatar.svg"></Image>
        <h4>{name}</h4>
      </div>
      <div className={style.topPanel__settings}>
        <Image alt="loap" width={24} height={24} src={"/../assets/loap.svg"}></Image>
        <div className={style.dots}>
          <div className={style.dots__dot}></div>
          <div className={style.dots__dot}></div>
          <div className={style.dots__dot}></div>
        </div>
        <div className={style.btnClose}>
          <Image onClick={closeHandle} alt="x" src="/../assets/X.svg" height={15} width={15}></Image>
        </div>
      </div>
    </div>
</div>;
};