import { useEffect, useState } from "react";

import './general.css'
import gaurav from './Gaurav.jpeg'
import prashant from './prashant.jpeg'
import ankit from './Ankit.jpg'


function MyTodoList() {
  let [todoList, setTodoList] = useState([]);

  // spl function, useEffect()
  // useEffect(() => {}, []);
  // useEffect(() => getAllTodoAction(), []);
  useEffect(() => {
    getAllTodoAction();
  }, []);

  let getAllTodoAction = async () => {
    let url = `http://localhost:4000/find-all-todo`;
    let res = await fetch(url);
    let list = await res.json();

    // list updated.
    let newlist = [...list];
    setTodoList(newlist);
  };

  return (
    <>
    <style dangerouslySetInnerHTML={{__html: "\n    body {\n      font-family: Arial, sans-serif;\n      margin: 20px;\n    }\n\n    h1 {\n      color: #333;\n    }\n\n    p {\n      line-height: 1.5;\n    }\n\n    body {\n      font-family: Arial, sans-serif;\n      margin: 20px;\n    }\n\n    h1 {\n      color: #333;\n    }\n    .about-section {\n      background-color: white;\n      padding: 20px;\n      border-radius: 4px;\n      transition: box-shadow 0.3s ease, background-color 0.3s ease;\n    }\n    .about-section:hover {\n      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n      background-color: #eaeaea;\n    }\n    .team-container {\n      display: flex;\n      justify-content: center;\n      align-items: flex-start;\n      gap: 20px;\n    }\n\n    .team-member {\n      background-color: #f7f4f4;\n      padding: 20px;\n      border-radius: 4px;\n      flex: 1;\n      max-width: 300px;\n      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n      transition: transform 0.3s ease;\n    }\n    .mission-section {\n      background-color: #f1fdee;\n      padding: 20px;\n      border-radius: 4px;\n      transition: background-color 0.3s ease;\n    }\n    .mission-section:hover {\n      background-color: #d1f3dd;\n    }\n    .team-member:hover {\n      transform: translateY(-5px);\n    }\n\n    .team-member img {\n      width: 100%;\n      border-radius: 4px;\n    }\n\n    .team-member h3 {\n      margin-top: 10px;\n      color: #333;\n    }\n\n    .team-member p {\n      margin-top: 5px;\n      line-height: 1.5;\n    }\n    footer {\n      margin-top: 40px;\n      text-align: center;\n      color: #fffdfd;\n      font-weight: 00;\n      background-color: #201818;\n      padding: 20px 0;\n    }\n\n    .footer-content {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n\n.footer-links {\n  display: flex;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.footer-links li {\n  margin-right: 10px;\n}\n\n.footer-links li:last-child {\n  margin-right: 0;\n}\n.footer-links li a {\n      color: #777;\n      text-decoration: none;\n      transition: color 0.3s ease;\n    }\n    .footer-links li a:hover {\n      color: #333;\n    }\n    .footer-line {\n      position: relative;\n      height: 2px;\n      background-color: #777;\n      width: 100%;\n      overflow: hidden;\n    }\n\n    .footer-line::before {\n      content: \"\";\n      position: absolute;\n      top: 0;\n      left: -100%;\n      width: 100%;\n      height: 100%;\n      background-color: #f37a7a;\n      animation: moveLine 4s linear infinite;\n    }\n\n    @keyframes moveLine {\n      0% {\n        left: -100%;\n      }\n      100% {\n        left: 100%;\n      }\n    }\n    \n\n  " }} />
  
       <div className="about-section">
    <h1>About Us</h1>
    <p>Welcome to our website! We are a dedicated team passionate about providing you with the best experience and service possible. Here's a little bit about who we are and what we do:</p>
  </div>
  <div className="mission-section">
    <h2>Our Mission</h2>
    <p>Our mission is to [describe your mission or purpose]. We strive to [highlight the goals or objectives of your organization].</p>
    <p>We have a diverse and talented team of professionals who are committed to excellence. Each member brings unique skills and expertise to our organization, allowing us to deliver exceptional results.</p>
    <p>If you have any questions, suggestions, or would like to inquire about our services, please don't hesitate to reach out to us. You can contact us via email at [email protected] or by phone at [phone number]. We would love to hear from you!</p>
  </div>
  <h1>Our Team</h1>
  <div className="team-container">
    <div className="team-member">
      <img src={prashant} alt="Team Member 1" />
      <h3>AMIT KUMAR</h3>
      <p>CDAC Kharghar</p>
      </div>
    <div className="team-member">
      <img src={gaurav} alt="Team Member 2" />
      <h3>Gaurav parit</h3>
      <p>CDAC Juhu</p>
      </div>
    <div className="team-member">
      <img src={ankit} alt="Team Member 3" style={{height:300}} />
      <h3>Ankit Shewale</h3>
      <p>CDAC Kharghar</p>
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

export default MyTodoList;
/*<div className="row justify-content-center">
        <div className="col-sm-12 col-md-6">
          <h1>Display All Todo</h1>
        </div>
      </div>

      {todoList.map((item) => (
        <>
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-6">
              <div className="alert alert-secondary mb-1">
                <div className="fs-3 text-capitalize">{item.task} </div>
                <div>{item.description}</div>
              </div>
            </div>
          </div>*/