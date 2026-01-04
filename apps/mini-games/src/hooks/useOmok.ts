import { useCallback, useState } from 'react';

import { Board, BOARD_SIZE, GameState, Player } from '../types/game';

const createEmptyBoard = (): Board => {
  return Array(BOARD_SIZE)
    .fill(null)
    .map(() => Array(BOARD_SIZE).fill(null));
};

const checkWinner = (
  board: Board,
  row: number,
  col: number,
  player: Player
): boolean => {
  const directions = [
    [1, 0], // 가로
    [0, 1], // 세로
    [1, 1], // 대각선 \
    [1, -1], // 대각선 /
  ];

  for (const [dx, dy] of directions) {
    let count = 1;

    // 정방향 탐색
    for (let i = 1; i < 5; i++) {
      const newRow = row + dy * i;
      const newCol = col + dx * i;
      if (
        newRow >= 0 &&
        newRow < BOARD_SIZE &&
        newCol >= 0 &&
        newCol < BOARD_SIZE &&
        board[newRow][newCol] === player
      ) {
        count++;
      } else {
        break;
      }
    }

    // 역방향 탐색
    for (let i = 1; i < 5; i++) {
      const newRow = row - dy * i;
      const newCol = col - dx * i;
      if (
        newRow >= 0 &&
        newRow < BOARD_SIZE &&
        newCol >= 0 &&
        newCol < BOARD_SIZE &&
        board[newRow][newCol] === player
      ) {
        count++;
      } else {
        break;
      }
    }

    if (count >= 5) {
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
      if (gameState.winner || gameState.board[row][col] !== null) {
        return;
      }

      const newBoard = gameState.board.map((r) => [...r]);
      newBoard[row][col] = gameState.currentPlayer;

      const isWinner = checkWinner(
        newBoard,
        row,
        col,
        gameState.currentPlayer
      );

      setGameState({
        board: newBoard,
        currentPlayer: isWinner
          ? gameState.currentPlayer
          : gameState.currentPlayer === 'black'
            ? 'white'
            : 'black',
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
