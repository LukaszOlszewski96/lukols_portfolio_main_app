import React, {useState, useContext, Switch, Route} from 'react'
import './Login.css'
import { Container, Box, TextField,
         FormControl, InputLabel,
         InputAdornment, IconButton, OutlinedInput, Button} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Redirect } from 'react-router'
import {AuthContext} from '../../Components/Auth/Auth'
import { auth } from '../../DataBase/Configure'
import Admin from '../../Components/Admin/Admin'




const Login = () => {

        const [values, setValues] = useState({
            email: '',
            password: '',
            showPassword: false,
        });

const handleChange = (prop) => (e) => {
    setValues({
        ...values,
        [prop]: e.target.value });
    
};

const handleClickShowPassword = () => {
    setValues({
        ...values,
        showPassword: !values.showPassword,
    });
};

const handleMouseDownPassword = (e) => {
    e.preventDefault();
};

const loginEmailPass = () => {
    auth().signInWithEmailAndPassword(values.email, values.password);
}

//Change on private account dashboard admin:
const {currentUser} = useContext(AuthContext);

if (currentUser){
    return (
            <Redirect  to = '/admin'/>

    )};


    return (
        <Container>
            <Box>
                <TextField 
                    id="outlined-disabled"
                    label="E-mail"
                    type="email"
                    autoComplete="current-email"
                    sx={{ m: 1, width: '25ch' }}
                    value = {values.email}
                    onChange={handleChange('email')}
                />
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
                <Button variant='outlined' onClick={loginEmailPass}>Login</Button>
            </Box>
        </Container>
    )
}

export default Login
