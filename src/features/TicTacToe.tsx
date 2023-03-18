import { useRef } from "react";
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import Board from "./components/Board";
import Circle, { SmallCircle } from "./components/Circle";
import Cross, { SmallCross } from "./components/Cross";
import { resetBoard, selectTurn, selectWinner } from "./store/TicTacToeSlice";

const DIMENSIONS = Dimensions.get("screen");
const CONFETTI_COUNT = 200;

export default function Game() {
  const winner = useAppSelector(selectWinner);
  const turn = useAppSelector(selectTurn);
  const dispatch = useAppDispatch();
  const confettiLeftRef = useRef<ConfettiCannon>(null);
  const confettiRightRef = useRef<ConfettiCannon>(null);

  if (winner) {
    confettiLeftRef.current?.start();
    confettiRightRef.current?.start();
  }

  function handleReset() {
    dispatch(resetBoard());
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tic Tac Toe</Text>
      <View style={styles.turnIndicator}>
        <Text style={styles.turnIndicatorText}>Current turn : </Text>
        {turn === 1 ? <SmallCircle /> : <SmallCross />}
      </View>
      <View style={styles.boardContainer}>
        <Board />
      </View>
      {winner && (
        <Text style={styles.winnerText}>
          The winner is {winner === 1 ? "Circle" : "Cross"}
        </Text>
      )}
      {winner && (
        <TouchableOpacity onPress={handleReset} style={styles.resetButton}>
          <Text style={styles.resetButtonText}>Restart</Text>
        </TouchableOpacity>
      )}
      <ConfettiCannon
        ref={confettiLeftRef}
        count={CONFETTI_COUNT}
        origin={{ x: 0, y: -DIMENSIONS.height }}
        fadeOut
        autoStart={false}
        explosionSpeed={500}
      />
      <ConfettiCannon
        ref={confettiRightRef}
        count={CONFETTI_COUNT}
        origin={{ x: DIMENSIONS.width, y: -DIMENSIONS.height }}
        fadeOut
        autoStart={false}
        explosionSpeed={500}
        autoStartDelay={300}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 60,
    fontWeight: "900",
    textAlign: "center",
  },
  turnIndicator: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  turnIndicatorText: {
    fontSize: 40,
    fontWeight: "600",
  },
  boardContainer: {
    alignItems: "center",
    paddingTop: 40,
  },
  winnerText: {
    fontSize: 38,
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 26,
  },
  resetButton: {
    padding: 16,
    borderRadius: 6,
    backgroundColor: "#dc2626",
    justifyContent: "center",
    alignItems: "center",
  },
  resetButtonText: {
    color: "#fef2f2",
    fontSize: 24,
    fontWeight: "bold",
  },
});
