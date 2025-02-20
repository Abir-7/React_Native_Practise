import PageTitle from "@/components/PageTitle/PageTitle";
import RoundImage from "@/components/RoundImage/RoundImage";
import SearchField from "@/components/SearchField/SearchField";
import SingleGroupUser from "@/components/SingleGroup_User/SingleGroupUser";
import { theme } from "@/lib/ThemeProvider/ThemeProvider";
import { Ionicons } from "@expo/vector-icons";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Link } from "expo-router";
import { useRef, useState } from "react";
import { ScrollView, Text, View, StyleSheet, Alert } from "react-native";
import { LongPressGestureHandler } from "react-native-gesture-handler";

export default function Index() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const snapPoints = ["55%"];
  const sheetRef = useRef<BottomSheet>(null);
  const [selectedUser, setSelectedUser] = useState<number | null>(null);

  const handleLongPress = (userId: number) => {
    // Set the selected user and open the bottom sheet
    setSelectedUser(userId);
    if (sheetRef.current) {
      sheetRef.current.expand(); // Expand the sheet when long-pressed
    }
  };

  const handleDeleteUser = () => {
    // Show confirmation before deleting
    Alert.alert(
      "Delete User",
      `Are you sure you want to delete user ${selectedUser}?`,
      [
        {
          text: "Cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            // Handle user deletion here
            console.log(`User ${selectedUser} deleted`);
            setSelectedUser(null);
            sheetRef.current?.close(); // Close the bottom sheet after deleting
          },
        },
      ]
    );
  };

  return (
    <View
      style={{
        paddingRight: 0,
        paddingLeft: 0,
        backgroundColor: theme.primaryBgColor,
        height: "100%",
      }}
    >
      <PageTitle title="Chats"></PageTitle>
      <SearchField></SearchField>
      <View
        style={{
          marginTop: 9,
          marginBottom: 9,
        }}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          {arr.map((i) => (
            <Link
              key={i}
              style={{ marginLeft: 8, marginRight: 4 }}
              href={"/(auth)/chat/1"}
            >
              <View
                style={{
                  width: "auto",
                }}
              >
                {/* user image */}
                <RoundImage image=""></RoundImage>
                <Text
                  style={{
                    width: "100%",
                    textAlign: "center",
                    color: theme.primaryTextColor,
                  }}
                >
                  name {/* Name */}
                </Text>
              </View>
            </Link>
          ))}
        </ScrollView>
      </View>

      {/* all user chat */}
      <View style={styles.allUserChatView_1}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.allUserChatScrollview}
        >
          {/* user chat info */}
          {arr.map((i) => (
            <LongPressGestureHandler
              key={i}
              onHandlerStateChange={(event) => {
                if (event.nativeEvent.state === 4) {
                  handleLongPress(i); // Trigger long press for each user
                }
              }}
            >
              <View>
                <SingleGroupUser data={i}></SingleGroupUser>
              </View>
            </LongPressGestureHandler>
          ))}
        </ScrollView>
      </View>

      {/* Bottom Sheet */}
      <BottomSheet
        index={-1}
        aria-hidden
        ref={sheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
      >
        <BottomSheetView>
          {selectedUser && (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                display: "flex",
                paddingLeft: 7,
                paddingTop: 2,
                gap: 2,
              }}
            >
              <Ionicons
                style={{
                  color: "red",
                  fontWeight: "bold",
                }}
                name="trash"
                size={22}
              ></Ionicons>
              <Text
                onPress={handleDeleteUser}
                style={{
                  color: "red",
                  fontWeight: "bold",
                }}
              >
                Delete User
              </Text>
            </View>
          )}
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  allUserChatView_1: {
    paddingRight: 2,
    paddingLeft: 2,
    marginBottom: 2,
    height: 100, // Ensure the parent has a defined height
    gap: 10,
    paddingStart: 10,
    flex: 1, // Ensure the parent takes up the full available space
  },
  allUserChatScrollview: {
    flexDirection: "column",
    display: "flex",
    gap: 8,
    padding: 1,
  },
});
