import React from "react";
import players from "./players";
import Player from './Player';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>My Favorite Players</h1>
    <div className="player-list">
      {players.map((player, index) => (
        <Player key={index} player={player} />
      ))}
    </div>
  </div>
);
}

export default App;
