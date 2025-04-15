import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export default function RGreatGrandChild() {
  const seconds = useSelector((state: RootState) => state.seconds);
  console.log("GreatGrandChild Redux is rendered with seconds:", seconds);
  return (
    <View>
      <Text>rGreatGrandChild Seconds: {seconds}</Text>
    </View>
  );
}
