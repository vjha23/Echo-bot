import React from "react";

function Chatbox({ messages, loader, empty }) {
  const renderText = () => {
    return messages.map((text,index) => {
      return (
        <div
          key={index}
          className={!text.isBot ? "sentMessageBox" : "receivedMessageBox"}
        >
          <ul className="sentMessage" key={index}>
            <li key={index}>{text.textMessage}</li>
          </ul>
        </div>
      );
    });
  };

  return (
    <div className="MainBody">
      <div className="front-screen">
        <h3 className="uob-amex">Hi,there im your virtual bot</h3>
        {empty ? "empty field" : null}
      </div>
      {renderText()}
      {loader?<b style={{ fontSize: "28px" }}>....</b>:null}
    </div>
  );
}

export default Chatbox;
