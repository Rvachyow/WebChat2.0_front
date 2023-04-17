import style from "./Msg.module.scss";
export const YourMsg = ({ message }: { message?: string }) => {
  return <div className={style.yourMsg}>
    <div className={style.yourMsg__container}>{message}</div>
  </div>;
};