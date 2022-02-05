import React from 'react';
import Score from 'components/organisms/Score';
import Board from 'components/organisms/Board';

const App: React.FC = () => {
  return (
    <div className="App">
      <div>
        <div className="text-3xl font-bold underline text-yellow-500">
          Hello world!
        </div>
        <Score />
        <Board />
      </div>
    </div>
  );
};

export default App;
