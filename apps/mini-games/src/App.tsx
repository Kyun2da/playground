import { useOmok } from './hooks/useOmok';
import { Board } from './components/Board';
import { GameInfo } from './components/GameInfo';

function App() {
  const { board, currentPlayer, winner, lastMove, placeStone, resetGame } =
    useOmok();

  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: '20px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '30px',
    fontFamily: "'Noto Sans KR', sans-serif",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>오목</h1>
      <GameInfo
        currentPlayer={currentPlayer}
        winner={winner}
        onReset={resetGame}
      />
      <Board
        board={board}
        lastMove={lastMove}
        onCellClick={placeStone}
        disabled={!!winner}
      />
    </div>
  );
}

export default App;
