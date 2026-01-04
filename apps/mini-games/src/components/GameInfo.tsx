import { josa } from 'es-hangul';

import { Player } from '../types/game';

interface GameInfoProps {
  currentPlayer: Player;
  onReset: () => void;
  winner: null | Player;
}

export const GameInfo = ({ currentPlayer, onReset, winner }: GameInfoProps) => {
  const containerStyle: React.CSSProperties = {
    fontFamily: "'Noto Sans KR', sans-serif",
    marginBottom: '20px',
    textAlign: 'center',
  };

  const statusStyle: React.CSSProperties = {
    color: winner ? '#e74c3c' : '#2c3e50',
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '15px',
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: '#3498db',
    border: 'none',
    borderRadius: '8px',
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    padding: '12px 24px',
    transition: 'background-color 0.2s',
  };

  const playerName = (player: Player) =>
    player === 'black' ? '흑돌' : '백돌';

  return (
    <div style={containerStyle}>
      {winner ? (
        <div style={statusStyle}>
          {josa(playerName(winner), '이/가')} 승리했습니다!
        </div>
      ) : (
        <div style={statusStyle}>
          현재 차례:{' '}
          <span style={{ color: currentPlayer === 'black' ? '#000' : '#666' }}>
            {playerName(currentPlayer)}
          </span>
        </div>
      )}
      <button
        onClick={onReset}
        onMouseOut={(e) =>
          (e.currentTarget.style.backgroundColor = '#3498db')
        }
        onMouseOver={(e) =>
          (e.currentTarget.style.backgroundColor = '#2980b9')
        }
        style={buttonStyle}
      >
        새 게임
      </button>
    </div>
  );
};
