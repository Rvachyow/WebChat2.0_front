import style from "./BtnBack.module.scss";
import Link from "next/link";
export const BtnBack = ({ href }: { href: string}) => {
  return <Link href={href}><div className={style.btn_back}><div></div></div></Link>;
};