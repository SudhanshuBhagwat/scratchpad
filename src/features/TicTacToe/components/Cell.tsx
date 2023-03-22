import { Pressable, View } from "react-native";
import { GamePiece } from "../index.types";
import Circle from "./Circle";
import Cross from "./Cross";

interface CellProps {
  cellPiece: GamePiece;
  handleChange: (row: number, column: number) => void;
  row: number;
  column: number;
}

const CELL_SIZE = 115;

export default function Cell({
  cellPiece,
  handleChange,
  row,
  column,
}: CellProps) {
  function getComponent(piece: GamePiece) {
    switch (piece) {
      case GamePiece.CIRCLE:
        return <Circle size={80} stroke={15} />;
      case GamePiece.CROSS:
        return <Cross height={80} width={25} />;
      default:
        return null;
    }
  }

  return (
    <Pressable
      onPress={() => handleChange(row, column)}
      style={{
        height: CELL_SIZE,
        width: CELL_SIZE,
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {getComponent(cellPiece)}
    </Pressable>
  );
}
