import { Carousel } from "react-bootstrap";
import img3 from './img3.jpg'
import img1 from './img1.jpg'
import './AppHome.css';
import './general.css'
import { Link, useNavigate } from "react-router-dom";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import first from './1st.jpg'
import sec from './2nd.jpg'
import thi from './3rd.jpg'
import 'bootstrap';

function AppHome() {
  return (
    <>
    <style dangerouslySetInnerHTML={{__html: "\n    body {\n      font-family: Arial, sans-serif;\n      margin: 20px;\n    }\n\n    h1 {\n      color: #333;\n    }\n\n    p {\n      line-height: 1.5;\n    }\n\n    body {\n      font-family: Arial, sans-serif;\n      margin: 20px;\n    }\n\n    h1 {\n      color: #333;\n    }\n    .about-section {\n      background-color: white;\n      padding: 20px;\n      border-radius: 4px;\n      transition: box-shadow 0.3s ease, background-color 0.3s ease;\n    }\n    .about-section:hover {\n      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n      background-color: #eaeaea;\n    }\n    .team-container {\n      display: flex;\n      justify-content: center;\n      align-items: flex-start;\n      gap: 20px;\n    }\n\n    .team-member {\n      background-color: #f7f4f4;\n      padding: 20px;\n      border-radius: 4px;\n      flex: 1;\n      max-width: 300px;\n      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n      transition: transform 0.3s ease;\n    }\n    .mission-section {\n      background-color: #f1fdee;\n      padding: 20px;\n      border-radius: 4px;\n      transition: background-color 0.3s ease;\n    }\n    .mission-section:hover {\n      background-color: #d1f3dd;\n    }\n    .team-member:hover {\n      transform: translateY(-5px);\n    }\n\n    .team-member img {\n      width: 100%;\n      border-radius: 4px;\n    }\n\n    .team-member h3 {\n      margin-top: 10px;\n      color: #333;\n    }\n\n    .team-member p {\n      margin-top: 5px;\n      line-height: 1.5;\n    }\n    footer {\n      margin-top: 40px;\n      text-align: center;\n      color: #fffdfd;\n      font-weight: 00;\n      background-color: #201818;\n      padding: 20px 0;\n    }\n\n    .footer-content {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n\n.footer-links {\n  display: flex;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.footer-links li {\n  margin-right: 10px;\n}\n\n.footer-links li:last-child {\n  margin-right: 0;\n}\n.footer-links li a {\n      color: #777;\n      text-decoration: none;\n      transition: color 0.3s ease;\n    }\n    .footer-links li a:hover {\n      color: #333;\n    }\n    .footer-line {\n      position: relative;\n      height: 2px;\n      background-color: #777;\n      width: 100%;\n      overflow: hidden;\n    }\n\n    .footer-line::before {\n      content: \"\";\n      position: absolute;\n      top: 0;\n      left: -100%;\n      width: 100%;\n      height: 100%;\n      background-color: #f37a7a;\n      animation: moveLine 4s linear infinite;\n    }\n\n    @keyframes moveLine {\n      0% {\n        left: -100%;\n      }\n      100% {\n        left: 100%;\n      }\n    }\n    \n\n  " }} />
  
      


      <div className="container  shadow shadow-lg p-5 justify-content-center border border-1 align-items-center mb-5" style={{height: 450}} id="div1">
    <div className="jumbotron">
      <h1 style={{color: 'white'}}>Hello Fellow Coders!!</h1>
      <p style={{color: 'white', fontSize: 'large'}}>Boomer provides challenging MCQ's for several different domains such as Algorithms, JAVA, SQL, OOPS, WEB developement, and more. You can solve all the challenge directly online (.</p>
      <p style={{color: 'white'}}>We have over 50000+ Programming MCQs with explanations for students &amp; freshers preparing for coding MCQ's and interviews.</p>
    </div>
  </div>

  <section className="container-fluid mb-5">
      <div className="row justify-content-center mb-6">
        <div className="col-sm-12 col-md-10">
        <div className="" style={{height: 450}} >
   
   <MyAppCarousel/>
   </div>
        </div>
      </div>
      </section>
  


  
  <div className="container mt-5">
    <div className="row justify-content-center ">
      <div className="col-sm-12 col-md-3  shadow p-2 border me-3 ms-3 mb-3  ">
      <div className="team-container">
        <div className="team-member">
        <img className="card-img-top" src={img1}  alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">HTML/CSS</h5>
          <p className="card-text mt-1">HTML and CSS are two of the core technologies for building web pages. Go for test to know your potential</p>
          <br /><br />
            <Nav.Link as={Link} to={"/todo"} className="btn btn-success btn-outline-danger">
            Go to test
              </Nav.Link>
          
        </div>
        </div>
        </div>
      </div>
      <div className=" col-sm-12 col-md-3 shadow p-2 me-3 ms-3 mb-3">
      <div className="team-container">
        <div className="team-member">
        <img className="card-img-top" src={img1} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">JS</h5>
          <p className="card-text mt-1">JavaScript often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.</p>
          <br />
          <Nav.Link as={Link} to={"/jsQuiz"} className="btn btn-success">
               Go to test
              </Nav.Link>
          
        </div>
      </div>
      </div>
      </div>
      <div className=" col-sm-12 col-md-3 shadow p-2 me-3 ms-3 mb-3">
      <div className="team-container">
        <div className="team-member">
        <img className="card-img-top" src={img1}  alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Java</h5>
          <p className="card-text mt-1">Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible</p>
          <br /><Nav.Link as={Link} to={"/javaQuiz"} className="btn btn-success">
               Go to test
              </Nav.Link>
        </div>
      </div>
    </div>
    </div>
    <div className="row justify-content-center ">
      <div className=" col-sm-12 col-md-3 shadow p-2 border me-3 ms-3 mb-3  ">
      <div className="team-container">
        <div className="team-member">
        <img className="card-img-top" src={img1}  alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">DSA</h5>
          <p className="card-text mt-1">developer must have knowledge of data Structure and algo. to create efficient solution ,  Go for test to know your potential</p>
          <br /><Nav.Link as={Link} to={"/dsaQuiz"} className="btn btn-success">
               Go to test
              </Nav.Link>
        </div>
      </div>
      </div>
      </div>
      <div className=" col-sm-12 col-md-3 shadow p-2 me-3 ms-3 mb-3">
      <div className="team-container">
        <div className="team-member">
        <img className="card-img-top" src={img1}  alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">OS</h5>
          <p className="card-text mt-1">Operating System is always overlooked by developer but essential for kernel and devops.</p>
          <br /><br /><Nav.Link as={Link} to={"/osQuiz"} className="btn btn-success">
               Go to test
              </Nav.Link>
        </div>
      </div>
      </div>
      </div>
      <div className=" col-sm-12 col-md-3 shadow p-2 me-3 ms-3 mb-3">
        <div className="team-container">
        <div className="team-member">
        <img className="card-img-top" src={img1}  alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">DBT</h5>
          <p className="card-text mt-1">do you have knowledge to store and access huge data ? if yes lets check it. </p>
          <br /><br /><Nav.Link as={Link} to={"/dbtQuiz"} className="btn btn-success">
               Go to test
              </Nav.Link>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  </div>
  <footer>
    <div className="footer-line">
    </div>
    <p>© 2023 Quizzy. All rights reserved.</p>
    <div className="footer-content">
      <ul className="footer-links">
        <li><a href="about.html">About</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
  </footer>
    </>
  );
}

function AppCard() {
  let list = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div className="row">
      {list.map((item, index) => (
        <div className="col-sm-12 col-md-3">
          <div>
            <img
              src={`https://picsum.photos/${300 + index}`}
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
            />
            <p className="fs-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus, ea perspiciatis.
            </p>
            <input
              type="button"
              value="Add to Cart"
              className="btn btn-success"
            />
            <input
              type="button"
              value="Continue"
              className="btn btn-secondary"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function MyAppCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={first}
          alt="First slide"
          style={{height:500}}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sec}
          alt="Second slide"
          style={{height:500}}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={thi}
          alt="Third slide"
          style={{height:500}}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default AppHome;
