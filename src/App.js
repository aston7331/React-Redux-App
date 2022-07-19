import './App.css';
import Coin from './features/coin/Coin';
import Counter from './features/counter/Counter';
// import Counter from './features/counter/Counter1';

function App() {
  return (
    <div className="App">
      {/* <Counter1 /> */}
      <Counter />
      <Coin />
    </div>
  );
}

export default App;
