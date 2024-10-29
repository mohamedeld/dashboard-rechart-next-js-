"use client";

import {useState} from "react";
import Layout from "../_components/register/Layout";
import RegisterForm from "../_components/register/RegisterForm";
import LoginForm from "../_components/login/LoginForm";
const RegisterPage = () => {
  const [isLogin,setIsLogin] = useState(false);

  const toggleLogin = ()=>{
    setIsLogin(prev=> !prev);
  }
  console.log(isLogin)
  return (
    <>
    
      {isLogin ?(
        <Layout>
          <LoginForm toggleLogin={toggleLogin}/>
        </Layout>
      ) : (
        <Layout>
          <RegisterForm toggleLogin={toggleLogin}/>
        </Layout>
      )}
    </>
  )
}

export default RegisterPage