import React, { useEffect, useState } from 'react'
import Youtube from "react-youtube"
import "./Rowpost.css"
import { API_KEY, imageUrl } from '../../constants/constants'
import axios from '../Axios'

function Rowpost(props) {
    const [Movie, setMovie] = useState([])
    const [Urlid, setUrlid] = useState('')
    useEffect(() => {
        axios.get(props.url).then(responce=>{
            console.log(responce.data);
            setMovie(responce.data.results)
        }).catch(err=>{
            // alert('Network Error')
        })
     
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const handleMovie=(id)=>{
        console.log(id);
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(responce=>{
         if (responce.data.results.length !== 0) {
          setUrlid(responce.data.results[0])
          
         }else{
          console.log("error");
         }

        })

      }

    
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
            {Movie.map((obj)=> // here obj are used the object of move  here we niglate the return() function a single value there will be simpy
         <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallposter':'poster' } src={`${imageUrl+obj.backdrop_path}`}/>
            )}

   </div>
 {Urlid &&  <Youtube videoId={Urlid.key} opts={opts} />}
        
    </div>
  )
}

export default Rowpost