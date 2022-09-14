import { MenuItem, Select } from '@mui/material';
import axios from 'axios';
import { Formik } from 'formik';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import Footer from '../component/Footer'
import Menu from '../component/Menu'
import "../style/ContactUs.css"
import * as Yup from "yup"
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Button, Box, Typography, TextareaAutosize } from '@mui/material';
function ContactUs() {
    const userInfo = JSON.parse(localStorage.getItem("auth"))
    const { t } = useTranslation()
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
    return (
        <Box className='contactContent'>
            <Box>
                <Menu title={t("contact")} />
                <Formik
                    initialValues={{ name: userInfo.name, email: userInfo.email, phone: "", country: "", text: "" }}
                    onSubmit={(values, { setSubmitting }) => {
                        console.log(values)
                        axios.post("https://example.com/", {
                            "name": values.name,
                            "email": values.email,
                            "phonenumber": values.phone,
                            "country_code": values.country,
                            "text": values.textField
                        })
                            .then((result) => {
                                console.log(result)
                            })
                            .catch((result) => {
                                console.log(result)
                            })
                    }}

                >
                    {({
                        values,
                        errors,
                        handleChange,
                        handleSubmit,
                    }) => (
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '70ch' },
                                height: 650,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                            noValidate
                            autoComplete="off"
                            onSubmit={handleSubmit}
                        >
                            <Stack spacing={2}>
                                <TextField
                                    helperText={t("enterName")}
                                    name="name"
                                    value={values.name}
                                    label={t("name")}
                                    onChange={handleChange}
                                    type="name"

                                />

                                <TextField
                                    helperText={t("enterEmail")}
                                    name="email"
                                    value={values.email}
                                    label={t("email")}
                                    onChange={handleChange}
                                    type="email"
                                />

                                <TextField
                                    helperText={t("enterPhoneNumber")}
                                    name="phone"
                                    value={values.phone}
                                    label={t("phoneNumber")}
                                    onChange={handleChange}
                                    type="tel"
                                />
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    label={t("selectCountry")}
                                    value={values.country}
                                    onChange={handleChange}
                                    name="country"
                                    helperText={t("helperSelectCountry")}
                                >

                                    {countryList.map((item) => {
                                        return (
                                            <MenuItem value={item.id}>{item.name}</MenuItem>
                                        )
                                    })}

                                </TextField>
                                <TextField
                                    name="text"
                                    id="outlined-textarea"
                                    value={values.text}
                                    label={t("textarea")}
                                    rows={3}
                                    onChange={handleChange}
                                    type="text"
                                    multiline
                                />
                                <Box className='buttonLayout'>
                                    <Button variant='contained' className='submitButton' type="submit">{t("send")}</Button>
                                </Box>
                            </Stack>
                        </Box>
                    )}
                </Formik>
            </Box>
            <Footer />
        </Box>
    )
}
export default ContactUs
/*
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
                                <textarea value={textField} onChange={(e) => { setTextField(e.target.value) }} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className='buttonLayout'>
                                <button className='submitButton' type="submit">{t("send")}</button>
                            </div>
                        </form>
                    </div>*/