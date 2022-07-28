import patita from '../media/patacheta.png'
import '../styles/patita.css';

export default function Patita(){
    return(
        <img className='patita' style={{ color: "#f8b384", backgroundColor: "#581c0c", borderRadius: "50%", fontSize: "10vh" }} src={patita}></img>
    )
}