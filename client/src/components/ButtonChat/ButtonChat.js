import "./buttonchat.scss";
import Messager from "../../assets/images/messager.png"

function ButtonChat({setPopupChat}) {
  return (
    <div className="buttonchat btn" onClick={()=>setPopupChat(prev =>!prev)} >
        <img src={Messager} alt="messager"/>
    </div>
  );
  }
  
  export default ButtonChat;