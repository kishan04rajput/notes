import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from "react-redux";
import { store } from "./store";
import PropDrillScreen from "./screens/PropDrillScreen";
import ReduxScreen from "./screens/ReduxScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="PropDrill">
          <Tab.Screen name="PropDrill" component={PropDrillScreen} />
          <Tab.Screen name="Redux" component={ReduxScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
