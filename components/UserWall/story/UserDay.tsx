import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import { theme } from "@/lib/ThemeProvider/ThemeProvider";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

const UserDay = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          display: "flex",
          flexDirection: "row",
          gap: 5,
        }}
      >
        <View
          style={{
            width: 110,
            height: 160,
            borderRadius: 12,
            backgroundColor: theme.primaryTextColor,
            overflow: "hidden",
          }}
        >
          <ImageBackground
            src="https://thumbs.dreamstime.com/b/gas-mask-man-wearing-his-face-32705680.jpg"
            borderRadius={12}
            borderBottomRightRadius={0}
            style={{
              width: 110,
              height: 100,

              borderRadius: 12,
              backgroundColor: theme.secondaryTextColor,
            }}
          >
            <View style={styles.addDay}>
              <Ionicons name="add-circle" size={40}></Ionicons>
            </View>
          </ImageBackground>
        </View>

        {arr.map((i) => (
          <Link key={i} href={"/(auth)/userStory/userStories"}>
            <ImageBackground
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsc55IINDH5RiwPABwXh5uu0P1iKC1PKEluHR9K2MZLXlikVQTC2tKNonynH0v3dkoDQY&usqp=CAU"
              style={styles.background}
            >
              <View style={styles.userProfileIcon}>
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT--5I7-AM_uEYNgG35o6hG1E-jtlDr8pbZMki7yeedqDFfi1LmXqm-nmScen-JWPX2qI8&usqp=CAU"
                  style={{ width: "100%", height: "100%", borderRadius: 100 }}
                ></Image>
              </View>

              <Text
                style={{
                  marginTop: "auto",
                  marginBottom: 5,
                  marginLeft: 9,
                  color: theme.primaryBgColor,
                }}
              >
                Name
              </Text>
            </ImageBackground>
          </Link>
        ))}
      </ScrollView>
    </View>
  );
};

export default UserDay;

const styles = StyleSheet.create({
  userProfileIcon: {
    width: 30,
    height: 30,
    marginLeft: "8%",
    marginRight: "auto",
    marginTop: "8%",
    borderRadius: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.primaryTextColor,
    padding: 2,
    overflow: "hidden",
  },
  background: {
    width: 110,
    height: 160,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: theme.secondaryTextColor,
  },
  addDay: {
    width: 40,
    height: 40,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "70%",
    borderRadius: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.primaryBgColor,
  },
});
