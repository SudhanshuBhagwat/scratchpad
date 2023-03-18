import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import Game from "./src/features/TicTacToe";
import { store } from "./src/store/store";

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <Provider store={store}>
        <Game />
      </Provider>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
