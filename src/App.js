import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import "./App.css";

function App() {
  const pid = process.env.REACT_APP_P_ID;
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID={pid}
        userName="Lica"
        userSecret="Password01!"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() =>
          new Audio(
            "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
          ).play()
        }
      />
    </div>
  );
}

export default App;
