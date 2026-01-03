import { Player } from '../types/game';

interface StoneProps {
  player: Player;
  isLastMove?: boolean;
}

export const Stone = ({ player, isLastMove }: StoneProps) => {
  const baseStyle: React.CSSProperties = {
    width: '85%',
    height: '85%',
    borderRadius: '50%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
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
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '20%',
            height: '20%',
            borderRadius: '50%',
            backgroundColor: player === 'black' ? '#ff6b6b' : '#e74c3c',
            zIndex: 1,
          }}
        />
      )}
    </>
  );
};
