import style from "./Login.module.scss";
import { AppButton } from "../AppButton/AppButton";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Link from "next/link";
import { postLogin, selectIsAuth } from "@/redux/slices/user/userSlice";

export const Login = () => {
  
  const router = useRouter();
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.language.language.loginPage);
  const isAuth = useAppSelector(selectIsAuth);
  const userName = useAppSelector((state) => state.user.data.fullName);
  
  const { register, reset, handleSubmit, formState: {errors, isValid} } = useForm({
    defaultValues: {
      email: "clow@gmail.com",
      password: "qwe12345",
    },
    mode: "onChange"});

  const onSubmit = async(value:{}) => {
    const { payload } = await dispatch(postLogin(value));
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
  if (isAuth) router.push(`/Chat/${userName}`);
  
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