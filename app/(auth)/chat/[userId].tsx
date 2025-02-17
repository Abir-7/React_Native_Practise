import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Chat = () => {
  const { userId } = useLocalSearchParams();
  return (
    <View>
      <Text>Chat data {userId}</Text>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({});
