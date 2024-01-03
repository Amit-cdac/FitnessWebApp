import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import code from './code.jpg'
import './AppLogin.css'
import './general.css'

function AppLogin() {
  const navigate = useNavigate();
  let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);

  let [user, setUser] = useState({
    email: "",
    password: "",
  });

  let handlerPasswordAction = (e) => {
    let newuser = { ...user, password: e.target.value };
    setUser(newuser);
  };

  let handlerEmailAction = (e) => {
    let newuser = { ...user, email: e.target.value };
    setUser(newuser);
  };

  let loginAction = async () => {
    try {
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }

      // BACKEND :: ...
      let url = `http://localhost:4000/login-by-post`;
      let data = { email: user.email, password: user.password };
      let res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status == 500) {
        let erroMessage = await res.text();
        throw new Error(erroMessage);
      }

      localStorage.setItem("loginStatus", "true");
      navigate("/home", { replace: true });
    } catch (err) {
      alert(err.message);
      setIsError(true);
    } finally {
      setTimeout(() => {
        setIsError(false);
        setIsSuccess(false);
      }, 5000);
    }
  };

  return (
    <>
      <section className="h-100 gradient-form " style={{backgroundColor: '#eee'}}>
    <div className="container  mb-2 py-2 border ">
      <div className="row justify-content-center align-items-center  border shadow " style={{height: '100vh'}}>
        <div className="col-md-6 col-sm-12  me-2" id="row_div1">
          <div className="card">
            <img className="card-img-top" src={code} alt="Card image cap" />
          </div>
         
        </div>
    <div className=" col-sm-12  col-md-4 justify-content-center align-items-center" style={{height: '100vh', backgroundColor: '#eee'}}>
          <div className="text-center">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" style={{width: 100}} alt="logo" />
            <h4 className="mt-1 mb-5 pb-1">We are The Quizzy Team</h4>
          </div>
<div className="row justify-content-center">
        <div className="col-sm-12 col-md-6">
          <div className="fs-2 mb-2">Login Form</div>

          <form ref={formRef} className="needs-validation">
          <div class="field">
            <input
              type="email"      
              className=" form-control form-control-lg mb-2"
              id="email"
              placeholder="Enter Email"
              value={user.email}
              onChange={handlerEmailAction}
              required
            />
            </div>
            <div class="valid-feedback feedback-pos">
            Looks good!
          </div>
            <div className="error-text mb-2">Enter valid email</div>


            <input
              type="password"
              className="form-control form-control-lg mb-2"
              placeholder="Enter password"
              value={user.password}
              onChange={handlerPasswordAction}
              required
            />

            <input
              type="button"
              value="Login"
              className="w-100 btn btn-lg btn-secondary"
              onClick={loginAction}
            />

            <div className="d-flex justify-content-center ">
              <Link to={"/registration"}>New User, Register here</Link>
            </div>
          </form>

          <Link
            to={"/AdminLogin"}
            className="nav-link active"
            style={{ backgroundColor: "transparent" }}
          >
          ADMIN LOGIN
          </Link>

          {isSuccess && <div className="alert alert-success">Success</div>}
          {isError && <div className="alert alert-danger">Error</div>}
        </div>
      </div>
      </div></div></div></section>
    </>
  );
}



function check(){

  const email=document.querySelector("#email")
  const error=document.querySelector(".error-text")
  const btn=document.querySelector("#bt")

  let reg= /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if(email.value.match(reg)){
          
          email.style.borderColor="#27ae60";
          btn.style.display="block";
      }
      else{
          email.style.borderColor="#e74c3c";
          error.style.display="block";
      }

     
      

  }

export default AppLogin;