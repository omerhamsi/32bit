import React, { Suspense, useState } from 'react'
import Dummy from "../images/dummy.png"
import Down from "../images/down.png"
import "../style/Menu.css"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
import i18n from "i18next"
import { useTranslation } from 'react-i18next';
import Hamburger from "../images/hamburger.png"
import { Link } from 'react-router-dom';
function Menu({ title = "Dummy" }) {
  const navigate = useNavigate();
  const [control, setControl] = useState(false);
  const { t } = useTranslation();
  const [openDropDown, setopenDropDown] = useState(false);

  const OpenMenu = () => {
    return (
      <div className='openMenu'>
        <ul>
          <li className='layoutList'>
            <Link to={"/login"}>{t("login")}</Link>
          </li>
          <li className='layoutList' style={{ display: localStorage.getItem("auth") && (title !== "Contact Us" && title !== "Bize Ulaşın") ? "flex" : "none" }}>
            <Link to={"/contactUs"}>{t("contact")}</Link>
          </li>
          <li className='layoutList'>
            <Link to={"/"}>{t("home")}</Link>
          </li>
          <li className='layoutList'>
            <div style={{ marginRight: "10px", width: "120px" }} >
              <FormControl fullWidth>
                <InputLabel style={{ color: "white", marginTop: "10px" }} id="demo-simple-select-label">{t('lng')}</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  style={{ color: "white" }}
                  onChange={(e) => {
                    if (localStorage.getItem("lng")) {
                      localStorage.removeItem("lng")
                    }
                    localStorage.setItem("lng", e.target.value)
                    i18n.changeLanguage(e.target.value)
                  }}
                >
                  <MenuItem value="tr">{t('turkish')}</MenuItem>
                  <MenuItem value="en">{t("english")}</MenuItem>
                </Select>
              </FormControl>
            </div>
          </li>
          {localStorage.getItem("auth") ?
            <>
              <li className='layoutList'>
                <p style={{ color: "white" }}>{JSON.parse(localStorage.getItem("auth")).name}</p>
              </li>
              <li className='layoutList'>
                <p style={{ color: "white" }}>{JSON.parse(localStorage.getItem("auth")).email}</p>
              </li>
              <li className='layoutList'>
                <Link onClick={() => localStorage.removeItem("auth")} to={"/"}>{t("logOut")}</Link>
              </li>
            </>
            : null}
        </ul>
      </div>
    )
  }
  const UserInfo = () => {
    return (
      <div class="dropdown-content">
        <a href="#">{JSON.parse(localStorage.getItem("auth")).email}</a>
        <a onClick={() => {
          localStorage.removeItem("auth")
          navigate("/")
        }} href="#">{t("logOut")}</a>
      </div>
    )
  }
  return (
    <Suspense fallback="Loading...">
      <div className='menuContainer'>
        <div className='leftSideMenu'>
          <img src={Dummy} alt="" />
          <h3 style={{ marginLeft: "20px" }}>{title}</h3>
        </div>
        <div className='rightSideMenu'>
          <div style={{ marginRight: "10px", width: "120px" }} >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">{t('lng')}</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={(e) => {
                  if (localStorage.getItem("lng")) {
                    localStorage.removeItem("lng")
                  }
                  localStorage.setItem("lng", e.target.value)
                  i18n.changeLanguage(e.target.value)
                }}
              >
                <MenuItem value="tr">{t('turkish')}</MenuItem>
                <MenuItem value="en">{t("english")}</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div style={{ display: (title === "Login" || title === "Giriş") || localStorage.getItem("auth") ? "none" : "flex" }} onClick={() => navigate("/login")} className='buttonMenu'>
            <p>{t("login")}</p>
          </div>
          <div style={{ display: localStorage.getItem("auth") && (title !== "Contact Us" && title !== "Bize Ulaşın") ? "flex" : "none" }} onClick={() => navigate("/contactUs")} className='buttonMenu'>
            <p>{t("contact")}</p>
          </div>
          <div style={{ display: title !== "Dummy" ? "flex" : "none" }} onClick={() => navigate("/")} className='buttonMenu'>
            <p>{t('home')}</p>
          </div>
          {localStorage.getItem("auth") ?
            <div onClick={() => setopenDropDown(!openDropDown)} class="dropdown">
              <div class="dropbtn">
                <p style={{ marginTop: "10px" }}>{JSON.parse(localStorage.getItem("auth")).name}</p>
                <img style={{ width: "20px", height: "20px", marginLeft: "5px" }} src={Down} alt="" />
              </div>
              {openDropDown? <UserInfo/>:null}
            </div>
            : null}
        </div>
        <div className='hamburgerIcon'>
          <img onClick={() => setControl(!control)} src={Hamburger} alt="" />
          {control ? <OpenMenu /> : null}
        </div>
      </div>
    </Suspense>
  )
}
export default Menu;
//
