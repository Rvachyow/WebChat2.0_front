import style from "../styles/Home.module.scss";
import { Container } from "@/components/Container/Container";
import { Login } from "@/components/Login/Login";
import { LanguageBtn } from "@/components/LanguageBtn/LanguageBtn";
import { useAppDispatch } from "@/redux/hook";
import React from "react";
import { getMe } from "@/redux/slices/user/userSlice";

const Home = () => {
  const disptach = useAppDispatch();
  React.useEffect(() => {
    disptach(getMe());
  }, []);
  
  return <div className={style.home}>
    <Container>
      <LanguageBtn/>
      <div className={style.home_container}>
        {/* <div className={style.logo_block}>logo</div> */}
        <Login></Login>
      </div>
    </Container>
  </div>;
};
export default Home;