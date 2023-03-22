import { View } from "react-native";

export default function Cross({
  height,
  width,
}: {
  height: number;
  width: number;
}) {
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
          height,
          width,
          backgroundColor: "black",
          position: "absolute",
        }}
      />
      <View
        style={{
          height,
          width,
          position: "absolute",
          backgroundColor: "black",
        }}
      />
    </View>
  );
}
