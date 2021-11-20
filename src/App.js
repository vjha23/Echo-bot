import './App.css';
import { DirectLine } from "botframework-directlinejs";
import * as React from "react";
import Chatbox from './Chatbox'
import ChatInput from './ChatInput'

const client = new DirectLine({
  secret: "fXrDZYNJ6h0.3RGuSo9_7JXhRFPMDCuqCSh97b_vjFq3KeKRw_60pCM",
});

function App() {
  const [inputValue, setInputValue] = React.useState("");
  const [messages, setMessages] = React.useState([]);
  const [loader, setLoader] = React.useState(false);
  const [empty, setEmpty] = React.useState(false);

  const onResponse = React.useCallback(
    (activity) => {
      let newMsg = activity.text;
      setLoader(false);
      console.log(activity);
      if (activity.inputHint === "acceptingInput") {
        setMessages([...messages, { textMessage: newMsg, isBot: true }]);
      }
    },
    [messages]
  );

  React.useEffect(()=>{
    // console.log(messages,'message')
  },[messages])

    // connecetd to bot
  React.useEffect(() => {
    client.activity$.subscribe((activity) => onResponse(activity));
  }, [onResponse]);


  const sendRequest = () => {
    console.log("request sent");
    setLoader(true);
    client
      ?.postActivity({
        from: {
          id: "Celebaltech",
          name: "Software Company",
          avatarUrl:
            "https://demos.telerik.com/kendo-ui/content/chat/VacationBot.png",
        },
        type: "message",
        text: inputValue,
      })
      ?.subscribe(
        (id) => console.log("Posted activity, assigned ID ", id),
        (error) => console.log("Error posting activity", error)
      );
  };

  const send = (e) => {
    e.preventDefault();

    if (inputValue) {
      sendRequest();
      setMessages([...messages, { textMessage: inputValue, isBot: false }]);
      setEmpty(false);
      setInputValue("");
    } else {
      setEmpty(true);
    }
  };
  const handleChange = (e) => {
    if (e.target.value.length > 0) {
      setEmpty(false);
    }
    setInputValue(e.target.value);
  };


  return (
    <div className="App">
      <Chatbox messages={messages} loader={loader} empty={empty}/>
      <ChatInput
          message={inputValue}
          handleChange={handleChange}
          handleClick={send}
        />
    </div>
  );
}

export default App;
