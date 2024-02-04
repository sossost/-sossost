import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LINK } from "../constants";
import { Main, Profile } from "screens";

const Tabs = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tabs.Navigator
      initialRouteName={LINK.MAIN}
      screenOptions={{
        tabBarActiveTintColor: "#167DD8",
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen name={LINK.MAIN} component={Main} />
      <Tabs.Screen name={LINK.PROFILE} component={Profile} />
    </Tabs.Navigator>
  );
}
