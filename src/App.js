import { ChatEngine } from "react-chat-engine";
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
      />
    </div>
  );
}

export default App;
