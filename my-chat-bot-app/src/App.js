import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import './App.css';

const App = () => {
  const [messages, setMessages] = useState([]);
  const options = [
    "Заказать пиццу",
    "Установить будильник",
    "Вывести погоду"
  ];

  const handleUserMessage = (text) => {
    setMessages([...messages, { text, isUser: true }]);
    setTimeout(() => {
      const botResponse = getBotResponse(text);
      setMessages([...messages, { text: botResponse, isUser: false }]);
    }, 1000);
  };

  const getBotResponse = (userInput) => {
  
    if (userInput === "Заказать пиццу") {
      return "Хорошо, я закажу пиццу. \nЧто еще могу сделать?";
    } else if (userInput === "Установить будильник") {
      return "Будильник установлен. \nЧем еще помочь?";
    } else if (userInput === "Вывести погоду") {
      return "Погода сегодня солнечная. Что еще интересует?";
    } else {
      return "Извините, я не понял. Пожалуйста, выберите один из вариантов.";
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-widget">
        <div className="messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.isUser ? "user" : "bot"}`}
            >
              <div className='backmessage'>{message.text}</div> 
              {console.log(message.text)}
            </div>
          ))}
        </div>
        <div className="options">
          {options.map((option, index) => (
            <Button 
              key={index}
              onClick={() => handleUserMessage(option)}
             className='buttom-option'
            >
             {option}
            </Button>
          ))}
          <input
          className='input'
          type="text"
          placeholder="Введите текст..."
          ></input>
        </div>
      </div>
    </div>
  );
};

export default App;