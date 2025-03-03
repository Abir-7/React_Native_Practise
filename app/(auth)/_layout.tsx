import { useAppSelector } from "@/redux/hooks";
import { Redirect, Stack } from "expo-router";
import { useEffect } from "react";

export default function AuthLayout() {
  const { user } = useAppSelector((state) => state.auth);

  // if (!user) {
  //   return <Redirect href={"/login"} />;
  // }
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="chat" options={{ headerShown: false }} />
      <Stack.Screen name="editProfile" options={{ headerShown: false }} />
      <Stack.Screen name="group" options={{ headerShown: false }} />
      <Stack.Screen name="userStory" options={{ headerShown: false }} />
    </Stack>
  );
}
