import style from "./Container.module.scss";
import React from "react";

let counter = 0;
export const Container = ({ children }: { children?: React.ReactNode }) => {
  console.log(counter++, "container");
  
  return <div className={style.container}>
    {children}
  </div>;
};