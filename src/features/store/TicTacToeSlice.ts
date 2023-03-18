import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { GamePiece } from "../TicTacToe.types";

const INITIAL_BOARD_STATE = [
  [GamePiece.EMPTY, GamePiece.EMPTY, GamePiece.EMPTY],
  [GamePiece.EMPTY, GamePiece.EMPTY, GamePiece.EMPTY],
  [GamePiece.EMPTY, GamePiece.EMPTY, GamePiece.EMPTY],
];

interface TicTacToeState {
  board: GamePiece[][];
  turn: GamePiece;
  winner: GamePiece | null;
}

const initialState: TicTacToeState = {
  board: INITIAL_BOARD_STATE,
  turn: GamePiece.CIRCLE,
  winner: null,
};

export const TicTacToeSlice = createSlice({
  name: "tictactoe",
  initialState,
  reducers: {
    playTurn: (state, action: { payload: { row: number; column: number } }) => {
      if (
        state.board[action.payload.row][action.payload.column] !==
          GamePiece.EMPTY ||
        state.winner
      ) {
        return;
      }

      const newState = [...state.board];
      newState[action.payload.row][action.payload.column] = state.turn;
      state.board = newState;

      if (state.turn === GamePiece.CIRCLE) {
        state.turn = GamePiece.CROSS;
      } else if (state.turn === GamePiece.CROSS) {
        state.turn = GamePiece.CIRCLE;
      }

      for (let i = 0; i < 3; i++) {
        if (
          state.board[i][0] === state.board[i][1] &&
          state.board[i][1] === state.board[i][2] &&
          state.board[i][0] !== GamePiece.EMPTY
        ) {
          state.winner = state.board[i][0];
        }
      }

      for (let i = 0; i < 3; i++) {
        if (
          state.board[0][i] === state.board[1][i] &&
          state.board[1][i] === state.board[2][i] &&
          state.board[0][i] !== GamePiece.EMPTY
        ) {
          state.winner = state.board[0][i];
        }
      }

      if (
        state.board[0][0] === state.board[1][1] &&
        state.board[1][1] === state.board[2][2] &&
        state.board[0][0] !== GamePiece.EMPTY
      ) {
        state.winner = state.board[0][0];
      }
      if (
        state.board[0][2] === state.board[1][1] &&
        state.board[1][1] === state.board[2][0] &&
        state.board[0][2] !== GamePiece.EMPTY
      ) {
        state.winner = state.board[0][2];
      }
    },
    resetBoard: (state) => {
      state.board = INITIAL_BOARD_STATE;
      state.winner = null;
    },
  },
});

export const { playTurn, resetBoard } = TicTacToeSlice.actions;

export const selectBoard = (state: RootState) => state.ticTacToe.board;
export const selectTurn = (state: RootState) => state.ticTacToe.turn;
export const selectWinner = (state: RootState) => state.ticTacToe.winner;

export default TicTacToeSlice.reducer;
