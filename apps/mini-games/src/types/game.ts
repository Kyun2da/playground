export type Board = Cell[][];
export type Cell = null | Player;
export interface GameState {
  board: Board;
  currentPlayer: Player;
  lastMove: null | { col: number; row: number; };
  winner: null | Player;
}

export type Player = 'black' | 'white';

export const BOARD_SIZE = 15;
