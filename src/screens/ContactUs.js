import axios from 'axios';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import Footer from '../component/Footer'
import Menu from '../component/Menu'
import "../style/ContactUs.css"
function ContactUs() {
    const userInfo = JSON.parse(localStorage.getItem("auth"))
    const [name, setName] = useState(userInfo.name);
    const [email, setEmail] = useState(userInfo.email);
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [textField,setTextField]=useState("");
    const {t}=useTranslation()
    const countryList = [
        { id: "TR", name: "Turkey" },
        { id: "US", name: "United States of America" },
        { id: "GB", name: "United Kingdom" },
        { id: "DE", name: "Germany" },
        { id: "SE", name: "Sweden" },
        { id: "KE", name: "Kenya" },
        { id: "BR", name: "Brazil" },
        { id: "ZW", name: "Zimbabwe" }
    ]
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name)
        console.log(email)
        console.log(phone)
        console.log(country)
        console.log(textField)
        axios.post( "https://example.com/",{
            "name":name,
            "email":email,
            "phonenumber":phone,
            "country_code":country,
            "text":textField
        })
        .then((result)=>{
            console.log(result)
        })
        .catch((result)=>{
            console.log(result)
        })
    }
    return (
        <div className='contactContent'>
            <div>
            <Menu title={t("contact")} />
            <div className='form'>
                <form className='formStyle' onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">{t("name")}</label>
                        <span style={{ color: "red", marginLeft: "3px" }} className='form-required'>*</span>
                        <input title="Please fill in the marked fields" value={name} onChange={(e) => setName(e.target.value)} required type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={t("enterName")} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">{t("email")}</label>
                        <span style={{ color: "red", marginLeft: "3px" }} className='form-required'>*</span>
                        <input title="Please fill in the marked fields" required value={email} onChange={(e) => setEmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={t("enterEmail")} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">{t('phoneNumber')}</label>
                        <span style={{ color: "red", marginLeft: "3px" }} className='form-required'>*</span>
                        <input title="Please fill in the marked fields" value={phone} onChange={(e) => setPhone(e.target.value)} required type="tel" class="form-control" id="exampleInputPhone1" placeholder={t("enterPhoneNumber")} />
                    </div>
                    <div class="form-group">
                        <label for="sel1">{t("selectCountry")}</label>
                        <span style={{ color: "red", marginLeft: "3px" }} className='form-required'>*</span>
                        <select value={country} required class="form-control" onChange={(e) => setCountry(e.target.value)}>
                            <option></option>
                            {countryList.map((item) => {
                                return (
                                    <option value={item.id}>{item.name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">{t("textarea")}</label>
                        <textarea value={textField} onChange={(e)=>{setTextField(e.target.value)}} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className='buttonLayout'>
                        <button className='submitButton' type="submit">{t("send")}</button>
                    </div>
                </form>
            </div>
            </div>
            <Footer />
        </div>
    )
}
export default ContactUs