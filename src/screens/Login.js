import React, { useEffect, useState } from 'react'
import "../style/Login.css"
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; import { Box, Button, Typography } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from "yup"
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';

function Login({ setOpen = null }) {
    const navigate = useNavigate();
    const { t } = useTranslation();

    useEffect(() => {
        if (localStorage.getItem("auth")) {
            navigate("/")
        }
    })
    return (
        <Box>
            <Box>
                <Box className='form'>
                    <Formik
                        initialValues={{ name: '', email: '', password: '' }}

                        onSubmit={(values, { setSubmitting }) => {
                            console.log(values)
                            localStorage.setItem("auth", JSON.stringify(values));
                            navigate("/")
                            setOpen(false)
                        }}
                        validationSchema={
                            Yup.object({
                                name: Yup.string().required(`${t("nameWarning")}`),
                                email: Yup.string().email("Geçerli bir email adresi giriniz").required(`${t("emailWarning")}`),
                                password: Yup.string().required(`${t("passwordWarning")}`),
                            })
                        }
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
                                    '& .MuiTextField-root': { m: 1, width: '50ch' },
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
                                {errors.name && <Typography>{errors.name}</Typography>}
                                <TextField
                                    helperText={t("enterEmail")}
                                    name="email"
                                    value={values.email}
                                    label={t("email")}
                                    onChange={handleChange}
                                    type="email"  
                                />
                                {errors.email && <Typography>{errors.email}</Typography>}
                                <TextField
                                    helperText={t("enterPassword")}
                                    name="password"
                                    value={values.password}
                                    label={t("password")}
                                    onChange={handleChange}
                                    type="password"
                                    
                                />
                                {errors.password && <Typography>{errors.password}</Typography>}
                               </Stack>

                                <Box className='buttonLayout'>
                                    <Button variant='contained' className='submitButton' type="submit">{t("login")}</Button>
                                </Box>
                            </Box>
                        )}
                    </Formik>
                </Box>
            </Box>
        </Box>

    )
}
export default Login
