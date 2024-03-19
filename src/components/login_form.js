import "./login_form.css"
import facebook from "./assets/facebook.png"
import twitter from "./assets/twitter.png"
import web from "./assets/web.png"

function LoginForm() {
  return (
    <div className="login_div">
        <div className="login_sub_div">
            <div className="title_links">
                <p>Login</p>
                <div className="links">
                    <img src={facebook}/>
                    <img src={twitter}/>
                    <img src={web}/>
                </div>
            </div>
            <form className="login_form">
                <div className="username_div">
                    <p>username</p>
                    <input type="text" placeholder="username" />
                </div>
                <div className="password_div">
                    <p>password</p>
                    <input type="password" placeholder="password" />
                </div>
                <div className="btn_div">
                    <input type="submit" value="Login" />
                    <a href="#">forget password?</a>
                </div>

            </form>
        </div>
    </div>
    );
  }

export default LoginForm;