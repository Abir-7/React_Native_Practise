import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "@/lib/ThemeProvider/ThemeProvider";
import { useRouter } from "expo-router";
import PageTitle from "@/components/PageTitle/PageTitle";
import CForm from "@/components/form/CForm";
import CInput from "@/components/form/CInput";
import { CButton } from "@/components/form/CButton";
import { FieldValues } from "react-hook-form";
import { Checkbox } from "react-native-paper";

const CreateGroup = () => {
  const router = useRouter();

  const [checkedState, setCheckedState] = useState<boolean[]>([]); // Track selected checkboxes
  const [selectedUsers, setSelectedUsers] = useState<
    { name: string; image: string }[]
  >([]); // Track selected user details

  const onFormSubmit = async (data: FieldValues) => {
    console.log({ ...data, selectedUsers });
    router.push("/(auth)/group/addGroupImage");
  };

  // Example users with names and image URLs
  const arr = [
    {
      name: "User 1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8roqsMKWpgmChLU0QbRik3Yrl6YEdb0xHwtWY7omBnzMxm12R1M4w0II&s",
    },
    {
      name: "User 2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8roqsMKWpgmChLU0QbRik3Yrl6YEdb0xHwtWY7omBnzMxm12R1M4w0II&s",
    },
    {
      name: "User 3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8roqsMKWpgmChLU0QbRik3Yrl6YEdb0xHwtWY7omBnzMxm12R1M4w0II&s",
    },
    {
      name: "User 4",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8roqsMKWpgmChLU0QbRik3Yrl6YEdb0xHwtWY7omBnzMxm12R1M4w0II&s",
    },
    {
      name: "User 5",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8roqsMKWpgmChLU0QbRik3Yrl6YEdb0xHwtWY7omBnzMxm12R1M4w0II&s",
    },
    {
      name: "User 6",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8roqsMKWpgmChLU0QbRik3Yrl6YEdb0xHwtWY7omBnzMxm12R1M4w0II&s",
    },
    {
      name: "User 7",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8roqsMKWpgmChLU0QbRik3Yrl6YEdb0xHwtWY7omBnzMxm12R1M4w0II&s",
    },
    {
      name: "User 8",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8roqsMKWpgmChLU0QbRik3Yrl6YEdb0xHwtWY7omBnzMxm12R1M4w0II&s",
    },
    {
      name: "User 9",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8roqsMKWpgmChLU0QbRik3Yrl6YEdb0xHwtWY7omBnzMxm12R1M4w0II&s",
    },
    {
      name: "User 10",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8roqsMKWpgmChLU0QbRik3Yrl6YEdb0xHwtWY7omBnzMxm12R1M4w0II&s",
    },
    {
      name: "User 11",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8roqsMKWpgmChLU0QbRik3Yrl6YEdb0xHwtWY7omBnzMxm12R1M4w0II&s",
    },
  ];

  const handleCheckboxChange = (index: number, isChecked: boolean) => {
    const newCheckedState = [...checkedState];
    newCheckedState[index] = isChecked;
    setCheckedState(newCheckedState);

    if (isChecked) {
      setSelectedUsers((prev) => [
        ...prev,
        { name: arr[index].name, image: arr[index].image },
      ]);
    } else {
      setSelectedUsers((prev) =>
        prev.filter((user) => user.name !== arr[index].name)
      );
    }
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
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Ionicons
          onPress={() => {
            router.push("/(auth)/(tabs)/group");
          }}
          style={{ marginLeft: 10, fontWeight: 500 }}
          name="arrow-back-sharp"
          size={20}
          color={theme.primaryTextColor}
        />
        <PageTitle title="Create Group" />
      </View>

      {/* User List */}
      <View style={{ marginTop: 10, paddingLeft: 10, paddingRight: 10 }}>
        <CForm>
          <CInput name="name" required="Name is required" label="Group Name" />

          <View>
            <Text style={{ paddingBottom: 5, fontWeight: 500 }}>
              Selected Users:
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 8,
              }}
            >
              {selectedUsers.map((user, index) => (
                <View
                  key={index}
                  style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
                >
                  <Image
                    style={{ width: 25, height: 25, borderRadius: 100 }}
                    source={{ uri: user.image }}
                  />
                  <Text style={{ fontSize: 14 }}>{user.name}</Text>
                </View>
              ))}
            </View>
          </View>

          <CButton title="Create" onFormSubmit={onFormSubmit} />
        </CForm>
      </View>

      {/* User Checkboxes */}
      <ScrollView
        style={{
          paddingLeft: 10,
          paddingRight: 10,

          marginTop: 17,
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        {arr.map((user, index) => (
          <View
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: 5,
              marginBottom: 5,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Image
                style={{ width: 45, height: 45, borderRadius: 100 }}
                source={{ uri: user.image }}
              />
              <Text style={{ fontSize: 16 }}>{user.name}</Text>
            </View>
            <Checkbox
              color={theme.primaryTextColor}
              status={checkedState[index] ? "checked" : "unchecked"}
              onPress={() => handleCheckboxChange(index, !checkedState[index])}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default CreateGroup;

const styles = StyleSheet.create({});
