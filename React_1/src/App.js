import Todo from './components/Todo';
import "./App.css";
//import "./index.scss";


function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn React' />
      <Todo text='Practice React' />
      <Todo text='Oh yes' />
    </div>
  );
}

export default App;
