import style from "./Login.module.scss";
import { AppButton } from "../AppButton/AppButton";
import { useAppSelector } from "@/redux/hook";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Link from "next/link";

export const Login = () => {
  const router = useRouter();
  const data = useAppSelector((state) => state.language.language.loginPage);
  const { register, handleSubmit, formState: {errors, isValid} } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange"});
  const onSubmit = (value:any) => {
    const { email, password } = value;
    let refUrl = email + "_" + password;
    router.push(`/Chat/${refUrl}`);
  };
  return <form onSubmit={handleSubmit(onSubmit)} className={style.login}>
    <input 
      {...register("email", { required: "Укажите полное имя" })} 
      placeholder={data.email} type="text" />
    <input 
      autoComplete="off"
      {...register("password", { required: "Укажите пароль"})}  
      placeholder={data.pass} type="text" />
    <div className={style.btn}><AppButton width="50%">{data.btnLog}</AppButton></div>
    <span></span>
    <div className={style.line}></div>
    <Link className={style.btn} href="/Registraition"><button>{data.btnSign}</button></Link></form>;
};