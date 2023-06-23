import guy from './assets/guy.png'
import './styles/Presentation.css'

function Presentation() {
    return (
        <main>
            <div className="img">
                <img src={guy}></img>
            </div>
            <div className="text">
                <span>WE ARE</span>
                <h1>CODE MATCH</h1>
                <h3>WHERE YOU COULD FIND<br></br> YOUR WEBSITE DEVELOPER</h3>
            </div>
        </main>
    )
}

export default Presentation