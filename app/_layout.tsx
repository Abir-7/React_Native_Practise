import { ThemeProvider } from "@/lib/ThemeProvider/ThemeProvider";
import { store } from "@/redux/store";

import { Stack } from "expo-router";
import { Provider } from "react-redux";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(auth)"></Stack.Screen>
          <Stack.Screen name="login"></Stack.Screen>
        </Stack>
      </ThemeProvider>
    </Provider>
  );
}
