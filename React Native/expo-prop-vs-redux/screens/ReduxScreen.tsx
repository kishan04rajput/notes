import React from "react";
import { View, Text } from "react-native";
import RParent from "../components/redux/rParent";

export default function ReduxScreen() {
  console.log("ReduxScreen is rendered!");
  return (
    <View>
      <Text>Redux</Text>
      <RParent />
    </View>
  );
}
