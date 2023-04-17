import style from "./Registraition.module.scss";
import { AppButton } from "../AppButton/AppButton";
import { useAppSelector } from "@/redux/hook";
import { useForm } from "react-hook-form";

export const AppRegistraition = () => {
  const data = useAppSelector((state) => state.language.language.Registration);
  const { register, handleSubmit, formState: {errors, isValid} } = useForm({
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
    mode: "onChange"});
  const onSubmit = (value:{}) => {
    console.log(value);
  };
  return <form onSubmit={handleSubmit(onSubmit)} className={style.login}>
    <input 
      {...register("email", { required: "Укажите полное имя" })} 
      placeholder={data.email} type="text" />
    <input 
      {...register("name", { required: "Укажите полное имя" })} 
      placeholder={data.name} type="text" />
    <input 
      autoComplete="off"
      {...register("password", { required: "Укажите пароль"})}  
      placeholder={data.pass} type="text" />
    <div className={style.line}></div>
    <div className={style.btn}><AppButton width="50%">{data.btnReg}</AppButton></div>
    <span></span>
  </form>;
};