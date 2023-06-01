import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'
import { getMovie } from '../../store/Movie/movieAction'

const HomePage = (props) => {


    useEffect(() => {
        props.getMovie()
    },[])

    const {movie} = useSelector((data) => data.movie)

    const [getMovie, setGetMovie] = useState([])

    useEffect(() => {
        setGetMovie(movie)
    },[movie])

    console.log("getMovie",getMovie)

  return (
    <div>HomePage</div>
  )
}

export default connect(null,{getMovie}) (HomePage)