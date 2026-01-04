import { BOARD_SIZE, Board as BoardType } from '../types/game';
import { Stone } from './Stone';

// Board styling constants
const CELL_SIZE_PX = 36;
const STAR_POINT_SIZE_PX = 8;
const BOARD_BORDER_RADIUS = '4px';

// Color constants for wooden board theme
const BOARD_COLORS = {
  background: '#dcb35c',
  gridLine: '#8b7355',
  highlight: '#e8c97a',
  shadow: '#c9a227',
} as const;

// Star points (화점) positions on a 15x15 board
const STAR_POINTS: [number, number][] = [
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

interface BoardProps {
  board: BoardType;
  disabled: boolean;
  lastMove: null | { col: number; row: number; };
  onCellClick: (row: number, col: number) => void;
}

export const Board = ({ board, disabled, lastMove, onCellClick }: BoardProps) => {
  const boardPadding = CELL_SIZE_PX / 2;
  const boardSize = CELL_SIZE_PX * (BOARD_SIZE - 1) + boardPadding * 2;

  const boardStyle: React.CSSProperties = {
    backgroundColor: BOARD_COLORS.background,
    backgroundImage: `linear-gradient(135deg, ${BOARD_COLORS.highlight} 0%, ${BOARD_COLORS.background} 50%, ${BOARD_COLORS.shadow} 100%)`,
    borderRadius: BOARD_BORDER_RADIUS,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
    height: `${boardSize}px`,
    position: 'relative',
    width: `${boardSize}px`,
  };

  const gridStyle: React.CSSProperties = {
    height: `${CELL_SIZE_PX * (BOARD_SIZE - 1)}px`,
    left: `${boardPadding}px`,
    position: 'absolute',
    top: `${boardPadding}px`,
    width: `${CELL_SIZE_PX * (BOARD_SIZE - 1)}px`,
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
            backgroundColor: BOARD_COLORS.gridLine,
            height: '1px',
            left: 0,
            position: 'absolute',
            top: `${i * CELL_SIZE_PX}px`,
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
            backgroundColor: BOARD_COLORS.gridLine,
            height: '100%',
            left: `${i * CELL_SIZE_PX}px`,
            position: 'absolute',
            top: 0,
            width: '1px',
          }}
        />
      );
    }

    // 화점 (star points)
    const starPointOffset = STAR_POINT_SIZE_PX / 2;
    for (const [row, col] of STAR_POINTS) {
      lines.push(
        <div
          key={`star-${row}-${col}`}
          style={{
            backgroundColor: BOARD_COLORS.gridLine,
            borderRadius: '50%',
            height: `${STAR_POINT_SIZE_PX}px`,
            left: `${col * CELL_SIZE_PX - starPointOffset}px`,
            position: 'absolute',
            top: `${row * CELL_SIZE_PX - starPointOffset}px`,
            width: `${STAR_POINT_SIZE_PX}px`,
          }}
        />
      );
    }

    return lines;
  };

  // 클릭 가능한 셀 생성
  const renderCells = () => {
    const cells = [];
    const cellOffset = CELL_SIZE_PX / 2;

    for (let row = 0; row < BOARD_SIZE; row++) {
      for (let col = 0; col < BOARD_SIZE; col++) {
        const cell = board[row]?.[col];
        const isLastMove =
          lastMove && lastMove.row === row && lastMove.col === col;
        const isClickable = !disabled && !cell;

        cells.push(
          <div
            key={`${row}-${col}`}
            onClick={() => isClickable && onCellClick(row, col)}
            style={{
              cursor: isClickable ? 'pointer' : 'default',
              height: `${CELL_SIZE_PX}px`,
              left: `${col * CELL_SIZE_PX - cellOffset}px`,
              position: 'absolute',
              top: `${row * CELL_SIZE_PX - cellOffset}px`,
              width: `${CELL_SIZE_PX}px`,
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
