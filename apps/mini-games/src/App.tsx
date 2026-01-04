import { Board } from './components/Board';
import { GameInfo } from './components/GameInfo';
import { useOmok } from './hooks/useOmok';

function App() {
  const { board, currentPlayer, lastMove, placeStone, resetGame, winner } =
    useOmok();

  const containerStyle: React.CSSProperties = {
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '20px',
  };

  const titleStyle: React.CSSProperties = {
    color: '#2c3e50',
    fontFamily: "'Noto Sans KR', sans-serif",
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '30px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>오목</h1>
      <GameInfo
        currentPlayer={currentPlayer}
        onReset={resetGame}
        winner={winner}
      />
      <Board
        board={board}
        disabled={!!winner}
        lastMove={lastMove}
        onCellClick={placeStone}
      />
    </div>
  );
}

export default App;
