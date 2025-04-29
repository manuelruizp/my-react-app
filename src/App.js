import "./App.css";
import { useState } from "react";
import { CounterButton } from "./CounterButton";
import { CongratulationsMessage } from "./CongratulationsMessage";

function App() {
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [hideMessage, setHideMessage] = useState(false);
  const increment = () => setNumberOfClicks(numberOfClicks + 1);

  return (
    <div className="App">
      <header className="App-header">
        {hideMessage ? null : (
          <CongratulationsMessage
            numberOfClicks={numberOfClicks}
            threshold={10}
            onHide={() => setHideMessage(true)}
          />
        )}

        <CounterButton
          onIncrement={increment}
          numberOfClicks={numberOfClicks}
        />
      </header>
    </div>
  );
}

export default App;
