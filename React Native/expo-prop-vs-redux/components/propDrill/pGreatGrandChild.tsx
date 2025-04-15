import React from "react";
import { Text, View } from "react-native";

export default function PGreatGrandChild({ seconds }: { seconds: number }) {
  console.log(
    "----->     GreatGrandChild Parameter is rendered with seconds:",
    seconds
  );
  return (
    <View>
      <Text>pGreatGrandChild Seconds: {seconds}</Text>
    </View>
  );
}
