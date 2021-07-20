import { useTranslation } from "react-i18next";
import React, { useEffect, useState, useContext, Redirect } from "react";
import LanguageSelect from "./languageSelect";
import { useHistory } from "react-router-dom";
import Settings from "./settings";
import {Token} from "./token"
function Login() {
  
  const [context, setContext] = useContext(Token);
  const { t } = useTranslation();
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [pass, setPass] = useState("cityslicka");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  let user = {
    email: email,
    password: pass,
  };
 
  const[check,setCheck] = useState(false)
  let history = useHistory();
  
  
const[show,setShow]=useState('')
  // if ((user.email === "admin") & (user.password === "admin")) {
  //   console.log("вы администратор");
  // }
  // "email": "eve.holt@reqres.in",
  // "password": "cityslicka"
console.log('3',status.token)

  useEffect(() => {
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((stat) => {
        if (stat.token) {
          setStatus(stat);
       
      
        } else
          setStatus(
           
        <div className="error" >
        <div className="message is-danger">
          <a className="delete" onClick={()=>{setShow('none')}} ></a>
          <div className="message-body"> {stat.error}</div>
        </div>
      </div> 
       );
      });
  }, [email, pass]);
  

  if (navigator.cookieEnabled === false) {
    return  alert('Включите куки')
   }

  return (
    <>
      <div id="huro-app" className="app-wrapper">
        <div className="auth-wrapper">
          <div className="modern-login">
            <div className="underlay h-hidden-mobile h-hidden-tablet-p" />
            <div className="columns is-gapless is-vcentered">
              <div className="column is-relative is-8 h-hidden-mobile h-hidden-tablet-p">
                <div className="hero is-fullheight is-image">
                  <div className="hero-body">
                    <div className="container">
                      <div className="columns">
                        <div className="column">
                          <img
                            className="hero-image"
                            src="assets/img/illustrations/login/station.svg"
                            alt
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column is-4 is-relative">
                <label className="dark-mode ml-auto">
                  <LanguageSelect />
                </label>

                <div className="is-form">
                  <div className="hero-body">
                    <div className="form-text">
                      <h2>{t("sign-in")}</h2>

                      <p>{t("welcome")}</p>
                    </div>

                    <div className="form-text is-hidden">
                      <h2>Recover Account</h2>
                      <p>Reset your account password.</p>
                    </div>


<div style={{display:show}}>
                {error}
              
                </div>
     

                    <form
                      id="login-form"
                      className="login-wrapper"
                      action="activity-main.html"
                    >
                      <div className="control has-validation">
                        <input
                          type="text"
                          className="input"
                          onChange={(event) => setEmail(event.target.value)}
                          placeholder
                        />
                        <small className="error-text">
                          This is a required field
                        </small>
                        <div className="auth-label">{t("email")}</div>
                        <div className="auth-icon">
                          <i className="lnil lnil-envelope" />
                        </div>
                        <div className="validation-icon is-success">
                          <div className="icon-wrapper">
                            <i data-feather="check" />
                          </div>
                        </div>
                        <div className="validation-icon is-error">
                          <div className="icon-wrapper">
                            <i data-feather="x" />
                          </div>
                        </div>
                      </div>
                      <div className="control has-validation">
                        <input
                          type="password"
                          className="input"
                          onChange={(event) => setPass(event.target.value)}
                        />

                        <div className="auth-label">{t("pass")}</div>
                        <div className="auth-icon">
                          <i className="lnil lnil-lock-alt" />
                        </div>
                      </div>
                      <div className="control is-flex">

                        <label className="remember-toggle">
                          <input type="checkbox" onChange={(event)=> setCheck(event.target.checked)} />
                          <span className="toggler">
                            <span className="active">
                              <i data-feather="check" />
                            </span>
                            <span className="inactive">
                              <i data-feather="circle" />
                            </span>
                          </span>
                        </label>
                        <div className="remember-me">Remember Me</div>
                        <a id="forgot-link">Forgot Password?</a>
                      </div>
                      <div className="button-wrap has-help">
                        <button
                          id="login-submit"
                          type="button"
                          className="button h-button is-big is-rounded is-primary is-bold is-raised"
                          onClick={() => {
                            if (status.token) {
                              history.push("/settings");
                              setContext(status.token);
                              if (check){
                                document.cookie = `token=${status.token}; expires=Thu, 18 Dec 2021 12:00:00 UTC; path=/`
                              }
                              
                            localStorage.setItem('token',`${status.token}`)
                            } 
                            else{ setError(status) || setShow('block')}
                          }}
                        >
                          {t("login-now")}
                        </button>
                      </div>
                    </form>
                    <form id="recover-form" className="login-wrapper is-hidden">
                      <p className="recover-text">
                        Enter your email and click on the confirm button to
                        reset your password. We'll send you an email detailing
                        the steps to complete the procedure.
                      </p>
                      <div className="control has-validation">
                        <input type="text" className="input" />
                        <small className="error-text">
                          This is a required field
                        </small>
                        <div className="auth-label">Email Address</div>
                        <div className="auth-icon">
                          <i className="lnil lnil-envelope" />
                        </div>
                        <div className="validation-icon is-success">
                          <div className="icon-wrapper">
                            <i data-feather="check" />
                          </div>
                        </div>
                        <div className="validation-icon is-error">
                          <div className="icon-wrapper">
                            <i data-feather="x" />
                          </div>
                        </div>
                      </div>
                      <div className="button-wrap">
                        <button
                          id="cancel-recover"
                          type="button"
                          className="button h-button is-white is-big is-rounded is-lower"
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          className="button h-button is-solid is-big is-rounded is-lower is-raised is-colored"
                        >
                          Confirm
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
