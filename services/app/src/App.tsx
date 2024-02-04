import { StatusBar } from "expo-status-bar";
import { RootStack } from "navigation/RootStack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <RootStack />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
