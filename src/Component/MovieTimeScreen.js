import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'
import { getMovieScreen } from '../store/Movie/movieAction'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import image from "../assets/img/1684927558657img_20230313(6).png"

const MovieTimeScreen = (props) => {

    const location = useLocation();
    const navigate = useNavigate()

    console.log("location", location.state)

    useEffect(() => {
        props.getMovieScreen(location.state._id)
    }, [])

    const { movieScreen: getMovieScreen } = useSelector((data) => data.movie)

    const [getMovieScreenData, setGetMovieScreenData] = useState([])

    useEffect(() => {
        setGetMovieScreenData(getMovieScreen)
    }, [getMovieScreen])

    console.log("getMovie", getMovieScreenData)

    // Handle Book
    const handleBook = (id) => {
        navigate("/bookMovie", { state: id })
    }

    return (
        <>
            <Navbar />
            <div className="row">
                <div className="col-6 d-flex justify-content-center mt-5">
                        <div class="card" style={{ width: "30rem" }}>
                            <img class="card-img-top" src={image} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">{location.state.movieName}</h5>
                            </div>
                        </div>
                </div>

                <div className="col-6">
                    <div className="row d-flex justify-content-center mt-5 mx-2">

                        {
                            getMovieScreenData.map((data) => {
                                return (
                                    <>
                                        <div className="col-6 mt-2" onClick={() => handleBook(data._id)} style={{ cursor: "pointer" }}>
                                            <div class="card bg-dark text-white">
                                                <div class="card-body">
                                                    {data.screenType === 0 && "Screen 1"}
                                                    {data.screenType === 1 && "Screen 2"}
                                                    {data.screenType === 2 && "Screen 3"}
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>


        </>
    )
}

export default connect(null, { getMovieScreen })(MovieTimeScreen)