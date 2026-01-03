import { Board as BoardType, BOARD_SIZE } from '../types/game';
import { Stone } from './Stone';

interface BoardProps {
  board: BoardType;
  lastMove: { row: number; col: number } | null;
  onCellClick: (row: number, col: number) => void;
  disabled: boolean;
}

export const Board = ({ board, lastMove, onCellClick, disabled }: BoardProps) => {
  const cellSize = 36;
  const boardPadding = cellSize / 2;
  const boardSize = cellSize * (BOARD_SIZE - 1) + boardPadding * 2;

  const boardStyle: React.CSSProperties = {
    position: 'relative',
    width: `${boardSize}px`,
    height: `${boardSize}px`,
    backgroundColor: '#dcb35c',
    backgroundImage:
      'linear-gradient(135deg, #e8c97a 0%, #dcb35c 50%, #c9a227 100%)',
    borderRadius: '4px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
  };

  const gridStyle: React.CSSProperties = {
    position: 'absolute',
    top: `${boardPadding}px`,
    left: `${boardPadding}px`,
    width: `${cellSize * (BOARD_SIZE - 1)}px`,
    height: `${cellSize * (BOARD_SIZE - 1)}px`,
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
            position: 'absolute',
            top: `${i * cellSize}px`,
            left: 0,
            width: '100%',
            height: '1px',
            backgroundColor: '#8b7355',
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
            position: 'absolute',
            top: 0,
            left: `${i * cellSize}px`,
            width: '1px',
            height: '100%',
            backgroundColor: '#8b7355',
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

    starPoints.forEach(([row, col], index) => {
      lines.push(
        <div
          key={`star-${index}`}
          style={{
            position: 'absolute',
            top: `${row * cellSize - 4}px`,
            left: `${col * cellSize - 4}px`,
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#8b7355',
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
            style={{
              position: 'absolute',
              top: `${row * cellSize - cellSize / 2}px`,
              left: `${col * cellSize - cellSize / 2}px`,
              width: `${cellSize}px`,
              height: `${cellSize}px`,
              cursor: disabled || cell ? 'default' : 'pointer',
            }}
            onClick={() => !disabled && onCellClick(row, col)}
          >
            {cell && <Stone player={cell} isLastMove={!!isLastMove} />}
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
