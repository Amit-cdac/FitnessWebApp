import { useNavigate } from "react-router-dom";

import './general.css'

function MyNavigationLinksUsingButton() {
  const navigate = useNavigate();

  let goToHomeAction = () => {
    navigate("/home");
  };
  let goToTodoAction = () => {
    navigate("/todo");
  };
  let goToRegistrationAction = () => {
    navigate("/registration");
  };
  let goToContact = () => {
    navigate("/contact");
  };
  return (
    <div>
      <input type="button" value="Home" onClick={goToHomeAction} />
      <input type="button" value="Todo" onClick={goToTodoAction} />
      <input type="button" value="contact" onClick={goToContact} />
      
      <input
        type="button"
        value="Registartion"
        onClick={goToRegistrationAction}
      />
    </div>
  );
}

export default MyNavigationLinksUsingButton;
