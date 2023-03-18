import { View } from "react-native";

export default function Circle() {
  return (
    <View
      style={{
        height: 80,
        width: 80,
        borderRadius: 50,
        borderWidth: 15,
      }}
    />
  );
}

export function SmallCircle() {
  return (
    <View
      style={{
        height: 40,
        width: 40,
        borderRadius: 50,
        borderWidth: 8,
      }}
    />
  );
}
