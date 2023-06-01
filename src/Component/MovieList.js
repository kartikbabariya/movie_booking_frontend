import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'
import { getMovie } from '../store/Movie/movieAction'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import image from "../assets/img/1684927558657img_20230313(6).png"

const MovieList = (props) => {

    const navigate = useNavigate()


    useEffect(() => {
        props.getMovie()
    }, [])

    const { movie } = useSelector((data) => data.movie)
    const { isAuth } = useSelector((data) => data.user)

    const [getMovie, setGetMovie] = useState([])

    useEffect(() => {
        setGetMovie(movie)
    }, [movie])

    console.log("getMovie", getMovie)

    //
    const handleMovieScreen = (data) => {
        navigate("/movieScreenList", { state: data })
    }

    return (
        <>
            <Navbar />

            <div className="container mt-4">
                <div className="row">

                    {
                        movie?.map((data) => {
                            return (
                                <>
                                    <div className="col-4">
                                        <div class="card" style={{ width: "18rem" }} onClick={() => handleMovieScreen(data)}>
                                            <img class="card-img-top" src={image} alt="Card image cap" />
                                            <div class="card-body">
                                                <h5 class="card-title">{data.movieName}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </>

                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default connect(null, { getMovie })(MovieList)