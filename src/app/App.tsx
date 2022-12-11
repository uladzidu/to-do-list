import React, {useEffect} from 'react'
import './App.css'
import {TodolistsList} from '../features/TodolistsList/TodolistsList'
import {useDispatch} from 'react-redux'
import {useAppSelector} from './store'
import {initializeAppTC} from './app-reducer'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';
import {ErrorSnackbar} from '../components/ErrorSnackbar/ErrorSnackbar'
import {Navigate, Route, Routes} from "react-router-dom";
import {Login} from "../features/Login/Login";
import {Page404} from "../features/Page404/Page404";
import {CircularProgress} from "@mui/material";
import {logoutTC} from "../auth/authReducer";


function App() {

    const isInitialized = useAppSelector(state => state.app.isInitialized)
    const status = useAppSelector((state) => state.app.status)
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
    const dispatch = useDispatch()
    const userEmail = useAppSelector(state => state.app.email)
    console.log('userEmail : ' ,userEmail)
    console.log('status : ', status)

    useEffect(() => {
        dispatch(initializeAppTC())
    }, [dispatch])

    if (!isInitialized ) {
        return <div
            style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
            <CircularProgress/>
        </div>
    }

    const handleLogout = () => {
        dispatch(logoutTC())
    }

    return (
        <div className="App">
            <ErrorSnackbar/>
            {userEmail && <AppBar style={{display: 'flex',alignItems : 'flex-start'}} position="static">
                <Toolbar>
                    <Typography style={{marginRight : '10px', color : 'gold'}} variant="h6">
                        {userEmail}
                    </Typography>
                    {isLoggedIn && <Button onClick={handleLogout} color="inherit">Log out</Button>}
                </Toolbar>
                {status === 'loading' && <LinearProgress/>}
            </AppBar>}
            <Container fixed>
                <Routes>
                    <Route path={'/'} element={<TodolistsList/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/404'} element={<Page404/>}/>
                    <Route path={'*'} element={<Navigate to={'/404'}/>}/>
                </Routes>
            </Container>
        </div>
    )
}

export default App
