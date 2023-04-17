import { useAppDispatch, useAppSelector } from "@/redux/hook";
import style from "./LanguageBtn.module.scss";
import { appLanguage } from "@/redux/slices/language/languageSlice";
import React from "react";
import clsx from "clsx";

export const LanguageBtn = () => {
  const [ active, setActive ] = React.useState(false);
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.language.language.language);
  const choiceLanguage = (LAN:any) => {
    dispatch(appLanguage(LAN));
    setActive(!active);
  };
  return <div className={style.btn_lan}>
    <button onClick={() => choiceLanguage("RU")} 
      className={clsx(style.btn, {[style.acitve]:data === "RU"})}>RU</button>
    <button onClick={() => choiceLanguage("ENG")} 
      className={clsx(style.btn, {[style.acitve]:data === "ENG"})}>ENG</button>
  </div>;
};