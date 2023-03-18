import { View } from "react-native";

export default function Cross() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        transform: [{ rotate: "45deg" }],
      }}
    >
      <View
        style={{
          height: 25,
          width: 80,
          backgroundColor: "black",
          position: "absolute",
        }}
      />
      <View
        style={{
          height: 80,
          width: 25,
          position: "absolute",
          backgroundColor: "black",
        }}
      />
    </View>
  );
}

export function SmallCross() {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        transform: [{ rotate: "45deg" }],
      }}
    >
      <View
        style={{
          height: 15,
          width: 40,
          backgroundColor: "black",
        }}
      />
      <View
        style={{
          height: 40,
          width: 15,
          position: "absolute",
          backgroundColor: "black",
        }}
      />
    </View>
  );
}
