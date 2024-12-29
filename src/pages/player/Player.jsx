import { useEffect, useState } from 'react';
import './Player.css'
import { FaArrowAltCircleLeft } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom';
const Player = () => {
  const navigate=useNavigate()
  const {id}=useParams()
  const [apiData,setApiData]=useState({
    name:"",
    key:"",
    published_at:"",
    type:""
  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmZjODIzNjY2NGI5Y2ZlZmIwYjIyMzA3YjgzMWY3OSIsIm5iZiI6MTczNDg5Mjg4NS4yMzksInN1YiI6IjY3Njg1ZDU1NzNkYTViY2NjNWM0YzUxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.svYYv8Zh0pjPxrpaf-y0DSKiQ2oHhz-zGgx0476yF-U'
    }
  };
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  },[])

  


  return (
    <div className='player'>
      <FaArrowAltCircleLeft className='arrow-icon' onClick={()=>navigate(-2)} />
      <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder="0" allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>

  )
}

export default Player