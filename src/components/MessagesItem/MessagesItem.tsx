import clsx from "clsx";
import style from "./MessagesItem.module.scss";
import Image from "next/image";
import { useAppDispatch } from "@/redux/hook";
import { choiseFriend } from "@/redux/slices/friend/friendSlice";

export const MessagesItem = ({ active, id, name, avatar, setActive }: { active: boolean, id?:string, name:string, avatar?:string,
  setActive:Function }) => {
  const dispatch = useAppDispatch();
  const handleActive = () => {
    setActive(name);
    dispatch(choiseFriend({id:id, name:name}));
  };
  return <div onClick={handleActive} className={clsx(style.messages__item, {[style.active]:active})}>
    <div className={style.container}>
      <Image alt="avatar" src="/../assets/StoreAvatar.svg" width={48} height={48}></Image>
      <div className={style.messages__text}>
        <div className={style.messages__name}>
          <span>{name}</span>
          <p>17:33</p>
        </div>
        <div className={style.messages__lastText}>
          <Image alt="vv" src="/./assets/vv.svg" width={14} height={8}></Image>
          <p className={style.text}>Makes to a illustrated on ...</p>
          <div className={style.round}>
            <p>3</p>
          </div>
        </div>
      </div>
    </div>
</div>;
};