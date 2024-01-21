import React, { useEffect, useState } from 'react';

type Card = {
  top: number;
  bottom: number;
}

type Game = {
  hand1: Array<Card>;
  hand2: Array<Card>;
}

function App() {
  const [game, setGame] = useState<Game>();
  useEffect(() => {
    fetch('/game')
      .then((res) => res.json())
      .then((data) => setGame(data))
      .catch((err) => console.log(err));
  }, []);

  if(game) {
    console.log(game)

    return (
      <div>
        {game.hand1.toString()}
        {game.hand2.toString()}
      </div>
    );

  } else {
    return (
      <div>
        {"Game not loaded :("}
      </div>
    );
  }

}

export default App;
