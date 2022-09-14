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
import Login from '../screens/Login';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Link, List, ListItem } from '@mui/material';
function Menu({ title = "Dummy" }) {
  const navigate = useNavigate();
  const [control, setControl] = useState(false);
  const { t } = useTranslation();
  const [openDropDown, setopenDropDown] = useState(false);
  const OpenMenu = () => {
    return (
      <Box className='openMenu'>
        <List>
          {!localStorage.getItem("auth")? <ListItem className='layoutList'>
            <Link onClick={()=>{
              if(!localStorage.getItem("auth")){
                setControl(!control) 
                handleOpen()
              }
            }}>{t("login")}</Link>
          </ListItem>:null}
          <ListItem className='layoutList' style={{ display: localStorage.getItem("auth") && (title !== "Contact Us" && title !== "Bize Ulaşın") ? "flex" : "none" }}>
            <Link onClick={()=>{
              navigate("/contactUs")
              setControl(!control)
            }}>{t("contact")}</Link>
          </ListItem>
          <ListItem className='layoutList'>
            <Link onClick={()=>{
              navigate("/")
              setControl(!control)
            }}>{t("home")}</Link>
          </ListItem>
          <ListItem className='layoutList'>
            <Box style={{ marginRight: "10px", width: "120px" }} >
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
            </Box>
          </ListItem>
          {localStorage.getItem("auth") ?
            <>
              <ListItem className='layoutList'>
                <Typography style={{ color: "white" }}>{JSON.parse(localStorage.getItem("auth")).name}</Typography>
              </ListItem>
              <ListItem className='layoutList'>
                <Typography style={{ color: "white" }}>{JSON.parse(localStorage.getItem("auth")).email}</Typography>
              </ListItem>
              <ListItem className='layoutList'>
                <Link onClick={() => {
                  setControl(!control)
                  localStorage.removeItem("auth")
                  navigate("/")
                }} >{t("logOut")}</Link>
              </ListItem>
            </>
            : null}
        </List>
      </Box>
    )
  }
  const UserInfo = () => {
    return (
      <Box class="dropdown-content">
        <Link  href="#">{JSON.parse(localStorage.getItem("auth")).email}</Link>
        <Link onClick={() => {
          localStorage.removeItem("auth")
          navigate("/")
        }} href="#">{t("logOut")}</Link>
      </Box>
    )
  }
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Suspense fallback="Loading...">
      <Box className='menuContainer'>
        <Box className='leftSideMenu'>
          <img src={Dummy} alt="" />
          <Typography style={{ marginLeft: "20px" }} variant="h4" component="h5">
            {title}
          </Typography>
        </Box>
        <Box className='rightSideMenu'>
          <Box style={{ marginRight: "10px", width: "120px" }} >
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
          </Box>
          <Button variant='contained' style={{ display: (title === "Login" || title === "Giriş") || localStorage.getItem("auth") ? "none" : "flex" }} onClick={() => handleOpen()} className='buttonMenu'>
            <Typography>{t("login")}</Typography>
          </Button>
          <Button variant='outlined' style={{ display: localStorage.getItem("auth") && (title !== "Contact Us" && title !== "Bize Ulaşın") ? "flex" : "none" }} onClick={() => navigate("/contactUs")} className='buttonMenu'>
            <Typography style={{ marginTop: "10px" }}>{t("contact")}</Typography>
          </Button>
          <Button variant='outlined' style={{ display: title !== "Dummy" ? "flex" : "none" }} onClick={() => navigate("/")} className='buttonMenu'>
            <Typography style={{ marginTop: "10px" }}>{t('home')}</Typography>
          </Button>
          {localStorage.getItem("auth") ?
            <Box onClick={() => setopenDropDown(!openDropDown)} class="dropdown">
              <Box ml={1} sx={{
                width: 100,
                height: 50,
                backgroundColor: "#F27E97",
                borderRadius: 2
              }} className="dropbtn">
                <Typography>{JSON.parse(localStorage.getItem("auth")).name}</Typography>
                <img style={{ width: "20px", height: "20px", marginLeft: "5px" }} src={Down} alt="" />
              </Box>
              {openDropDown ? <UserInfo /> : null}
            </Box>
            : null}
        </Box>
        <Box className='hamburgerIcon'>
          <img onClick={() => setControl(!control)} src={Hamburger} alt="" />
          {control ? <OpenMenu /> : null}
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ boxShadow: 24 }} className='BoxStyle'>
          <Box className='titleContainer'>
            <Typography id="modal-modal-title" variant="h3" component="h1">
              Login
            </Typography>
          </Box>
          <Login setOpen={setOpen} />
        </Box>
      </Modal>
    </Suspense>
  )
}
export default Menu;
//
