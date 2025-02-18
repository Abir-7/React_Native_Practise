import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { theme } from "@/lib/ThemeProvider/ThemeProvider";
import { Ionicons } from "@expo/vector-icons";
import PageTitle from "@/components/PageTitle/PageTitle";
import RoundImage from "@/components/RoundImage/RoundImage";
import CInput from "@/components/form/CInput";
import CForm from "@/components/form/CForm";

const Chat = () => {
  const { userId } = useLocalSearchParams();
  const messages = [
    { id: "1", text: "Hello!", sender: "me" },
    { id: "2", text: "Hi there!", sender: "other" },
    { id: "3", text: "How are you?", sender: "me" },
    { id: "4", text: "I'm good, thanks!", sender: "other" },
    { id: "5", text: "Hello!", sender: "me" },
    { id: "6", text: "Hi there!", sender: "other" },
    { id: "7", text: "How are you?", sender: "me" },
    { id: "8", text: "I'm good, thanks!", sender: "other" },
  ];

  const router = useRouter();
  return (
    <View
      style={{
        paddingRight: 4,
        paddingLeft: 4,
        backgroundColor: theme.primaryBgColor,
        height: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 5,
          alignItems: "center",
        }}
      >
        <Ionicons
          onPress={() => {
            router.push("/(auth)/(tabs)");
          }}
          style={{ marginLeft: 10, fontWeight: 500 }}
          name="arrow-back-sharp"
          size={20}
          color={theme.primaryTextColor}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 4,
          }}
        >
          <RoundImage image="" width={50} height={50}></RoundImage>
          <View>
            <Text style={{ color: theme.primaryTextColor }}> User Name</Text>
            <Text style={{ color: theme.secondaryTextColor, fontSize: 12 }}>
              {" "}
              13 min ago
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={[
                styles.messageContainer,
                item.sender === "me" ? styles.myMessage : styles.otherMessage,
              ]}
            >
              <Text style={styles.messageText}>{item.text}</Text>
            </View>
          )}
          inverted // Ensures the latest messages appear at the bottom
        />
      </View>

      <View style={{ display: "flex", flexDirection: "row" }}>
        <TextInput
          style={{
            flex: 1,
            borderColor: theme.secondaryTextColor,
            borderWidth: 1,
          }}
        ></TextInput>
        <Ionicons name="camera" size={20} color="black" />
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  messageContainer: {
    maxWidth: "70%",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  myMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#4CAF50", // Green for sent messages
  },
  otherMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#E0E0E0", // Gray for received messages
  },
  messageText: {
    color: "white",
  },
});
