import "./App.css";
import { Greeting } from "./Greeting";
import { PeopleList } from "./PeopleList";

function App() {
  const people = [
    { id: 1, name: "Ana", age: 25, hairColor: "blue" },
    { id: 2, name: "Luis", age: 30, hairColor: "red" },
    { id: 3, name: "Carlos", age: 28, hairColor: "green" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <p style={{color: 'red', fontSize: '96px'}}>Hello!</p>
        <Greeting userName="Manuel" numberOfMessages={5} />
        <PeopleList people={people} />
      </header>
    </div>
  );
}

export default App;
