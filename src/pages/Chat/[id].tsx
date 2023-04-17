import style from "./Chat.module.scss";
import { Container } from "@/components/Container/Container";
import { AppChat } from "@/components/AppChat/AppChat";

const Chat = () => {
  return <div className={style.chat}>
    <Container>
      <div className={style.chat__container}>
        <AppChat></AppChat>
      </div>
    </Container>
  </div>;
};
export default Chat;