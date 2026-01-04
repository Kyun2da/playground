import { BOARD_SIZE, Board as BoardType } from '../types/game';
import { Stone } from './Stone';

interface BoardProps {
  board: BoardType;
  disabled: boolean;
  lastMove: null | { col: number; row: number; };
  onCellClick: (row: number, col: number) => void;
}

export const Board = ({ board, disabled, lastMove, onCellClick }: BoardProps) => {
  const cellSize = 36;
  const boardPadding = cellSize / 2;
  const boardSize = cellSize * (BOARD_SIZE - 1) + boardPadding * 2;

  const boardStyle: React.CSSProperties = {
    backgroundColor: '#dcb35c',
    backgroundImage:
      'linear-gradient(135deg, #e8c97a 0%, #dcb35c 50%, #c9a227 100%)',
    borderRadius: '4px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
    height: `${boardSize}px`,
    position: 'relative',
    width: `${boardSize}px`,
  };

  const gridStyle: React.CSSProperties = {
    height: `${cellSize * (BOARD_SIZE - 1)}px`,
    left: `${boardPadding}px`,
    position: 'absolute',
    top: `${boardPadding}px`,
    width: `${cellSize * (BOARD_SIZE - 1)}px`,
  };

  // 격자선 생성
  const renderGridLines = () => {
    const lines = [];

    // 가로선
    for (let i = 0; i < BOARD_SIZE; i++) {
      lines.push(
        <div
          key={`h-${i}`}
          style={{
            backgroundColor: '#8b7355',
            height: '1px',
            left: 0,
            position: 'absolute',
            top: `${i * cellSize}px`,
            width: '100%',
          }}
        />
      );
    }

    // 세로선
    for (let i = 0; i < BOARD_SIZE; i++) {
      lines.push(
        <div
          key={`v-${i}`}
          style={{
            backgroundColor: '#8b7355',
            height: '100%',
            left: `${i * cellSize}px`,
            position: 'absolute',
            top: 0,
            width: '1px',
          }}
        />
      );
    }

    // 화점 (star points)
    const starPoints = [
      [3, 3],
      [3, 7],
      [3, 11],
      [7, 3],
      [7, 7],
      [7, 11],
      [11, 3],
      [11, 7],
      [11, 11],
    ];

    starPoints.forEach(([row, col]) => {
      lines.push(
        <div
          key={`star-${row}-${col}`}
          style={{
            backgroundColor: '#8b7355',
            borderRadius: '50%',
            height: '8px',
            left: `${col * cellSize - 4}px`,
            position: 'absolute',
            top: `${row * cellSize - 4}px`,
            width: '8px',
          }}
        />
      );
    });

    return lines;
  };

  // 클릭 가능한 셀 생성
  const renderCells = () => {
    const cells = [];

    for (let row = 0; row < BOARD_SIZE; row++) {
      for (let col = 0; col < BOARD_SIZE; col++) {
        const cell = board[row][col];
        const isLastMove =
          lastMove && lastMove.row === row && lastMove.col === col;

        cells.push(
          <div
            key={`${row}-${col}`}
            onClick={() => !disabled && onCellClick(row, col)}
            style={{
              cursor: disabled || cell ? 'default' : 'pointer',
              height: `${cellSize}px`,
              left: `${col * cellSize - cellSize / 2}px`,
              position: 'absolute',
              top: `${row * cellSize - cellSize / 2}px`,
              width: `${cellSize}px`,
            }}
          >
            {cell && <Stone isLastMove={!!isLastMove} player={cell} />}
          </div>
        );
      }
    }

    return cells;
  };

  return (
    <div style={boardStyle}>
      <div style={gridStyle}>
        {renderGridLines()}
        {renderCells()}
      </div>
    </div>
  );
};
