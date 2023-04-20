import { useAppDispatch } from "@/redux/hook";
import style from "./TopItems.module.scss";
import Image from "next/image";
import { addFriend } from "@/redux/slices/friend/friendSlice";

export const TopItems = ({ data, setInput }: { data?:any, setInput:Function }) => {
  
  const dispatch = useAppDispatch();

  const addHandler = () => {
    dispatch(addFriend(data));
    setInput("");
  };

  return <div className={style.topItems}>
    <div className={style.container}>
      <div className={style.avatar}>
        <Image alt="avatar" src="/../assets/StoreAvatar.svg" width={30} height={30}></Image>
        <h5>@{data?.fullName}</h5>
      </div>
      <button className={style.btn_topitem}>
        <Image onClick={addHandler} alt="x" src="/../assets/X.svg" height={12} width={12}></Image>
      </button>
    </div>
  </div>;
};