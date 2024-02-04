import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { LINK } from "constants/Link";

import BottomTab from "navigation/BottomTab";

const Stack = createStackNavigator();

export const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={LINK.MAIN}
      >
        <Stack.Screen name={LINK.MAIN} component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
