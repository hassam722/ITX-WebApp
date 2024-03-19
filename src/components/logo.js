
import "./logo.css"
import logo from './assets/logo.png'

function Logo(){
    return(
        <div className="logo">
            <img src={logo} alt="logo"/>
        </div>
    )
}

export default Logo