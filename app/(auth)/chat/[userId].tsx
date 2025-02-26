import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import React, { useState, useCallback, useEffect, useRef } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { theme } from "@/lib/ThemeProvider/ThemeProvider";
import { Ionicons } from "@expo/vector-icons";
import RoundImage from "@/components/RoundImage/RoundImage";
import { imagePicker } from "@/lib/utils/imagePicker";

const Chat = () => {
  const { userId } = useLocalSearchParams();
  const [message, setMessage] = useState(""); // For the input message
  const [messages, setMessages] = useState<
    {
      id: string;
      text?: string;
      image?: string;
      sender: string;
    }[]
  >([
    { id: "1", text: "Hello!", sender: "me" },
    { id: "2", text: "Hi there!", sender: "other" },
    { id: "3", text: "How are you?", sender: "me" },
    { id: "4", text: "I'm good, thanks!", sender: "other" },
    { id: "5", text: "Hello!", sender: "me" },
    { id: "6", text: "Hi there!", sender: "other" },
    { id: "7", text: "How are you?", sender: "me" },
    { id: "8", text: "I'm good, thanks!", sender: "other" },
    { id: "9", text: "Hello!", sender: "me" },
    { id: "21", text: "Hi there!", sender: "other" },
    { id: "31", text: "How are you?", sender: "me" },
    { id: "41", text: "I'm good, thanks!", sender: "other" },
    { id: "51", text: "Hello!", sender: "me" },
    { id: "61", text: "Hi there!", sender: "other" },
    { id: "71", text: "How are you?", sender: "me" },
    { id: "81", text: "I'm good, thanks!", sender: "other" },
    { id: "11", text: "Hello!", sender: "me" },
    { id: "22", text: "Hi there!", sender: "other" },
    { id: "32", text: "How are you?", sender: "me" },
    { id: "42", text: "I'm good, thanks!", sender: "other" },
    { id: "52", text: "Hello!", sender: "me" },
    { id: "62", text: "Hi there!", sender: "other" },
    { id: "72", text: "How are you?", sender: "me" },
    { id: "82", text: "I'm good, thanks!", sender: "other" },
  ]);

  const router = useRouter();

  const sendMessage = (isImage: boolean, data: string) => {
    const newMessage = {
      id: Date.now().toString(),
      text: !isImage ? data.trim() : undefined,
      image: isImage ? data : undefined,
      sender: "me",
    };
    setMessages((prevMessages) => [newMessage, ...prevMessages]);
    setMessage("");
  };

  const handleSendMessage = async (isImage: boolean) => {
    if (isImage) {
      const urls = await imagePicker(false);
      if (urls && urls.length > 0) sendMessage(true, urls[0]);
    } else {
      sendMessage(false, message);
    }
  };

  // Render each message item
  const renderMessageItem = useCallback(
    ({
      item,
    }: {
      item: { id: string; text?: string; image?: string; sender: string };
    }) => (
      <View
        style={[
          styles.messageContainer,
          item.sender === "me" ? styles.myMessage : styles.otherMessage,
        ]}
      >
        {/* Render image or text */}
        {item.image ? (
          <Image source={{ uri: item.image }} style={styles.messageImage} />
        ) : (
          <Text style={styles.messageText}>{item.text}</Text>
        )}
      </View>
    ),
    []
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Ionicons
          onPress={() => router.push("/(auth)/(tabs)")}
          style={styles.backIcon}
          name="arrow-back-sharp"
          size={20}
          color={theme.primaryTextColor}
        />
        <View style={styles.userInfoContainer}>
          <RoundImage image="" width={50} height={50} />
          <View>
            <Text style={styles.userName}>User Name</Text>
            <Text style={styles.lastSeen}>13 min ago</Text>
          </View>
        </View>
      </View>

      {/* Messages List */}
      <FlatList
        inverted
        scrollsToTop={false}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessageItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.messagesContainer}
      />

      {/* Input Container */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={message}
          onChangeText={setMessage}
          placeholder="Type a message"
          placeholderTextColor={theme.secondaryTextColor}
        />
        <Ionicons
          onPress={() => handleSendMessage(true)}
          name="camera"
          size={20}
          color={theme.primaryTextColor}
          style={styles.cameraIcon}
        />
        <Ionicons
          name="send"
          size={20}
          color={theme.primaryTextColor}
          onPress={() => handleSendMessage(false)}
          style={styles.sendIcon}
        />
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 4,
    backgroundColor: theme.primaryBgColor,
  },
  headerContainer: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    paddingVertical: 10,
  },
  backIcon: {
    marginLeft: 10,
    fontWeight: "500",
  },
  userInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  userName: {
    color: theme.primaryTextColor,
  },
  lastSeen: {
    color: theme.secondaryTextColor,
    fontSize: 12,
  },
  messagesContainer: {
    flexGrow: 1,
    justifyContent: "flex-end",
    paddingBottom: 10,
  },
  messageContainer: {
    maxWidth: "70%",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  myMessage: {
    alignSelf: "flex-end",
    backgroundColor: theme.primaryTextColor,
  },
  otherMessage: {
    alignSelf: "flex-start",
    backgroundColor: theme.secondaryTextColor,
  },
  messageText: {
    color: "white",
  },
  messageImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: theme.secondaryTextColor,
    paddingTop: 10,
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    borderColor: theme.secondaryTextColor,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: theme.primaryBgColor,
    color: theme.primaryTextColor,
  },
  cameraIcon: {
    marginLeft: 10,
  },
  sendIcon: {
    marginLeft: 10,
  },
});
