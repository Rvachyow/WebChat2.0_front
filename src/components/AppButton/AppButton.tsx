import style from "./AppButton.module.scss";
import React from "react";

export const AppButton = ({ children, width }: { children?:string, width?:string }) => {
  const btnRef = React.useRef<HTMLButtonElement | any>(null);
  React.useEffect(() => {
    if (!btnRef.current) return;
    btnRef.current.style.width = width;
  },[]);
  return <button ref={btnRef} className={style.btn_app}>{children}</button>;
};