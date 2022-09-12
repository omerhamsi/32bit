import React, { useEffect, useState } from 'react'
import "../style/Login.css"
import Menu from '../component/Menu'
import Footer from '../component/Footer'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Login() {
    const navigate=useNavigate();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const {t}=useTranslation()

    useEffect(()=>{
        if(localStorage.getItem("auth")){
            navigate("/")
        }
    })
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(password)
        let object={
            "name":name,
            "email":email,
            "password":password
        }
        localStorage.setItem("auth",JSON.stringify(object));
        navigate("/")
    }
    return (
        <div>
            <Menu title={t("login")}/>
            <div className='form'>
                <form className='formStyle' onSubmit={handleSubmit}>
                <div class="form-group">
                        <label for="exampleInputEmail1">{t("name")}</label>
                        <span style={{ color: "red", marginLeft: "3px" }} className='form-required'>*</span>
                        <input title="Please fill in the marked fields" value={name} onChange={(e)=>setName(e.target.value)} required type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={t("enterName")} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">{t("email")}</label>
                        <span style={{ color: "red", marginLeft: "3px" }} className='form-required'>*</span>
                        <input title="Please fill in the marked fields" required value={email} onChange={(e)=> setEmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={t("enterEmail")} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">{t("password")}</label>
                        <span style={{ color: "red", marginLeft: "3px" }} className='form-required'>*</span>
                        <input title='Please fill in the marked fields' value={password} onChange={(e)=>setPassword(e.target.value)} required type="password" class="form-control" id="exampleInputPassword1" placeholder={t("enterPassword")} />

                    </div>
                    <div className='buttonLayout'>
                        <button className='submitButton' type="submit">{t("login")}</button>
                    </div>
                </form>
            </div>
            <Footer/>
        </div>

    )
}
export default Login
