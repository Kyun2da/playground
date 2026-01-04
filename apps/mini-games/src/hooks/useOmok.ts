import { cloneDeep } from 'es-toolkit';
import { useCallback, useState } from 'react';

import { Board, BOARD_SIZE, GameState, Player } from '../types/game';

const WIN_COUNT = 5;
const MAX_SEARCH_DISTANCE = WIN_COUNT - 1;

const createEmptyBoard = (): Board => {
  return Array(BOARD_SIZE)
    .fill(null)
    .map(() => Array(BOARD_SIZE).fill(null));
};

const isWithinBoard = (row: number, col: number): boolean => {
  return row >= 0 && row < BOARD_SIZE && col >= 0 && col < BOARD_SIZE;
};

const checkWinner = (
  board: Board,
  row: number,
  col: number,
  player: Player
): boolean => {
  const directions: [number, number][] = [
    [1, 0], // 가로
    [0, 1], // 세로
    [1, 1], // 대각선 \
    [1, -1], // 대각선 /
  ];

  for (const [dx, dy] of directions) {
    let count = 1;

    // 정방향 탐색
    for (let i = 1; i <= MAX_SEARCH_DISTANCE; i++) {
      const newRow = row + dy * i;
      const newCol = col + dx * i;
      const isValidPosition = isWithinBoard(newRow, newCol);
      const isSamePlayer = board[newRow]?.[newCol] === player;

      if (isValidPosition && isSamePlayer) {
        count++;
      } else {
        break;
      }
    }

    // 역방향 탐색
    for (let i = 1; i <= MAX_SEARCH_DISTANCE; i++) {
      const newRow = row - dy * i;
      const newCol = col - dx * i;
      const isValidPosition = isWithinBoard(newRow, newCol);
      const isSamePlayer = board[newRow]?.[newCol] === player;

      if (isValidPosition && isSamePlayer) {
        count++;
      } else {
        break;
      }
    }

    if (count >= WIN_COUNT) {
      return true;
    }
  }

  return false;
};

export const useOmok = () => {
  const [gameState, setGameState] = useState<GameState>(() => ({
    board: createEmptyBoard(),
    currentPlayer: 'black',
    lastMove: null,
    winner: null,
  }));

  const placeStone = useCallback(
    (row: number, col: number) => {
      const currentCell = gameState.board[row]?.[col];
      if (gameState.winner || currentCell !== null) {
        return;
      }

      const newBoard = cloneDeep(gameState.board);
      const targetRow = newBoard[row];
      if (targetRow) {
        targetRow[col] = gameState.currentPlayer;
      }

      const isWinner = checkWinner(
        newBoard,
        row,
        col,
        gameState.currentPlayer
      );

      const getNextPlayer = (): Player => {
        if (isWinner) return gameState.currentPlayer;
        return gameState.currentPlayer === 'black' ? 'white' : 'black';
      };

      setGameState({
        board: newBoard,
        currentPlayer: getNextPlayer(),
        lastMove: { col, row },
        winner: isWinner ? gameState.currentPlayer : null,
      });
    },
    [gameState]
  );

  const resetGame = useCallback(() => {
    setGameState({
      board: createEmptyBoard(),
      currentPlayer: 'black',
      lastMove: null,
      winner: null,
    });
  }, []);

  return {
    board: gameState.board,
    currentPlayer: gameState.currentPlayer,
    lastMove: gameState.lastMove,
    placeStone,
    resetGame,
    winner: gameState.winner,
  };
};
