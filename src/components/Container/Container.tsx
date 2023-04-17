import style from "./Container.module.scss";
import React from "react";

export const Container = ({ children }: { children?: React.ReactNode }) => {
  return <div className={style.container}>
    {children}
  </div>;
};