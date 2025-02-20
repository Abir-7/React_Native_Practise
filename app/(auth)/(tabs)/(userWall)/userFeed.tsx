import {
  Image,
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useRef } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { theme } from "@/lib/ThemeProvider/ThemeProvider";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

const UserFeed = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = ["100%"];
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  const handlePress = () => {
    // Set the selected user and open the bottom sheet

    if (sheetRef.current) {
      sheetRef.current.expand(); // Expand the sheet when long-pressed
    }
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
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
                height: 30,
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
          </View>

          {/* Bottom Sheet */}
          <BottomSheet
            handleIndicatorStyle={{ display: "none" }}
            index={-1}
            ref={sheetRef}
            enablePanDownToClose={false}
          >
            <BottomSheetView>
              <Text>ssss</Text>
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
});
