import './PopupChatBot.scss';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import logo from '../../assets/logo/logo_moto.jpg'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { FiSend } from 'react-icons/fi'


function PopupChatBot({setPopupChat}) {
    const [chat, setChat] = useState([]);
    const [chatValue, setChatValue] = useState('');
    const [botTyping,setbotTyping] = useState(false);


    const rasaAPI = async function handleClick(name, msg) {

        await fetch('http://localhost:5005/webhooks/rest/webhook', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'charset':'UTF-8',
            },
            credentials: "same-origin",
            body: JSON.stringify({ "sender": name, sender_id : name , "message": msg }),
        })
        .then(response => response.json())
        .then((response) => {
            if(response){
                const temp = response[0];
                const recipient_id = temp["recipient_id"];
                const recipient_msg = temp["text"];        

                const response_temp = {sender: "bot",recipient_id : recipient_id,msg: recipient_msg};
                setbotTyping(false);
                
                setChat(chat => [...chat, response_temp]);
               // scrollBottom();
            }
        }) .catch(err => console.log('err: ' + err))
    }

    const handleChatValue =(e)=>{
        setChatValue(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const name = "tri" + Math.random(0, 10);
        const request_temp = {sender : "user", sender_id : name , msg : chatValue};
        
        if(chatValue !== ""){
            setChat(chat => [...chat, request_temp]);
            setbotTyping(true);
            setChatValue('');
            rasaAPI(name, chatValue);
        }
        else{
            window.alert("Please enter valid message");
        }
    }

    const handlePressEnter = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
            setChatValue('');
        }
    }

    useEffect(()=>{
   
        console.log("called");
        const objDiv = document.getElementById('messageAre');
        objDiv.scrollTop = objDiv.scrollHeight;

    },[chat])

    return (
        <div className="box___chat">
                <div className="box__chat-title">
                    <img src={logo} alt="logo" />
                    <div>
                        <p>Motor Viet Nam</p>
                        <span>Xin chào bạn</span>
                    </div>
                    <AiOutlineCloseCircle className="close" onClick={()=>setPopupChat(false)}/>
                </div>
                <div className="box__chat-content">
                    <div id="messageAre" className="box__chat-content-message">
                        <div className="box__chat-content-recieved">
                            <div className="box__chat-bot">
                                <img src={logo} alt="" />
                                <span>Motor VietNam</span>
                            </div>
                            <p>Chào mừng anh/chị đến với Motor Việt Nam! Anh/chị đang cần hỗ trợ thông tin gì ạ ?</p>
                        </div>
                        {chat && chat.map((item, index) =>{
                            if(item.sender === 'user'){ return (
                                <div key={index} className="box__chat-content-send">
                                    <p>{item.msg}</p>
                                </div>
                            ) }
                            else return (
                                <div key={index} className="box__chat-content-recieved">
                                    <div className="box__chat-bot">
                                        <img src={logo} alt="" />
                                        <span>Motor VietNam</span>
                                    </div>
                                    <p>{item.msg}</p>
                                </div>
                            )
                        })}
                        
                        {botTyping && 
                            <div className="box__chat-content-recieved">
                                <p>Bot typing ...</p>
                            </div>}
                    </div>
                    <div className="box__chat-content-input">
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="text" 
                                className="box__chat-content-input" 
                                placeholder="Nhap noi dung tin nhan..."
                                value={chatValue}
                                onChange={(e)=>handleChatValue(e)}
                                // onKeyDown={chatValue.match(/[^\s]/g) != null ? e => handlePressEnter(e) : null}
                            />
                            <FiSend className="chat_send-icon" onClick={handleSubmit}/>
                        </form>
                    </div>
                </div>
            </div>
    );
}

export default PopupChatBot;