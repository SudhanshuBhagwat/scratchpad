import { View } from "react-native";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { playTurn, selectBoard } from "../store/TicTacToeSlice";
import Cell from "./Cell";

export default function Board() {
  const board = useAppSelector(selectBoard);
  const dispatch = useAppDispatch();

  function handleTurn(row: number, column: number) {
    dispatch(
      playTurn({
        row,
        column,
      })
    );
  }

  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      {board.map((column, colIdx) => (
        <View
          key={`row-${colIdx}`}
          style={{
            flexDirection: "column",
          }}
        >
          {column.map((cell, rowIdx) => (
            <Cell
              key={`column-${rowIdx}`}
              cellPiece={board[rowIdx][colIdx]}
              handleChange={handleTurn}
              row={rowIdx}
              column={colIdx}
            />
          ))}
        </View>
      ))}
    </View>
  );
}
