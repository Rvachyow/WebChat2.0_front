import style from "./Registraition.module.scss";
import { AppButton } from "../AppButton/AppButton";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useForm } from "react-hook-form";
import { postRegistration } from "@/redux/slices/user/userSlice";
import { useRouter } from "next/router";

export const AppRegistraition = () => {
  const data = useAppSelector((state) => state.language.language.Registration);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { register, reset, handleSubmit, formState: {errors, isValid} } = useForm({
    defaultValues: {
      email: "",
      fullName: "",
      password: "",
    },
    mode: "onChange"});
    
  const onSubmit = async(value:{}) => {
    const { payload } = await dispatch(postRegistration(value));
    if (!payload) 
      return reset({
        email: "",
        password: "",
      });
    if ("token" in payload) {
      window.localStorage.setItem("token", payload.token);
    }
    router.push(`/Chat/${payload.fullName}`);
  };
  return <form onSubmit={handleSubmit(onSubmit)} className={style.login}>
    <input 
      {...register("email", { required: "Укажите полное имя" })} 
      placeholder={data.email} type="text" />
    <input 
      {...register("fullName", { required: "Укажите полное имя" })} 
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