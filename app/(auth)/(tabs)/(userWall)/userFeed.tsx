import {
  Alert,
  Image,
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { theme } from "@/lib/ThemeProvider/ThemeProvider";
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { Ionicons } from "@expo/vector-icons";

import { imagePicker } from "@/lib/utils/imagePicker";

const UserFeed = () => {
  const [text, setText] = useState("");
  const [refreshing, setRefreshing] = React.useState(false);
  const [images, setImages] = useState<string[]>([]);
  const sheetRef = useRef<BottomSheet>(null);

  const snapPoints = ["100%"];

  const [isOpen, setIsOpen] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  const handlePress = () => {
    if (sheetRef.current) {
      sheetRef.current.expand();
      setIsOpen(true);
    }
  };
  const handleSheetPress = () => {
    if (images.length > 0 || text) {
      Alert.alert(
        "Discard Save?", // Title
        "Are you sure you want to discard your changes?", // Message
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "Discard",
            style: "destructive",
            onPress: () => {
              sheetRef.current?.close();
              setIsOpen(false);
              setImages([]);
              setText("");
            },
          },
        ],
        { cancelable: true }
      );
    } else {
      sheetRef.current?.close();
      setIsOpen(false);
    }
  };

  const onImageClick = async () => {
    const imageurl = await imagePicker(true, false);

    if (sheetRef.current && imageurl) {
      setImages(imageurl);
      sheetRef.current.expand();
      setIsOpen(true);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              enabled={isOpen == false}
              onRefresh={onRefresh}
            />
          }
        >
          <View
            style={{
              marginTop: 10,
              marginLeft: 8,
              marginRight: 8,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Image
              style={{ width: 50, height: 50, borderRadius: 100 }}
              width={20}
              height={20}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s"
            ></Image>
            <Pressable
              onPress={() => handlePress()}
              style={({ pressed }) => ({
                height: 35,
                width: "auto",
                flex: 1,
                border: theme.primaryTextColor,
                borderWidth: 1,
                borderRadius: 20,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              })}
            >
              <Text style={{ marginLeft: 5 }}> What's on your mind?</Text>
            </Pressable>
            <Ionicons
              onPress={onImageClick}
              name="images-sharp"
              size={22}
              color={theme.primaryTextColor}
            ></Ionicons>
          </View>

          {/* Bottom Sheet */}
          <BottomSheet
            snapPoints={snapPoints}
            handleIndicatorStyle={{ display: "none" }}
            index={-1}
            ref={sheetRef}
            enableDynamicSizing={false}
            enableOverDrag={false}
          >
            <BottomSheetView style={{ height: "100%" }}>
              <View
                style={{
                  display: "flex",

                  flexDirection: "row",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <Ionicons
                  onPress={handleSheetPress}
                  name="arrow-back"
                  style={{ marginLeft: 5 }}
                  size={22}
                />
                <Text
                  style={{ fontSize: 20, fontWeight: "500", marginBottom: 2 }}
                >
                  Create Post
                </Text>
              </View>
              <BottomSheetScrollView>
                <View
                  style={{
                    minHeight: 70,
                    backgroundColor: "#fff", // Ensure background fossssssssr visibility
                    borderRadius: 8, // Optional rounded corners
                    padding: 10, // Padding inside the view
                    shadowColor: theme.secondaryTextColor,
                    shadowOffset: { width: 0, height: 4 }, // Shadow for iOS
                    shadowOpacity: 0.3, // Adjust opacity
                    shadowRadius: 5, // Soft shadow for iOS
                    elevation: 1, // Shadow for Android
                  }}
                >
                  <TextInput
                    onChangeText={setText}
                    value={text}
                    scrollEnabled
                    multiline
                    style={{ minHeight: 70, textAlignVertical: "top" }}
                    placeholder=" What's on your mind?"
                  ></TextInput>
                </View>
                <View>
                  {images.length > 0 && (
                    <Image
                      style={{
                        width: "auto",
                        minHeight: "100%",
                        objectFit: "contain",
                      }}
                      width={200}
                      height={300}
                      source={{ uri: images[0] }}
                    />
                  )}
                </View>
              </BottomSheetScrollView>
              <View
                style={{
                  marginTop: "auto",
                  borderTopWidth: 0.2,
                  height: 40,
                  borderTopColor: theme.secondaryTextColor,
                  display: "flex",
                  justifyContent: "center",
                  paddingLeft: 10,
                }}
              >
                <Ionicons
                  onPress={onImageClick}
                  name="images-sharp"
                  size={22}
                  color={theme.primaryTextColor}
                ></Ionicons>
              </View>
            </BottomSheetView>
          </BottomSheet>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default UserFeed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    paddingLeft: 3,
    paddingRight: 3,
  },
  textarea: {
    // Adjust the height as needed
    height: "80%",
    textAlignVertical: "top",
    padding: 10,
    backgroundColor: "red",
    width: "100%", // You can adjust the width to fit your design
  },
});
