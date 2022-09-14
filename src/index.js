import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './screens/Login';
import ContactUs from './screens/ContactUs';
import i18n from "i18next"
import { initReactI18next, useTranslation } from 'react-i18next';
const translationsEn = {welcome:"Welcome Home Page",turkish:"Turkish",english:"English",login:"Login",sample:"Sample",lng:"Language",home:"Home Page"
 ,name:"Name",
 email:"Email address",
 password:"Password",
 enterName:"Enter your name",
  enterEmail:"Enter your email address",
  enterPassword:"Enter your password",
  contact:"Contact Us",
  logOut:"Log out",
  phoneNumber:"Phone Number",
  enterPhoneNumber:"Enter your phone number",
  selectCountry:"Select Country",
  textarea:"Message",
  send:"Send",
  nameWarning:"Name cannot be left empty",
  emailWarning:"Email cannot be left empty",
  passwordWarning:"Password cannot be left empty",
  helperSelectCountry:"choose a country",
}
const translationsTr = {
  name:"İsim",
  email:"E-posta Adresi",
  password:"Şifre",
  enterName:"İsminizi girin",
  enterEmail:"E-posta adresinizi girin",
  enterPassword:"Parolanızı girin",
  contact:"Bize Ulaşın",
  logOut:"Çıkış",
  phoneNumber:"Telefon Numarası",
  enterPhoneNumber:"Telefon numararınız giriniz",
  selectCountry:"Ülke Seçimi",
  textarea:"Mesaj",
  send:"Gönder",
  nameWarning:"İsim boş bırakılamaz",
  emailWarning:"Email boş bırakılamaz",
  passwordWarning:"Şifre boş bırakılamaz",
  helperSelectCountry:"Lütfen bir ülke seçiniz",
  welcome:"Ana Sayfaya Hoşgeldin",turkish:"Türkçe",english:"İngilizce",login:"Giriş",sample:"Örnek",lng:"Dil",home:"Ana sayfa"}
  //const translationsTr = { welocome: "Ev sayfasına hoşgeldin",turkish:"Türkiye"}
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: translationsEn },
        tr: { translation: translationsTr },
      },
      lng: localStorage.getItem("lng"),
      fallbackLng: localStorage.getItem("lng"),
      interpolation: { escapeValue: false }
    })
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>} />
    <Route path="/login" element={<Login/>}/>
    <Route path="/contactUs" element={<ContactUs/>} />
  </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
