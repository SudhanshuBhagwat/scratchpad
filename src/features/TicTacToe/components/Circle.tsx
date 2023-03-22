import { View } from "react-native";

export default function Circle({
  size,
  stroke,
}: {
  size: number;
  stroke: number;
}) {
  return (
    <View
      style={{
        height: size,
        width: size,
        borderRadius: size / 2,
        borderWidth: stroke,
      }}
    />
  );
}
