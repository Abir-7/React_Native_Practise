import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import * as Progress from "react-native-progress";
import { theme } from "@/lib/ThemeProvider/ThemeProvider";
import { Redirect, useRouter } from "expo-router";

const UserStories = () => {
  const router = useRouter();
  const userDays = [
    "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_640.jpg",
    "https://media.istockphoto.com/id/1398622058/vector/silhouette-clip-art-of-a-man-gazing-at-a-suspiciously-shining-full-moon.jpg?s=612x612&w=0&k=20&c=dGITqVVQc5vqN0ZWzGU4jM_Jm1xK8BB5gJMAlzyXf54=",
  ]; // Example user days
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (currentDayIndex < userDays.length) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 1) {
            clearInterval(interval);
            setTimeout(() => {
              setCurrentDayIndex((prevIndex) => prevIndex + 1);
              setProgress(0);
            }, 100);
            return 1;
          }
          return prevProgress + 0.01;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [currentDayIndex]);

  if (currentDayIndex >= userDays.length) {
    return <Redirect href={"/(auth)/(tabs)/(userWall)/userFeed"}></Redirect>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        {userDays.map((day, index) => (
          <Progress.Bar
            key={day}
            borderRadius={10}
            color={theme.primaryTextColor}
            style={[
              styles.progressBar,
              { marginRight: index < userDays.length - 1 ? 5 : 0 },
            ]}
            borderWidth={0.5}
            progress={
              index === currentDayIndex
                ? progress
                : index < currentDayIndex
                  ? 1
                  : 0
            }
            height={5}
            width={null}
            animated={index === currentDayIndex}
          />
        ))}
      </View>
      <View
        style={{
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 5,
          paddingBottom: 10,
          width: "100%",
          height: "auto",
        }}
      >
        <Image
          width={100}
          height={100}
          source={{
            uri: userDays[currentDayIndex],
          }} // Replace with your image URL
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  progressContainer: {
    flexDirection: "row",

    width: "90%",
  },
  progressBar: {
    flex: 1,
  },
});

export default UserStories;
