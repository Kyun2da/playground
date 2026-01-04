import { josa } from 'es-hangul';

import { Player } from '../types/game';

// UI color constants
const COLORS = {
  black: '#000',
  buttonHover: '#2980b9',
  buttonPrimary: '#3498db',
  textDefault: '#2c3e50',
  textMuted: '#666',
  winner: '#e74c3c',
} as const;

// Player display names
const PLAYER_NAMES: Record<Player, string> = {
  black: '흑돌',
  white: '백돌',
} as const;

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
    color: winner ? COLORS.winner : COLORS.textDefault,
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '15px',
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: COLORS.buttonPrimary,
    border: 'none',
    borderRadius: '8px',
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    padding: '12px 24px',
    transition: 'background-color 0.2s',
  };

  const getPlayerName = (player: Player): string => PLAYER_NAMES[player];

  const getPlayerColor = (player: Player): string =>
    player === 'black' ? COLORS.black : COLORS.textMuted;

  return (
    <div style={containerStyle}>
      {winner ? (
        <div style={statusStyle}>
          {josa(getPlayerName(winner), '이/가')} 승리했습니다!
        </div>
      ) : (
        <div style={statusStyle}>
          현재 차례:{' '}
          <span style={{ color: getPlayerColor(currentPlayer) }}>
            {getPlayerName(currentPlayer)}
          </span>
        </div>
      )}
      <button
        onClick={onReset}
        onMouseOut={(e) =>
          (e.currentTarget.style.backgroundColor = COLORS.buttonPrimary)
        }
        onMouseOver={(e) =>
          (e.currentTarget.style.backgroundColor = COLORS.buttonHover)
        }
        style={buttonStyle}
      >
        새 게임
      </button>
    </div>
  );
};
