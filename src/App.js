import './App.css';
import Header from './components/Header'
import Main from './components/Main';
import {  useGameContext } from './contexts/GameContext';
import GameResult from './components/GameResult';

function App() {
  const {isStartGame} = useGameContext()
  return (
    <div className="App">
        <Header />
        {!isStartGame ?<Main />:<GameResult/>}

    </div>
  );
}

export default App;
