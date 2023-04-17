import style from "./Msg.module.scss";
export const FriendMsg = ({ message }: { message?: string }) => {
  return <div className={style.friendMsg}>
    <div className={style.friendMsg__container}>{message}</div>
  </div>;
};