import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { LOG_OUT_USER } from '../store/User/userType'

const Navbar = () => {

    const dispatch = useDispatch()

    const { isAuth } = useSelector((data) => data.user)

    const handlLogout = () => {

        dispatch({ type: LOG_OUT_USER })

    }

    return (
        <>
            <nav class="navbar justify-content-between ">
                <span class="navbar-brand mx-5 text-white">Movie Booking App</span>

                {
                    isAuth ?
                        <form class="form-inline">
                            <button class="btn btn-outline-success my-2 my-sm-0 " type="button" onClick={handlLogout}>Logout</button>
                        </form>
                        :

                        <form class="form-inline">
                            <Link to="/login">
                                <button class="btn btn-outline-success my-2 my-sm-0 " type="button">Login</button>
                            </Link>
                            <Link to="/signUp">
                                <button class="btn btn-outline-success my-2 my-sm-0 mx-4" type="button">Sign Up</button>
                            </Link>
                        </form>
                }
            </nav>
        </>
    )
}

export default Navbar