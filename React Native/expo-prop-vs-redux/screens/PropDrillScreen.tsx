import React from "react";
import { View, Text } from "react-native";
import PParent from "../components/propDrill/pParent";

export default function PropDrillScreen() {
  console.log("----->     PropDrillScreen is rendered!");
  return (
    <View>
      <Text>Prop Drilling</Text>
      <PParent />
    </View>
  );
}
