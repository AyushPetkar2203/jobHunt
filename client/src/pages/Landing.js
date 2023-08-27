import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../Components'
import { Link, useNavigate, Navigate } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import { useEffect } from 'react'
import React from 'react'

const Landing = () => {

    const { user, setupUser, isLoading } = useAppContext()
    const navigate = useNavigate()


    useEffect(() => {
        if (user) {
            navigate('/')
        }

    }, [user, navigate])

    return (
        <React.Fragment>
            {user && <Navigate to="/" />}
            <Wrapper>
                <nav>
                    <Logo />
                </nav>
                <div className='container page'>
                    <div className='info'>
                        <h1>
                            Job <span>Tracking</span> Application
                        </h1>
                        <p>
                            The world of Fashion is an ever changing one and anyone entering to the field has to be ready for tough competitions and challenges.
                            No matter what the reason, having a dream job would definitely help you have a goal in life and aim to be there.
                        </p>
                        <Link to='/register' className='btn btn-hero'>Register / Login</Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button className='btn btn-hero' disabled={isLoading} onClick={() => {
                            setupUser({
                                currentUser: { email: 'demo@mail.com', password: 'bhunu@123' },
                                endPoint: 'login',
                                alertText: 'Login Successful! Redirecting....'
                            })
                        }}>{isLoading ? 'Loading....' : 'Explore the App'}</button>
                    </div>
                    <img src={main} alt='Job Hunt' className='img main-img'></img>
                </div>
            </Wrapper>
        </React.Fragment>
    )
}

export default Landing
