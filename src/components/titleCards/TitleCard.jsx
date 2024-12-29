import { Link } from 'react-router-dom';
import './TitleCard.css'
import { useEffect, useRef, useState } from 'react'
const TitleCard = ({title,category}) => {
  const [apiData,setApiData]=useState([])
  const cardsRef=useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmZjODIzNjY2NGI5Y2ZlZmIwYjIyMzA3YjgzMWY3OSIsIm5iZiI6MTczNDg5Mjg4NS4yMzksInN1YiI6IjY3Njg1ZDU1NzNkYTViY2NjNWM0YzUxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.svYYv8Zh0pjPxrpaf-y0DSKiQ2oHhz-zGgx0476yF-U'
    }
  }; 
  const handleWhell=(event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft+=event.deltaY;
  }
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));
    cardsRef.current.addEventListener('whell',handleWhell);
  },[])
  return (
    <div className='cards-title'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card,index)=>{
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`${"https://image.tmdb.org/t/p/w500"}`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCard