export type Player = 'black' | 'white';
export type Cell = Player | null;
export type Board = Cell[][];

export interface GameState {
  board: Board;
  currentPlayer: Player;
  winner: Player | null;
  lastMove: { row: number; col: number } | null;
}

export const BOARD_SIZE = 15;
