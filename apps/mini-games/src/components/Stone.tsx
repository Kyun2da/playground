import { Player } from '../types/game';

interface StoneProps {
  isLastMove?: boolean;
  player: Player;
}

export const Stone = ({ isLastMove, player }: StoneProps) => {
  const baseStyle: React.CSSProperties = {
    borderRadius: '50%',
    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
    height: '85%',
    left: '50%',
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '85%',
  };

  const stoneStyle: React.CSSProperties =
    player === 'black'
      ? {
          ...baseStyle,
          background: 'radial-gradient(circle at 30% 30%, #555, #000)',
        }
      : {
          ...baseStyle,
          background: 'radial-gradient(circle at 30% 30%, #fff, #ccc)',
          border: '1px solid #999',
        };

  return (
    <>
      <div style={stoneStyle} />
      {isLastMove && (
        <div
          style={{
            backgroundColor: player === 'black' ? '#ff6b6b' : '#e74c3c',
            borderRadius: '50%',
            height: '20%',
            left: '50%',
            position: 'absolute',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '20%',
            zIndex: 1,
          }}
        />
      )}
    </>
  );
};
