import { useAppSelector } from "@/redux/hooks";
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="userStories" options={{ headerShown: false }} />
    </Stack>
  );
}
