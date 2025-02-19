import { ThemeProvider } from "@/lib/ThemeProvider/ThemeProvider";
import { store } from "@/redux/store";

import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <GestureHandlerRootView>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(auth)"></Stack.Screen>
            <Stack.Screen name="login"></Stack.Screen>
          </Stack>
        </GestureHandlerRootView>
      </ThemeProvider>
    </Provider>
  );
}
