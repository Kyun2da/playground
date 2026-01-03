import { Player } from '../types/game';

interface GameInfoProps {
  currentPlayer: Player;
  winner: Player | null;
  onReset: () => void;
}

export const GameInfo = ({ currentPlayer, winner, onReset }: GameInfoProps) => {
  const containerStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '20px',
    fontFamily: "'Noto Sans KR', sans-serif",
  };

  const statusStyle: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: winner ? '#e74c3c' : '#2c3e50',
  };

  const buttonStyle: React.CSSProperties = {
    padding: '12px 24px',
    fontSize: '16px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.2s',
  };

  const playerName = (player: Player) =>
    player === 'black' ? '흑돌' : '백돌';

  return (
    <div style={containerStyle}>
      {winner ? (
        <div style={statusStyle}>{playerName(winner)} 승리!</div>
      ) : (
        <div style={statusStyle}>
          현재 차례:{' '}
          <span style={{ color: currentPlayer === 'black' ? '#000' : '#666' }}>
            {playerName(currentPlayer)}
          </span>
        </div>
      )}
      <button
        style={buttonStyle}
        onClick={onReset}
        onMouseOver={(e) =>
          (e.currentTarget.style.backgroundColor = '#2980b9')
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.backgroundColor = '#3498db')
        }
      >
        새 게임
      </button>
    </div>
  );
};
