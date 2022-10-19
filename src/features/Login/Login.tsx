import React from 'react'
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from "formik";
import {loginTC} from "../../auth/authReducer";
import {useAppDispatch, useAppSelector} from "../../app/store";
import {Navigate} from "react-router-dom";

export const Login = () => {

    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
    const dispatch = useAppDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        onSubmit: (values) => {
            dispatch(loginTC(values))
            formik.resetForm()
        },
        validate: (values: FormikErrorType) => {

            const errors: FormikErrorType = {}

            if (!values.email) {
                errors.email = 'Field email is required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            if (!values.password) {
                errors.password = 'Password is required'
            } else if (values.password?.length < 2) {
                errors.password = 'Password length must be more than 2 symbols'
            }

            return errors
        }
    })

    if (isLoggedIn) return <Navigate to={'/'}/>

    return <Grid container justifyContent={'center'}>
        <Grid item justifyContent={'center'}>
            <form onSubmit={formik.handleSubmit}>
                <FormControl>
                    <FormLabel>
                        <p>To log in get registered
                            <a href={'https://social-network.samuraijs.com/'}
                               target={'_blank'}> here
                            </a>
                        </p>
                        <p>or use common test account credentials:</p>
                        <p>Email: free@samuraijs.com</p>
                        <p>Password: free</p>
                    </FormLabel>
                    <FormGroup>
                        <TextField label="Email"
                                   margin="normal"
                                   {...formik.getFieldProps('email')}/>
                        {formik.errors.email && formik.touched.email &&
                            <div style={{color: 'red'}}>{formik.errors.email}</div>}

                        <TextField type="password"
                                   {...formik.getFieldProps('password')}
                                   label="Password"
                                   margin="normal"/>
                        {formik.errors.password && formik.touched.password &&
                            <div style={{color: 'red'}}>{formik.errors.password}</div>}

                        <FormControlLabel label={'Remember me'}
                                          {...formik.getFieldProps('rememberMe')}
                                          control={
                                              <Checkbox checked={formik.values.rememberMe}/>}/>
                        <Button type={'submit'}
                                variant={'contained'}
                                color={'primary'}>
                            Login
                        </Button>
                    </FormGroup>
                </FormControl>
            </form>
        </Grid>
    </Grid>
}

export type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}