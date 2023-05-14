import React, { useEffect, useState } from 'react'
import { API_KEY , imageUrl} from '../../constants/constants'
import "./Banner.css"
import axios from '../Axios'


function Banner() {
  const[Movie,setMovie] = useState()
  useEffect(() => { // here we use useeffect of one time use 
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US'`).then((responce)=>{ // back tick are used to inner javascript  we can write
      // console.log("text One");
      // console.log(responce.data.results[1]);
      setMovie(responce.data.results[0])
    })
    
  console.log(Movie);
    
  }, [])
  
  return (
    <div className='banner' style={{backgroundImage:`url(${Movie ? imageUrl +  Movie.backdrop_path:""})`}}> //here we use same method of css file like backgroundImage:url("") same methode here there is problems is that using javascript so using `` methode
       <div className='content'>
        <h1 className='title'>{Movie ? Movie.title||Movie.name:"hello"}</h1>
        <div className='banner_button'>
            <button className='buttons'>Play</button>
            <button className='buttons'>My List</button>

 
        </div>
        <h1 className='discription'>{Movie? Movie.overview:""}</h1>
         

       </div>
       <div className="fade"></div>

    </div>
  )
}

export default Banner