import style from "./ContactInfo.module.scss";
import Image from "next/image";
export const ContactInfo = () => {
  return <div className={style.contactInfo}>
    <div className={style.title}>
      <div className={style.title__img}>
        <Image alt="x" src="/../assets/X.svg" height={12} width={12}></Image>
      </div>
      <h4>Contact info</h4>
    </div>
    <div className={style.avatar}>
      <div className={style.avatar__container}>
        <Image alt="avatar" width={124} height={124} src="/./assets/bigAvatar.svg"></Image>
        <span className={style.avatar__text}>
          <h4>Lara Mueller</h4>
          <p className={style.acatar__number}>+49 1522 792358</p>
        </span>
      </div>
    </div>
    <div className={style.info}>
      <div className={style.info__container}>
        <div className={style.info__text}>
          <h4>Info</h4>
          <p>Spring is coming 🌱</p>
        </div>
      </div>
    </div>
    <div className={style.media}>
      <div className={style.media__container}>
        <div className={style.media__text}>
          <p>Media, Links and Documents</p>
          <Image alt="grey" src="/../assets/vGrey.svg" height={8} width={6}></Image>
        </div>
        <div className={style.block}>
          <div className={style.block__item}>
            <Image alt="media" src="/../assets/media.svg" height={72} width={96}></Image>
          </div>
          <div className={style.block__item}>
            <Image alt="media" src="/../assets/media.svg" height={72} width={96}></Image>
          </div>
          <div className={style.block__item}>
            <Image alt="media" src="/../assets/media.svg" height={72} width={96}></Image>
          </div>
          <div className={style.block__item}>
            <Image alt="media" src="/../assets/media.svg" height={72} width={96}></Image>
          </div>
        </div>
      </div>
    </div>
    <div className={style.marked}>
      <div className={style.marked__container}>
        <div className={style.marked__marked}>
          <div className={style.market__text}>
            <Image alt="star" src="/../assets/star.svg" height={15} width={15}></Image>
            <p>Marked messages</p>
          </div>
          <Image alt="white" src="/../assets/vWhite.svg" height={8} width={6}></Image>
        </div>
      </div>
    </div>
    <div className={style.settings}>
      <div className={style.marked__container}>
        <div className={style.marked__marked}>
          <div className={style.market__text}>
            <Image alt="set" src="/../assets/set.svg" height={15} width={15}></Image>
            <p>Settings</p>
          </div>
          <Image alt="white" src="/../assets/vWhite.svg" height={8} width={6}></Image>
        </div>
      </div>
    </div>
  </div>;
};