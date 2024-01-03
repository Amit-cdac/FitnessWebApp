
import './general.css'
function NitinPage() {
  return (
    <>
    <style dangerouslySetInnerHTML={{__html: "\n    body {\n      font-family: Arial, sans-serif;\n      margin: 20px;\n    }\n\n    h1 {\n      color: #333;\n    }\n\n    p {\n      line-height: 1.5;\n    }\n\n    body {\n      font-family: Arial, sans-serif;\n      margin: 20px;\n    }\n\n    h1 {\n      color: #333;\n    }\n    .about-section {\n      background-color: white;\n      padding: 20px;\n      border-radius: 4px;\n      transition: box-shadow 0.3s ease, background-color 0.3s ease;\n    }\n    .about-section:hover {\n      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n      background-color: #eaeaea;\n    }\n    .team-container {\n      display: flex;\n      justify-content: center;\n      align-items: flex-start;\n      gap: 20px;\n    }\n\n    .team-member {\n      background-color: #f7f4f4;\n      padding: 20px;\n      border-radius: 4px;\n      flex: 1;\n      max-width: 300px;\n      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n      transition: transform 0.3s ease;\n    }\n    .mission-section {\n      background-color: #f1fdee;\n      padding: 20px;\n      border-radius: 4px;\n      transition: background-color 0.3s ease;\n    }\n    .mission-section:hover {\n      background-color: #d1f3dd;\n    }\n    .team-member:hover {\n      transform: translateY(-5px);\n    }\n\n    .team-member img {\n      width: 100%;\n      border-radius: 4px;\n    }\n\n    .team-member h3 {\n      margin-top: 10px;\n      color: #333;\n    }\n\n    .team-member p {\n      margin-top: 5px;\n      line-height: 1.5;\n    }\n    footer {\n      margin-top: 40px;\n      text-align: center;\n      color: #fffdfd;\n      font-weight: 00;\n      background-color: #201818;\n      padding: 20px 0;\n    }\n\n    .footer-content {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n\n.footer-links {\n  display: flex;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.footer-links li {\n  margin-right: 10px;\n}\n\n.footer-links li:last-child {\n  margin-right: 0;\n}\n.footer-links li a {\n      color: #777;\n      text-decoration: none;\n      transition: color 0.3s ease;\n    }\n    .footer-links li a:hover {\n      color: #333;\n    }\n    .footer-line {\n      position: relative;\n      height: 2px;\n      background-color: #777;\n      width: 100%;\n      overflow: hidden;\n    }\n\n    .footer-line::before {\n      content: \"\";\n      position: absolute;\n      top: 0;\n      left: -100%;\n      width: 100%;\n      height: 100%;\n      background-color: #f37a7a;\n      animation: moveLine 4s linear infinite;\n    }\n\n    @keyframes moveLine {\n      0% {\n        left: -100%;\n      }\n      100% {\n        left: 100%;\n      }\n    }\n    \n\n  " }} />
  
  <section>
    <div className="container  shadow shadow-lg p-5 justify-content-center align-items-center mb-5 mt-4" style={{height: 450, backgroundColor: '#bde0fe',color:'white'}} id="div1">
      <div className="jumbotron">
        <h1>contact us</h1>
        <p>Moving forward, we are driving a shift in how world-class engineering teams are not only formed but how they are managed and trained.</p>
        <p>feel free to contact us regarding any issue in test and any bugs!</p>
        <div className="container mt-2 ">
          <div className="text-center">
            <section>
              <div className="text-center " />
              <i className="fa fa-map-marker fa-2x" aria-hidden="true" />
              <h2>address</h2>
              <p>
              </p><p>C-DAC-Kharghar</p>
              <p>Near-Bharati-Vidyapeeth-
                Opposite-Kharghar-Railway-Station-</p>
              <p>Cbd-Belapur </p>
              <p />
            </section></div>
        </div></div></div></section>
  <div className="container">
    <div className="row justify-content-center " style={{height: 200}}>
      <div className=" col-sm-12 col-md-3 shadow p-3 border me-3 ms-3 align-items-center justify-content-center">
        <section>
          <div className="card-body text-center">
            <i className="fa fa-phone fa-2x" aria-hidden="true" />
            <h2>Phone</h2>
            <p>123-456-78901548</p>
          </div>
        </section>
      </div>
      <div className=" col-sm-12 col-md-3 shadow p-3 me-3 ms-3 ">
        <section>
          <div className="card-body text-center">
            <i className="fa fa-envelope fa-2x" aria-hidden="true" />
            <h2>E-mail</h2>
            <p>amitcdac10@gmail.com</p>
            <a href="mailto:amitcdac10@gmail.com" className="btn btn-primary"> send mail</a>
          </div>
        </section>
      </div>
    </div>
  </div>

  
{/*Section: Contact v.2*/}
<section className="mb-4">
  <div className="container">
  {/*Section heading*/}
  <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
  {/*Section description*/}
  <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
    a matter of hours to help you.</p>
  <div className="row">
    {/*Grid column*/}
    <div className="col-md-9 mb-md-0 mb-5">
      <form id="contact-form" name="contact-form" action="mail.php" method="POST">
        {/*Grid row*/}
        <div className="row">
          {/*Grid column*/}
          <div className="col-md-6">
            <div className="md-form mb-0">
              <input type="text" id="name" name="name" className="form-control" />
              <label htmlFor="name" className>Your name</label>
            </div>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-md-6">
            <div className="md-form mb-0">
              <input type="text" id="email" name="email" className="form-control" />
              <label htmlFor="email" className>Your email</label>
            </div>
          </div>
          {/*Grid column*/}
        </div>
        {/*Grid row*/}
        {/*Grid row*/}
        <div className="row">
          <div className="col-md-12">
            <div className="md-form mb-0">
              <input type="text" id="subject" name="subject" className="form-control" />
              <label htmlFor="subject" className>Subject</label>
            </div>
          </div>
        </div>
        {/*Grid row*/}
        {/*Grid row*/}
        <div className="row">
          {/*Grid column*/}
          <div className="col-md-12">
            <div className="md-form">
              <textarea type="text" id="message" name="message" rows={2} className="form-control md-textarea" defaultValue={""} />
              <label htmlFor="message">Your message</label>
            </div>
          </div>
        </div>
        {/*Grid row*/}
      </form>
      <div className="text-center text-md-left">
        <a className="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
      </div>
      <div className="status" />
    </div>
    {/*Grid column*/}
    {/*Grid column*/}
    <div className="col-md-3 text-center">
      <ul className="list-unstyled mb-0">
        <li><i className="fas fa-map-marker-alt fa-2x" />
          <p>CDAC</p>
        </li>
        <li><i className="fas fa-phone mt-4 fa-2x" />
          <p>+ 01 234 567 89</p>
        </li>
        <li><i className="fas fa-envelope mt-4 fa-2x" />
          <p>cdac@cdac.com</p>
        </li>
      </ul>
    </div>
    {/*Grid column*/}
  </div>
  </div>
</section>
{/*Section: Contact v.2*/}

<footer>
    <div className="footer-line">
    </div>
    <p>© quizzy. All rights reserved.</p>
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

export default NitinPage;
