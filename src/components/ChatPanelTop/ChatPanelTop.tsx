import style from "./ChatPanelTop.module.scss";
import Image from "next/image";
export const ChatPanelTop = () => {
  return <div className={style.topPanel}>
    <div className={style.container}>
      <div className={style.topPanel__userInfo}>
        <Image alt="avatar" width={40} height={40} src="/./assets/avatar.png"></Image>
        <h4>Lara Mueller</h4>
      </div>
      <div className={style.topPanel__settings}>
        <Image alt="loap" width={24} height={24} src={"/../assets/loap.svg"}></Image>
        <div className={style.dots}>
          <div className={style.dots__dot}></div>
          <div className={style.dots__dot}></div>
          <div className={style.dots__dot}></div>
        </div>
      </div>
    </div>
</div>;
};