import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import video from '../assets/StrangerThings.mp4'

const Player = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <div className="player">
                <div className="back">
                    <BsArrowLeft onClick={() => navigate(-1)} />
                </div>
                <video src={video} autoPlay loop controls muted></video>
            </div>
        </Container>
    )
}

const Container = styled.div`
height: 100vh;
width:100vw;
    .player{
        position:relative;
        width: 100%;
        height: 100%;
        .back{
            position: absolute;
            padding: 2rem;
            z-index: 1;
            svg{
                font-size: 3rem;
                cursor: pointer;
            }
        }
        video{
            height: 100%;
            width: 100%;
            object-fit: contain;
        }
    }
`;

export default Player;