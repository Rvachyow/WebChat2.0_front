import { AppRegistraition } from "@/components/AppRegistraition/AppRegistraition";
import { Container } from "@/components/Container/Container";
import style from "../styles/Registraition.module.scss";
import { BtnBack } from "@/components/BtnBack/BtnBack";
const Registraition = () => {
  return <div className={style.registration}>
    <Container>
      <div className={style.reg_container}>
        <AppRegistraition></AppRegistraition>
      </div>
      <BtnBack href={"/"}></BtnBack>
    </Container>
  </div>;
};
export default Registraition;