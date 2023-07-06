import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import backgroundImage from '../assets/home.jpg'
import MovieLogo from '../assets/homeTitle.webp'
import { FaPlay } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies, getGenres } from '../store'
import Slider from '../components/Slider'
import { onAuthStateChanged } from 'firebase/auth'
import { firebaseAuth } from '../utils/firebase-config'

const Netflix = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null)
  }

  const genresLoaded = useSelector((state) => state.netflix.genresLoaded)
  const movies = useSelector((state) => state.netflix.movies)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres())
  }, [])

  useEffect(() => {
    if (genresLoaded) dispatch(fetchMovies({ type: "all" }))
  }, [genresLoaded])

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login");
  });


  return (
    <Container className='netflixContainer' >
      <Navbar isScrolled={isScrolled} />
      <div className="hero">
        <img
          src={backgroundImage}
          className='background-image'
          alt="bgImage" />
        <div className="container">
          <img src={MovieLogo} alt="Movie title" className='movieLogo' />
          <div className="buttons flex">
            <button
              onClick={() => navigate("/player")}
              className="flex j-center a-center"
            >

              <FaPlay />
              Play
            </button>

            <button className="flex j-center a-center">
              <AiOutlineInfoCircle />
              More info
            </button>
          </div>
        </div>
      </div>
      <Slider movies={movies} />
    </Container>
  )
}
const Container = styled.div`
  background-container: black;
  
  .hero{
    position:relative;
    height:100vh;
    width:100vw;
    .background-image{
      filter: brightness(60%);
      object-fit:cover;
    }
    img{
      width:100%;
      height: 100%;
    }  
    .container{
      position: absolute;
      bottom: 5rem;
      margin-left:5rem;
      .logo{
        img{
          width: 100%;
          height: 100%;
        }
      }
    }    
  }
  .buttons{
    margin: 5em;
    gap: 2rem;
    button{
      font-size: 1.4rem;
      border-radius: 0.2rem;
      padding: 0.5rem 2rem 0.5rem 2.4rem;
      border: none;
      cursor: pointer;
      transition: 0.2s ease-in-out; 
      &:hover{
        opacity: 0.8;
      }
      &:nth-of-type(2){
        background-color: rgba(109, 109, 110, 0.7) ;
        color: white;
        svg{
          font-size: 1.8rem;
        }
      }
    }
  }
`;
export default Netflix;