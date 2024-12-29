import Navbar from '../../components/navbar/Navbar'
import hero_img from '../../assets/netflix-back.jpg'
import instagram from '../../assets/instagram.svg'
import './Home.css'
import TitleCard from '../../components/titleCards/TitleCard'
import Footer from '../../components/footer/Footer'
const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_img} alt="" className='hero-img' />
        <div className="hero-caption">
          <h1 className='hero-title'>Netflix movies</h1>
          <p>Discovering hais ties to a secret ancient order, a young
            man living in modern Istanbul embarks on a quest to save the city
            from an immortal enemy
          </p>
          <div className="hero-btns">
          <button className="btn"><img src={instagram} alt="" />Play</button>
          <button className="btn dark-btn"><img src={instagram} alt="" />More Info</button>
        </div>
        <TitleCard/>
        </div>      
      </div>  
      <div className="more-cards">
      <TitleCard title={"Blockbuster Movies"} category={"top_rated"} />
      <TitleCard title={"Only on Netflix"} category={"popular"}/>
      <TitleCard title={"Upcoming"} category={"upcoming"}/>
      <TitleCard title={"Top pic for you"} category={"now_playing"}/>
      </div>
      <Footer/>  
    </div>
  )
}

export default Home