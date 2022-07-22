import "./styles/global.css";
import "./styles/home.scss";
import Header from './components/Header/Header';
import { Routes, Route } from "react-router-dom";
import Home from './pages';
import ButtonChat from './components/ButtonChat/ButtonChat';
import Footer from './components/Footer/Footer';
import PopupChatBot from './components/PopupChatBot/PopupChatBot';
import { useState } from 'react';
function App() {
  const [popupChat, setPopupChat] = useState(false)

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ButtonChat setPopupChat={setPopupChat}/>
      {popupChat && <PopupChatBot setPopupChat={setPopupChat}/>}
      <Footer />
    </div>
  );
}

export default App;
