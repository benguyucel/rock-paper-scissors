import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GameProviver } from './contexts/GameContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GameProviver>
    <App />
  </GameProviver>
);
